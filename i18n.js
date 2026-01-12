const translations = {
    es: {
        contact: 'Contactar',
        brand_tagline: 'Tu socio inmobiliario de confianza',
        discover_more: 'Descubre más',
        hero_title: 'Hacemos Realidad tus Metas Inmobiliarias',
        goal_buy_rent: 'Encuentra tu Hogar Ideal',
        goal_buy_rent_desc: 'Te ayudamos a encontrar alquileres o comprar la propiedad perfecta para ti',
        goal_sell_rent: 'Vende o Alquila tu Propiedad',
        goal_sell_rent_desc: 'Te ayudamos a vender o alquilar tus propiedades de manera rápida y segura',
        contact_whatsapp: 'Contáctanos hoy y comienza tu viaje inmobiliario',
        featured_properties: 'Propiedades Destacadas',
        view_ig: 'Ver en Instagram',
        about_us_title: 'Conoce a Nuestro Equipo',
        about_us_subtitle: 'Tres profesionales comprometidos con tu éxito inmobiliario',
        founder_1_name: 'Said Samara, MBA',
        founder_1_title: 'Co-fundador',
        founder_1_bio: 'Experto en bienes raíces con más de 10 años de experiencia en el mercado costarricense',
        founder_2_name: 'María González',
        founder_2_title: 'Co-fundadora',
        founder_2_bio: 'Especialista en propiedades residenciales y comerciales de lujo',
        founder_3_name: 'Carlos Ramírez',
        founder_3_title: 'Co-fundador',
        founder_3_bio: 'Asesor financiero inmobiliario con amplio conocimiento del mercado',
        social_title: 'Síguenos',
        social_subtitle: 'Mantente al día con nuestras últimas propiedades',
        follow_instagram: 'Síguenos en Instagram',
        follow_facebook: 'Síguenos en Facebook',
        footer_text: '© 2026 Realty Costa Rica. Todos los derechos reservados.',
        rooms: 'Cuartos',
        room: 'Cuarto',
        bathrooms: 'Baños',
        bathroom: 'Baño',
        furnished_apartment: 'Apartamento Amueblado',
        luxury_apartment: 'Apartamento Lujoso',
        office_consulting: 'Consultorio / Oficina',
        whatsapp_message: 'Hola Realty Costa Rica! Me gustaría recibir asesoría inmobiliaria.'
    },
    en: {
        contact: 'Contact',
        brand_tagline: 'Your trusted real estate partner',
        discover_more: 'Discover more',
        hero_title: 'We Make Your Real Estate Goals a Reality',
        goal_buy_rent: 'Find Your Ideal Home',
        goal_buy_rent_desc: 'We help you find rentals or buy the perfect property for you',
        goal_sell_rent: 'Sell or Rent Your Property',
        goal_sell_rent_desc: 'We help you sell or rent your properties quickly and safely',
        contact_whatsapp: 'Contact us today and start your real estate journey',
        featured_properties: 'Featured Properties',
        view_ig: 'View on Instagram',
        about_us_title: 'Meet Our Team',
        about_us_subtitle: 'Three professionals committed to your real estate success',
        founder_1_name: 'Said Samara, MBA',
        founder_1_title: 'Co-founder',
        founder_1_bio: 'Real estate expert with over 10 years of experience in the Costa Rican market',
        founder_2_name: 'María González',
        founder_2_title: 'Co-founder',
        founder_2_bio: 'Specialist in luxury residential and commercial properties',
        founder_3_name: 'Carlos Ramírez',
        founder_3_title: 'Co-founder',
        founder_3_bio: 'Real estate financial advisor with extensive market knowledge',
        social_title: 'Follow Us',
        social_subtitle: 'Stay updated with our latest properties',
        follow_instagram: 'Follow us on Instagram',
        follow_facebook: 'Follow us on Facebook',
        footer_text: '© 2026 Realty Costa Rica. All rights reserved.',
        rooms: 'Rooms',
        room: 'Room',
        bathrooms: 'Bathrooms',
        bathroom: 'Bathroom',
        furnished_apartment: 'Furnished Apartment',
        luxury_apartment: 'Luxury Apartment',
        office_consulting: 'Consulting Room / Office',
        whatsapp_message: 'Hello Realty Costa Rica! I would like to receive real estate advice.'
    }
};

let currentLanguage = 'es';

// Save language preference
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updatePageLanguage();
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
}

// Update all elements with i18n attribute
function updatePageLanguage() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[currentLanguage][key]) {
            element.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update WhatsApp link
    const whatsappBtn = document.querySelector('.cta-button-green');
    if (whatsappBtn && translations[currentLanguage]['whatsapp_message']) {
        const message = encodeURIComponent(translations[currentLanguage]['whatsapp_message']);
        whatsappBtn.href = `https://wa.me/50672688922?text=${message}`;
    }
}

// Initialize language from localStorage or default
function initLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';
    setLanguage(savedLanguage);
}

// Add event listeners to language buttons
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
});
