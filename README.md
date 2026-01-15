# 🏡 Realty Costa Rica - Landing Page

Una landing page elegante y moderna para Realty Costa Rica.

## 📋 Características

✨ **Diseño Elegante**
- Estilo moderno con animaciones fluidas
- Paleta de colores verde tropical (inspirada en Instagram de Realty Costa Rica)
- Completamente responsivo

🌍 **Multiidioma**
- Español e Inglés
- Selector de idioma en la navegación
- Preferencias guardadas localmente

📸 **Carrusel de Propiedades**
- Auto-transición cada 5 segundos
- Navegación manual con botones
- Puntos indicadores (dots) interactivos
- Pausa al pasar el mouse

📞 **Contacto Directo**
- WhatsApp con mensaje precompletado
- Enlaces a Instagram y Facebook
- Botón de contacto flotante

## 🚀 Inicio Rápido

### Opción 1: Python (Recomendado)

```bash
cd /Users/miguelr1881/Documents/saidrealty/frontend
python3 -m http.server 8000
```

Luego abre en tu navegador: **http://localhost:8000**

### Opción 2: Node.js (si tienes npm instalado)

```bash
npm install -g http-server
cd /Users/miguelr1881/Documents/saidrealty/frontend
http-server -p 8000
```

## 📁 Estructura del Proyecto

```
frontend/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS (Apple-inspired)
├── carousel.js         # Lógica del carrusel auto-rotativo
├── i18n.js            # Sistema de idiomas (ES/EN)
├── main.js            # Funcionalidades generales
├── package.json       # Información del proyecto
├── logo.jpg           # Logo de Realty Costa Rica
└── README.md          # Este archivo
```

## 🎨 Colores Principales

- **Verde Primario**: #1a5f4a (usado en botones, carrusel)
- **Verde Secundario**: #2d7d5e (hover effects)
- **Verde Accent**: #00a86b (precios, iconos)
- **Fondo Claro**: #f8faf9 (secciones alternas)
- **Texto Oscuro**: #1d1d1f (Apple standard)

## 🌐 URLs de Redes Sociales

- **Instagram**: https://www.instagram.com/realtycostarica
- **Facebook**: https://www.facebook.com/share/1McWwrZNo8/
- **WhatsApp**: +506 7268 8922

## 📱 Responsivo

La página está completamente optimizada para:
- 📱 Dispositivos móviles (320px+)
- 📱 Tablets (640px+)
- 🖥️ Desktops (1024px+)

## ✨ Animaciones Incluidas

- Fade-in/fade-out suave
- Scroll smooth (scroll a secciones)
- Hover effects en tarjetas
- Transiciones de carrusel
- Efecto flotante en background

## 🔧 Personalización

### Cambiar Colores
Edita las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #1a5f4a;
    --secondary-color: #2d7d5e;
    /* ... más colores ... */
}
```

### Agregar/Editar Propiedades
Edita el carrusel en `index.html` buscando `.carousel-slide` y modifica las imágenes y detalles.

### Agregar Traducciones
En `i18n.js`, agrega claves en los objetos `translations.es` y `translations.en`.

## 📧 WhatsApp Message

El mensaje predefinido que reciben en WhatsApp es:
```
Hola Realty Costa Rica! Me gustaría más información sobre sus propiedades. 😊
```

Puedes modificarlo en `index.html` en el link de WhatsApp.

## 🎯 SEO y Performance

- Estructura semántica HTML5
- Lazy loading de imágenes
- CSS minificado y optimizado
- Animaciones GPU-aceleradas
- Bajo uso de recursos

## 📝 Notas

- Compatible con navegadores modernos (Chrome, Safari, Firefox, Edge)

## 📄 Licencia

MIT

---
