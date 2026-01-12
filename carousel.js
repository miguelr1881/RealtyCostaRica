class PropertyCarousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dotsContainer = document.getElementById('dots');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        
        this.currentIndex = 0;
        this.autoScrollInterval = null;
        this.autoScrollSpeed = 3000;
        this.autoScrollPauseTime = 60000;
        this.slideCount = this.slides.length;
        this.isCarouselActive = this.slideCount > 3;
        this.userInteracted = false;
        this.pauseTimeout = null;
        this.isTransitioning = false;
        
        // Touch properties
        this.touchStartX = 0;
        this.touchEndX = 0;
        this.isDragging = false;
        
        this.init();
    }

    init() {
        // Create clones for infinite scroll
        this.createClones();
        
        // Hide buttons if 3 or fewer items
        if (!this.isCarouselActive) {
            this.prevBtn.style.display = 'none';
            this.nextBtn.style.display = 'none';
        } else {
            this.createDots();
            this.prevBtn.addEventListener('click', () => {
                if (this.isTransitioning) return;
                this.pauseAndRestartAutoScroll();
                this.userInteracted = true;
                this.prevSlide();
            });
            this.nextBtn.addEventListener('click', () => {
                if (this.isTransitioning) return;
                this.pauseAndRestartAutoScroll();
                this.userInteracted = true;
                this.nextSlide();
            });
            
            document.querySelectorAll('.dot').forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    if (this.isTransitioning) return;
                    this.pauseAndRestartAutoScroll();
                    this.userInteracted = true;
                    this.goToSlide(index);
                });
            });
        }
        
        // Set initial position
        this.currentIndex = this.slideCount;
        this.updateCarousel(false);
        
        // Touch events
        this.track.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
        this.track.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: true });
        this.track.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
        
        // Start auto-scroll
        this.startAutoScroll();
        
        // Pause auto-scroll on hover
        this.track.addEventListener('mouseenter', () => this.pauseAndRestartAutoScroll());
        this.track.addEventListener('mouseleave', () => {});
    }

    createClones() {
        const allSlides = Array.from(this.slides);
        
        // Add clones at the end
        allSlides.forEach(slide => {
            const clone = slide.cloneNode(true);
            this.track.appendChild(clone);
        });
        
        // Add clones at the beginning
        for (let i = allSlides.length - 1; i >= 0; i--) {
            const clone = allSlides[i].cloneNode(true);
            this.track.insertBefore(clone, this.track.firstChild);
        }
    }

    startAutoScroll() {
        if (this.autoScrollInterval) return;
        
        this.autoScrollInterval = setInterval(() => {
            this.nextSlide();
        }, this.autoScrollSpeed);
    }

    stopAutoScroll() {
        if (this.autoScrollInterval) {
            clearInterval(this.autoScrollInterval);
            this.autoScrollInterval = null;
        }
    }

    pauseAndRestartAutoScroll() {
        this.stopAutoScroll();
        
        if (this.pauseTimeout) {
            clearTimeout(this.pauseTimeout);
        }
        
        this.pauseTimeout = setTimeout(() => {
            this.userInteracted = false;
            this.startAutoScroll();
        }, this.autoScrollPauseTime);
    }

    handleTouchStart(e) {
        this.touchStartX = e.touches[0].clientX;
        this.isDragging = true;
        this.pauseAndRestartAutoScroll();
        this.userInteracted = true;
    }

    handleTouchMove(e) {
        if (!this.isDragging) return;
        this.touchEndX = e.touches[0].clientX;
    }

    handleTouchEnd(e) {
        if (!this.isDragging) return;
        this.isDragging = false;
        
        const diff = this.touchStartX - this.touchEndX;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                this.nextSlide();
            } else {
                this.prevSlide();
            }
        }
    }

    createDots() {
        for (let i = 0; i < this.slideCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            this.dotsContainer.appendChild(dot);
        }
    }

    updateCarousel(animate = true) {
        const allSlides = this.track.querySelectorAll('.carousel-slide');
        const slideWidth = allSlides[0].offsetWidth;
        const gap = 20;
        
        const offset = this.currentIndex * (slideWidth + gap);
        
        this.track.style.transition = animate ? 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none';
        this.track.style.transform = `translateX(-${offset}px)`;
        
        // Update dots
        const realIndex = ((this.currentIndex - this.slideCount) % this.slideCount + this.slideCount) % this.slideCount;
        
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === realIndex);
        });
    }

    nextSlide() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        this.currentIndex++;
        this.updateCarousel(true);
        
        setTimeout(() => {
            this.isTransitioning = false;
            
            // Reset position if needed
            if (this.currentIndex >= this.slideCount * 2) {
                this.currentIndex = this.slideCount;
                this.updateCarousel(false);
            }
        }, 600);
    }

    prevSlide() {
        if (this.isTransitioning) return;
        this.isTransitioning = true;
        
        this.currentIndex--;
        this.updateCarousel(true);
        
        setTimeout(() => {
            this.isTransitioning = false;
            
            // Reset position if needed
            if (this.currentIndex < this.slideCount) {
                this.currentIndex = this.slideCount * 2 - 1;
                this.updateCarousel(false);
            }
        }, 600);
    }

    goToSlide(index) {
        if (this.isTransitioning) return;
        this.currentIndex = index + this.slideCount;
        this.updateCarousel(true);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new PropertyCarousel();
});
