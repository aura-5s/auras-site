# Aura S. — Sitio personal

Sitio estático generado con [Hugo](https://gohugo.io/), desplegado en GitHub Pages.

---

## Instalación local (Fedora / Linux)

### 1. Instalar Hugo

```bash
sudo dnf install hugo
```

Verifica la versión:

```bash
hugo version
```

### 2. Clonar el repositorio

```bash
git clone https://github.com/aura-5s/auras-site.git
cd auras-site
```

### 3. Servidor local de desarrollo

```bash
hugo server -D
```

El sitio estará disponible en `http://localhost:1313`.  
Hugo reconstruye automáticamente al guardar cualquier archivo.

---

## Estructura del proyecto

```
auras-site/
├── hugo.toml                  # Configuración principal
├── content/
│   ├── _index.md              # Homepage
│   ├── about/_index.md        # Página "About Me"
│   ├── now/_index.md          # Página "Now"
│   ├── writing/               # Todos los textos (.md)
│   └── collection/            # Páginas de antologías (controlan el orden)
│       ├── nombre-antologia/
│       │   └── _index.md
│       └── ...
├── themes/aura/
│   ├── layouts/               # Plantillas HTML
│   └── static/
│       ├── css/main.css       # Estilos
│       └── js/theme.js        # Toggle dark/light
└── .github/workflows/hugo.yml # Deploy automático
```

---

## Agregar un texto nuevo

Crea un archivo `.md` en `content/writing/`:

```markdown
---
title: "Título del texto"
date: 2026-03-25
type: "prosa"          # o "verso"
collection: "Nombre de la antología"
---

El contenido del texto va aquí.
```

**Importante:** el valor de `collection` debe coincidir exactamente con el
título definido en `content/collection/<slug>/_index.md`.

---

## Agregar una antología nueva

1. Crea la carpeta y su `_index.md`:

```bash
mkdir -p content/collection/nombre-antologia
```

```markdown
# content/collection/nombre-antologia/_index.md
---
title: "Nombre de la antología"
weight: 3          # controla el orden en la homepage (menor = primero)
---
```

2. Usa ese mismo título en el front matter `collection:` de los textos que pertenezcan a ella.

> El slug de la carpeta debe ser la versión en minúsculas-con-guiones del título.  
> Ejemplo: "Papeles menores" → carpeta `papeles-menores`.

---

## Importar textos desde Obsidian

Los archivos de Obsidian son Markdown estándar, por lo que la migración es directa:

1. Copia el archivo `.md` a `content/writing/`, `about/_index.md` y `now/_index.md`.
2. Agrega o ajusta el front matter (ver formato arriba).
3. Elimina cualquier sintaxis específica de Obsidian que no uses
   (el sitio usa Markdown puro).

## Configurar GitHub Pages (primera vez)

### 1. Crear el repositorio en GitHub

```bash
git init
git remote add origin https://github.com/TU-USUARIO/auras-site.git
```

### 2. Actualizar baseURL en hugo.toml

```toml
baseURL = "https://TU-USUARIO.github.io/auras-site/"
```

### 3. Habilitar GitHub Pages en el repositorio

- Ve a **Settings → Pages**
- En **Source**, selecciona **GitHub Actions**

### 4. Primer push

```bash
git add .
git commit -m "init: sitio inicial"
git push -u origin main
```

El workflow de GitHub Actions compilará y publicará el sitio automáticamente.
Cada push posterior a `main` disparará un nuevo deploy.

---

## Paleta de colores

| Variable       | Oscuro    | Claro     | Uso                        |
|---------------|-----------|-----------|----------------------------|
| `--bg`        | `#111110` | `#f5f4f0` | Fondo principal            |
| `--bg-subtle` | `#181817` | `#eceae4` | Fondos secundarios         |
| `--muted`     | `#4a4a47` | `#b8b5ad` | Bordes, separadores        |
| `--dim`       | `#888884` | `#888884` | Texto secundario, metadatos|
| `--text`      | `#e8e6e0` | `#1a1a18` | Texto principal            |

---

## Tipografía

- **UI / navegación / metadatos:** DM Sans (sans-serif, Google Fonts)
- **Cuerpo de textos literarios:** Lora (serif, Google Fonts)

---

## Personalización

Todos los valores visuales están en `themes/aura/static/css/main.css`
como variables CSS en `:root` y `[data-theme="light"]`.
