# KrispCall Design System — v3

A customized [Ant Design](https://ant.design/) component library built for KrispCall's v3 release. Every component wraps `antd` with KrispCall's own color palette, typography, spacing and sizing tokens, and exposes a locked-down set of custom props (`Customtype`, `Customsize`, etc.) so the rest of the app can only use approved variants.

This repo **is** the review app: it renders every component on its own page with live prop controls and a light/dark theme toggle, so product designers can verify look, spacing, and states against the design spec before engineering integrates it into the main product.

## Why this exists

- Ant Design gives us solid, accessible base components — we don't reinvent buttons, inputs, modals, etc.
- KrispCall's brand tokens (color palette, typography, radii, sizes) are layered on top via `ConfigProvider` theming, not by forking `antd`.
- Designers sign off here first. Once a component is approved in this app, it gets consumed in the main product as a normal npm/local import — no separate redesign step.

## Tech stack

| | |
|---|---|
| UI kit | Ant Design (`antd` v5) |
| Framework | React 19 + TypeScript (Create React App / `react-scripts`) |
| Styling | Tailwind (utility spacing), `styled-components`, Ant `ConfigProvider` theme tokens |
| Icons | Ant Design Icons, Lucide, react-icons, Iconify |
| Extras | `sonner` (toasts), `dayjs` / `date-fns` / `rc-picker` (date picker), `framer-motion` |

## Getting started

```bash
npm install
npm start
```

Then open [http://localhost:3000](http://localhost:3000). The app opens on a sidebar of every component in the system — click one to see its **Display** tab (live variants/sizes/states) and its **Docs** tab (props table + usage).

Other scripts: `npm test`, `npm run build`.

## Theming & tokens

- `src/context-hook/ThemeProvider.tsx` — holds `themeMode` (`light` | `dark`) and `toggleTheme`. Every page in the app reads from this, and there's a Dark Mode switch at the bottom of the sidebar to preview both themes instantly.
- `src/components/foundation/Theme.tsx` — the token source of truth: `primary` / `secondary` / `success` / `destructive` / `info` / `warning` color roles (each with `default`, `hover`, `focus`, `stroke`, `textcolor`, …), plus `background`, `text`, `fill`, and `stroke` scales, defined once per theme mode.
- `src/components/foundation/ColorPalette.tsx` — visual swatch page for the full palette (the **Colors** entry in the sidebar).
- `src/components/foundation/Typography.tsx` — type scale reference (the **Typography** entry).

Components consume these tokens through Ant's `ConfigProvider` (see `src/components/button/Button.tsx` for the pattern), so a palette or radius change in `Theme.tsx` propagates everywhere without touching individual components.

## Components

Each row is one entry in the sidebar, with a **Display** page (all variants/sizes/colors) and a **Docs** page (props). Drop matching screenshots into `docs/screenshots/<name>.png` and they'll show up below.

| Component | Preview | Notes |
|---|---|---|
| Button | ![Button](docs/screenshots/button.png) | Types: `primary`, `secondary`, `success`, `info`, `destructive`, `warning`, `social`, `ghost` · Sizes: `32`, `36`, `40`, `44`, `48` · left/right icon slots, loading & disabled states |
| ButtonGroup | ![ButtonGroup](docs/screenshots/button-group.png) | Segmented/grouped button sets |
| Input | ![Input](docs/screenshots/input.png) | Text, search, password, OTP, textarea, select and labeled variants |
| Checkbox | ![Checkbox](docs/screenshots/checkbox.png) | |
| Radio Button | ![Radio](docs/screenshots/radio.png) | |
| Switch / Toggle | ![Switch](docs/screenshots/switch.png) | Also drives the app's own light/dark toggle |
| Slider | ![Slider](docs/screenshots/slider.png) | |
| Select / Dropdown | ![Dropdown](docs/screenshots/dropdown.png) | |
| DatePicker | ![DatePicker](docs/screenshots/date-picker.png) | Custom calendar panel & date selector |
| Alert | ![Alert](docs/screenshots/alert.png) | |
| Banner | ![Banner](docs/screenshots/banner.png) | |
| Badges | ![Badge](docs/screenshots/badge.png) | |
| Toaster | ![Toaster](docs/screenshots/toaster.png) | via `sonner` |
| Tooltip | ![Tooltip](docs/screenshots/tooltip.png) | |
| Modal | ![Modal](docs/screenshots/modal.png) | |
| Drawer | ![Drawer](docs/screenshots/drawer.png) | |
| Avatar / Avatar Group | ![Avatar](docs/screenshots/avatar.png) | |
| Breadcrumb | ![Breadcrumb](docs/screenshots/breadcrumb.png) | |
| Tabs | ![Tabs](docs/screenshots/tabs.png) | Used throughout this app for Display/Docs switching |
| Table | ![Table](docs/screenshots/table.png) | |
| Pagination | ![Pagination](docs/screenshots/pagination.png) | |
| ProgressBar | ![ProgressBar](docs/screenshots/progress-bar.png) | |
| Spinner | ![Spinner](docs/screenshots/spinner.png) | |
| Colors (foundation) | ![Colors](docs/screenshots/colors.png) | Full palette reference |
| Typography (foundation) | ![Typography](docs/screenshots/typography.png) | Type scale reference |

> Missing screenshots just render as broken images locally — add the PNGs to `docs/screenshots/` (same filename as above) and they'll appear.

## Project structure

```
src/
  components/         # the actual design-system components (Button, Input, Modal, ...)
  components/foundation/  # theme tokens, color palette, typography
  component-docs/      # "Docs" tab content (props tables, usage notes) per component
  pages/                # "Display" tab content — live variant/size/state demos per component
  context-hook/         # ThemeProvider (light/dark)
```

## Workflow: design review → app integration

1. A component is built/updated here with all sizes, colors, and states wired to the shared theme tokens.
2. Product designers open the app, toggle light/dark, and compare the **Display** page against the design spec.
3. Once approved, the component (already themed and typed) is imported into the main product as-is — no rebuild needed, since it's already consuming the same Ant Design + token setup the app will use.
