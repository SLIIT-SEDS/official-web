# 🤝 Contributing to SEDS SLIIT

Welcome! We are thrilled that you are interested in contributing to our project. Whether you're fixing a bug, suggesting a new feature, or improving documentation, your help is appreciated.

To ensure a smooth and productive collaboration, please follow these guidelines.

---

## 🚀 Getting Started

1. **Fork the repository** on GitHub.
2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/SLIIT-SEDS/seds-sliit.git
   ```
3. **Set the upstream remote**:
   ```bash
   git remote add upstream https://github.com/SLIIT-SEDS/seds-sliit.git
   ```
4. **Install dependencies**:
   ```bash
   npm install
   # or
   bun install
   ```
5. **Create a branch** for your changes:
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b bugfix/your-bug-name
   ```

---

## 🌿 Branching Strategy

We follow a structured branching strategy to maintain stability:

- **`main`**: Production-ready code. No direct commits allowed.
- **`feature/<name>`**: For new features.
- **`bugfix/<name>`**: For fixing bugs.
- **`chore/<name>`**: For maintenance and non-production changes.

---

## 💬 Git Commit Best Practices

We use the **Conventional Commits** specification. This helps in maintaining a readable history and automating changelogs.

### Commit Format

`<type>(<scope>): <description>`

### Types

- **`feat`**: A new feature for the user.
- **`fix`**: A bug fix for the user.
- **`docs`**: Documentation changes.
- **`style`**: Formatting, missing semi-colons, etc; no production code change.
- **`refactor`**: Refactoring production code, e.g. renaming a variable.
- **`chore`**: Updating dependencies, build tasks, etc; no production code change.

### Example

```bash
git commit -m "feat(navbar): implement mobile responsive menu"
```

### Guidelines

- **Use imperative mood**: "add feature" NOT "added feature" or "adds feature".
- **Lowercase first letter**: Start the subject line with a lowercase letter.
- **Keep it concise**: Limit the subject line to 50-72 characters.
- **Include Body**: If more detail is needed, add a blank line after the subject followed by the body.

---

## 📥 Pull Request (PR) Best Practices

1. **Sync your branch** with the `main` branch:
   ```bash
   git fetch upstream
   git merge upstream/main
   ```
2. **Push your changes** to your fork:
   ```bash
   git push origin your-branch-name
   ```
3. **Open a PR** against the `main` branch of the original repository.
4. **Follow the PR Template**: We have a template in place that you should fill out with relevant information.

### What Makes a Great PR?

- It addresses a single issue or feature.
- It includes relevant tests if applicable.
- **It is formatted using Prettier.** Run `npm run format:check` to check or `npm run format:fix` to automatically fix formatting.
- It follows the project’s style guide.
- It provides a clear description of the "why" behind the changes.

---

## 🎨 Professional Aesthetics

This project values visual excellence. If you are contributing UI/UX changes, ensure they:

- Use our established color palette and typography.
- Are fully responsive.
- Include smooth transitions and micro-animations where appropriate.
- Adhere to the project's design patterns.

---

Thank you for contributing! If you have any questions, feel free to open an issue.
