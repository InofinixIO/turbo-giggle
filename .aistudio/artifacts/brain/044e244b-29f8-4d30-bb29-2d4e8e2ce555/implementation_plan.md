# NPM Dependency Safe Upgrade Plan

Update all application packages to their latest compatible, stable versions ensuring maximum performance, security patches, and zero API breakage.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> - **Upgrade Scope (Confirmed)**: Safe upgrade to latest compatible releases. We will update dependencies and devDependencies to their latest non-breaking releases so existing APIs (React 19, Tailwind CSS v4, Lucide icons, Vite 6/8) continue to function smoothly.
> - **Build & Runtime Protection**: Run `compile_applet` and `lint_applet` immediately following package updates to verify clean compilation.

---

### 1. Overview & Core Concept

- **Goal**: Bring all installed packages to their freshest compatible releases, patch security vulnerabilities, and ensure optimal build speed.
- **Packages Covered**:
  - `dependencies`: `@google/genai`, `@tailwindcss/vite`, `@vitejs/plugin-react`, `lucide-react`, `react`, `react-dom`, `vite`, `express`, `dotenv`, `motion`.
  - `devDependencies`: `@types/node`, `@types/react`, `@types/react-dom`, `@types/express`, `autoprefixer`, `esbuild`, `tailwindcss`, `tsx`, `typescript`.

---

### 2. Execution Steps

1. **Dependency Upgrade**: Execute `npm update` to resolve and install the latest semver-compatible releases across all dependencies.
2. **Lockfile & Node Modules Sync**: Ensure `node_modules` and package configurations are cleanly in sync using `install_applet_dependencies`.
3. **Type-Checking & Linting**: Run `lint_applet` (`tsc --noEmit`) to verify zero type mismatches or deprecations.
4. **Applet Compilation**: Run `compile_applet` (`vite build`) to confirm successful production bundling.
