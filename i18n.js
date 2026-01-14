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
        founder_1_title: 'Administrador y Coordinador',
        founder_1_bio: 'Máster en Administración de Empresas con 5 años de experiencia en ventas y desarrollo de negocios',
        founder_2_name: 'Karen Hernández',
        founder_2_title: 'Asesora Inmobiliaria',
        founder_2_bio: 'Publicista y Mercadóloga con más de 10 años de experiencia en Real Estate y co-propietaria de Amrhein Studio Arquitectura',
        founder_3_name: 'Arturo Hernández',
        founder_3_title: 'Asesor Inmobiliario',
        founder_3_bio: '12 años de experiencia en Shell Costa Rica (Royal Dutch Shell) liderando el área de Real Estate',
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
        founder_1_title: 'Administrator and Coordinator',
        founder_1_bio: 'Master in Business Administration with 5 years of experience in sales and business development',
        founder_2_name: 'Karen Hernández',
        founder_2_title: 'Real Estate Advisor',
        founder_2_bio: 'Marketing and Advertising professional with over 10 years of experience in Real Estate and co-owner of Amrhein Studio Arquitectura',
        founder_3_name: 'Arturo Hernández',
        founder_3_title: 'Real Estate Advisor',
        founder_3_bio: 'Over 12 years of experience at Shell Costa Rica (Royal Dutch Shell) leading the Real Estate division',
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
