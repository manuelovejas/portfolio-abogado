# Portfolio Profesional para Abogado

Portfolio web profesional con diseño moderno y responsive. Todos los datos se pueden editar fácilmente mediante archivos JSON.

## 🚀 Características

- ✅ **Frontend solamente** - No requiere backend
- ✅ **Datos editables** - Modifica tu información mediante archivos JSON
- ✅ **Diseño moderno y responsive** - Se ve bien en todos los dispositivos
- ✅ **Sección de contacto** - Muestra tu información de contacto
- ✅ **Sección Quién Soy** - Presenta tu perfil profesional
- ✅ **Sección de Blog** - Publica artículos y noticias

## 📁 Estructura del Proyecto

```
Front/
├── public/
│   └── data/
│       ├── contacto.json      # Edita tus datos de contacto aquí
│       ├── quien-soy.json     # Edita tu información profesional aquí
│       └── blogs.json         # Edita tus artículos de blog aquí
├── src/
│   ├── components/            # Componentes React
│   └── App.jsx
└── package.json
```

## 🛠️ Instalación y Uso

### 1. Instalar dependencias

```bash
npm install
```

### 2. Ejecutar en modo desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 3. Compilar para producción

```bash
npm run build
```

Los archivos compilados estarán en la carpeta `dist/`

## 📝 Cómo Editar los Datos

### Datos de Contacto

Edita el archivo `public/data/contacto.json`:

```json
{
  "email": "tu.email@abogado.com",
  "telefono": "+54 11 1234-5678",
  "direccion": "Tu dirección",
  "linkedin": "https://linkedin.com/in/tu-perfil",
  "horario": "Lunes a Viernes: 9:00 - 18:00"
}
```

### Información Personal

Edita el archivo `public/data/quien-soy.json`:

```json
{
  "nombre": "Tu Nombre",
  "titulo": "Tu Título Profesional",
  "bio": "Tu biografía...",
  "educacion": [
    {
      "titulo": "Título",
      "institucion": "Institución",
      "año": "2020"
    }
  ],
  "areas": [
    "Área 1",
    "Área 2"
  ]
}
```

### Artículos del Blog

Edita el archivo `public/data/blogs.json`:

```json
{
  "blogs": [
    {
      "id": 1,
      "titulo": "Título del artículo",
      "fecha": "2024-01-15",
      "resumen": "Resumen del artículo...",
      "imagen": "URL de la imagen",
      "categoria": "Categoría"
    }
  ]
}
```

## 🎨 Personalización

Los archivos CSS están en `src/components/`:

- `Header.css` - Estilos del encabezado
- `About.css` - Estilos de la sección "Quién Soy"
- `Blog.css` - Estilos del blog

## 📄 Licencia

Este proyecto está disponible para uso personal y profesional.

