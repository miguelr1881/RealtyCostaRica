// Auto-scroll cinematográfico y efectos premium
let hasAutoScrolled = false;

// Forzar scroll al top al recargar la página
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// También resetear al cargar
if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Forzar scroll al inicio
    window.scrollTo(0, 0);
    
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const heroSection = document.querySelector('.hero');
    const brandLanding = document.querySelector('.brand-landing');
    const navbar = document.querySelector('.navbar');
    
    // Detectar si es móvil
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    // Función de scroll optimizada
    function scrollToHero() {
        const targetPosition = heroSection.offsetTop - 70;
        
        if (isMobile) {
            // En móvil usar scroll nativo optimizado por el navegador
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        } else {
            // En desktop usar animación personalizada más suave
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 2000;
            let start = null;
            
            function smoothScroll(timestamp) {
                if (!start) start = timestamp;
                const progress = timestamp - start;
                const percentage = Math.min(progress / duration, 1);
                
                const easing = percentage < 0.5
                    ? 4 * percentage * percentage * percentage
                    : 1 - Math.pow(-2 * percentage + 2, 3) / 2;
                
                window.scrollTo(0, startPosition + (distance * easing));
                
                if (progress < duration) {
                    requestAnimationFrame(smoothScroll);
                }
            }
            
            requestAnimationFrame(smoothScroll);
        }
    }
    
    // Auto-scroll suave después de 2 segundos
    setTimeout(() => {
        if (window.scrollY === 0 && !hasAutoScrolled) {
            hasAutoScrolled = true;
            scrollToHero();
        }
    }, 2000);
    
    // Click manual en scroll indicator
    if (scrollIndicator && heroSection) {
        scrollIndicator.addEventListener('click', () => {
            hasAutoScrolled = true;
            scrollToHero();
        });
    }
    
    // Parallax effect y animaciones al scrollear (desactivado en móvil para mejor performance)
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const brandHeight = brandLanding.offsetHeight;
        
        // Solo parallax en desktop
        if (!isMobile) {
            // Parallax en brand landing
            if (scrolled < brandHeight) {
                const brandContent = document.querySelector('.brand-content');
                brandContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                brandContent.style.opacity = 1 - (scrolled / brandHeight) * 0.7;
            }
            
            // Hero parallax effect
            if (scrolled > brandHeight * 0.5) {
                const heroContent = document.querySelector('.hero-content');
                const heroScroll = scrolled - brandHeight;
                heroContent.style.transform = `translateY(${heroScroll * -0.1}px)`;
            }
        }
        
        // Animación del navbar (en todos los dispositivos, es ligera)
        if (scrolled > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.backdropFilter = 'blur(20px)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = scrolled;
    }, { passive: true });
    
    // Trigger animaciones del hero cuando sea visible
    const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('hero-visible');
            }
        });
    }, { threshold: 0.2 });
    
    if (heroSection) {
        heroObserver.observe(heroSection);
    }
});

// Prevenir auto-scroll si usuario ya scrolleó manualmente
window.addEventListener('wheel', () => {
    hasAutoScrolled = true;
}, { once: true });

window.addEventListener('touchmove', () => {
    hasAutoScrolled = true;
}, { once: true });
