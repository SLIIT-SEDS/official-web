# 🛠️ Development & Tooling Guide

This document provides a technical overview of the tools and workflows we use to maintain high code quality at SEDS SLIIT.

---

## 🧹 Code Quality & Formatting

To ensure the codebase remains clean and consistent, we use **ESLint** for linting and **Prettier** for formatting.

### 📝 Linting (ESLint)

We use ESLint with TypeScript and React plugins to catch common programming errors and enforce best practices.

- **Check for lint errors**: `npm run lint`

### ✨ Formatting (Prettier)

All code should be formatted using Prettier. This happens automatically on every Pull Request via GitHub Actions.

- **Check formatting status**: `npm run format:check`
- **Fix all formatting issues**: `npm run format:fix` (Run this before you commit!)

> **Tip**: If you use VS Code, we recommend installing the [Prettier extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and enabling "Format on Save".

---

## 🚀 CI/CD & Automation

We have automated checks in place via **GitHub Actions** to ensure only quality code is merged.

### ✅ Automated Checks on PR

When you open a Pull Request against the `main` branch, the following checks will run:

1. **Linting Check**: Ensures no linting errors are present.
2. **Formatting Check**: Ensures all code is correctly formatted with Prettier.

If any check fails, the PR cannot be merged until the issues are fixed.

---

## 📥 Other Helpful Scripts

- **`dev`**: Start the development server.
- **`build`**: Create a production-optimized build.
- **`preview`**: Locally preview a production build.
- **`build:dev`**: Build in development mode for debugging.
