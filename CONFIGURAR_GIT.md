# ⚠️ Configura tu información de Git

Abre PowerShell o CMD y ejecuta estos comandos con TU información real:

```bash
git config --global user.name "Tu Nombre Real"
git config --global user.email "tu.email.real@gmail.com"
```

## Subir a GitHub

### Opción 1: Desde GitHub (Más fácil)

1. Ve a https://github.com y crea un nuevo repositorio
2. Nómbralo como `portfolio-abogado` (o el nombre que prefieras)
3. NO marques "Initialize with README"
4. Copia la URL del repositorio (ejemplo: https://github.com/usuario/portfolio-abogado.git)

5. En tu terminal, ejecuta:

```bash
git branch -M main
git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
git push -u origin main
```

**IMPORTANTE:** Reemplaza `TU_USUARIO` y `TU_REPOSITORIO` con tus datos reales de GitHub.

### Opción 2: GitHub CLI (Rápido)

Si tienes GitHub CLI instalado:

```bash
gh repo create portfolio-abogado --public --source=. --remote=origin --push
```

## Verifica que todo funcionó

```bash
git remote -v
```

Esto debería mostrar la URL de tu repositorio en GitHub.

