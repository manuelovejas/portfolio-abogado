# Instrucciones para Subir el Proyecto a GitHub

## 1. Configurar Git (si no lo has hecho antes)

Reemplaza con tu nombre y email real:

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu.email@ejemplo.com"
```

## 2. Crear el Primer Commit

```bash
git commit -m "Initial commit: Portfolio de abogado"
```

## 3. Crear un Repositorio en GitHub

1. Ve a [GitHub](https://github.com)
2. Haz clic en el botón "+" en la esquina superior derecha
3. Selecciona "New repository"
4. Dale un nombre (ejemplo: `portfolio-abogado`)
5. NO marques "Initialize with README" (ya tienes archivos)
6. Haz clic en "Create repository"

## 4. Conectar y Subir tu Código

GitHub te dará comandos, pero básicamente serían:

```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

**Importante:** Reemplaza `TU_USUARIO` y `TU_REPOSITORIO` con tu información real de GitHub.

## Alternativa: Usar GitHub CLI

Si prefieres, también puedes usar GitHub CLI para crear el repositorio desde la terminal.

