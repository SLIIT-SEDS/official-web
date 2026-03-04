# 📂 Project Folder Structure

This guide outlines the standard practices for organizing our React/Vite application to ensure a clean, maintainable, and scalable codebase.

---

## 🏗️ Directory Roadmap

All source code lives inside the `src/` directory.

- **`src/assets/`**: Static assets like images, icons, and global fonts.
  - _Example: `stars.png`, `logo.svg`_
- **`src/components/`**: Reusable UI components.
  - Keep components modular and single-responsibility.
  - **`src/components/ui/`**: Base, generic design system components (like Buttons, Inputs, Cards).
  - _Example: `Navbar.tsx`, `HeroSection.tsx`_
- **`src/pages/`**: Higher-level views that represent a full route or screen. Pages should generally compose multiple components together.
  - _Example: `Index.tsx`, `About.tsx`_
- **`src/lib/`** or **`src/utils/`**: Helper functions, constants, and utilities that don't belong in a specific component.
- **`src/hooks/`**: Custom React hooks.
- **`src/test/`**: Unit and integration tests.
- **`src/` (root)**: Core configuration files (`App.tsx`, `main.tsx`, `index.css`).

---

## 🎨 Component Best Practices

- **PascalCase** for component files (`Navbar.tsx`, not `navbar.tsx`).
- **camelCase** for utility files and hooks (`useWindowSize.ts`, `formatDate.ts`).
- **Conciseness**: Keep files focused. If a component grows over 150-200 lines, consider breaking it down into smaller sub-components.
- **Tailwind Order**: Keep Tailwind classes organized (use Prettier for automatic sorting if possible).
