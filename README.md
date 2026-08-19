# Reusable Components

A portfolio project showcasing a library of reusable React UI components built with TypeScript, Redux Toolkit, and SCSS. Each component is designed to be configurable, themeable, and composable.

## Tech Stack

- React 19 + TypeScript
- Vite
- Redux Toolkit (global state management)
- SCSS (styling)
- ESLint + Prettier (code quality)
- gh-pages (deployment)

## Getting Started

```bash
npm install
npm run dev
```

## Scripts

| Command              | Description                        |
| -------------------- | ---------------------------------- |
| `npm run dev`        | Start the dev server               |
| `npm run build`      | Type-check and build for production|
| `npm run preview`    | Preview the production build       |
| `npm run lint`       | Run ESLint                         |
| `npm run format`     | Format code with Prettier          |
| `npm run deploy`     | Deploy to GitHub Pages             |

## Project Structure

```
src/
├── components/
│   ├── Buttons/       # Button, MenuButton, RadioButton
│   ├── Icons/         # SVG icon components
│   ├── Inputs/        # CheckBox, TextInput, TextLabel
│   └── Menu/          # ContextMenu
├── pages/             # Demo pages
├── store/             # Redux store (theme state)
└── assets/styles/     # SCSS stylesheets
```

## Features

- Light / Dark theme toggle via Redux
- Configurable button components (primary, secondary, tertiary)
- Menu buttons with dropdown context menus
- Icon support within buttons
- Reusable text inputs and labels
- Interactive demo playground for customizing components in real time

---

## Versions

### v1.0.0 — Button Demo Page

The first release focuses on a **Button Demo Page** that serves as an interactive playground for the button component library.

**Components included:**

- **Button** — Supports primary, secondary, and tertiary variants with optional icons, custom width/height, and disabled state.
- **MenuButton** — A button with an attached dropdown context menu for selecting options.
- **RadioButton** — Used in the demo to toggle between button types.
- **CheckBox** — Used for toggling disabled state and dark mode.
- **TextInput / TextLabel** — Supporting form inputs for configuring button properties.
- **Icons** — SaveIcon, CancelIcon, PreviewIcon, SettingsIcon, ArrowDown.

**Demo page features:**

- Customize button type (primary / secondary) via radio buttons.
- Set a custom label via text input.
- Attach an optional icon (Save or Cancel).
- Configure custom width and height in pixels.
- Toggle disabled state.
- Live preview of the customized button.
- Gallery section displaying all button variants (primary, secondary, tertiary) in their default, with-icon, menu, and disabled states.
