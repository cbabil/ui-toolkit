# ui-toolkit

Lightweight React UI toolkit with bundled styles and Ladle demos.

## Consume (no registry publish)
- Download the latest release asset `ui-toolkit-dist.zip` from GitHub Releases.
- Unzip into your project (e.g., `src/vendor/ui-toolkit`).
- Import the built CSS once:
```
import './vendor/ui-toolkit/style.css';
```
- Import components from the unzipped package (ESM build):
```
import { Button, Modal, Table, Tabs, Toast } from './vendor/ui-toolkit';
```

## Local dev (this repo)
- Preview components (Ladle): `yarn dev`
- Typecheck: `yarn typecheck`
- Build lib: `yarn build:lib`

## Releases
- Use the "Build Release Artifact" workflow to create a tag+release from the current package.json version and attach `ui-toolkit-dist.zip` (includes `dist/`, typings, metadata).
- Manual: `yarn build:lib && npm pack` (or zip `dist/` yourself) if you need a local artifact.

## Making changes
- Edit source in `src/` and styles in `src/styles/`.
- Keep Ladle stories in `src/*.stories.tsx` for previews; they are not shipped in artifacts.
- Run `yarn typecheck` before building.
- Build output lives in `dist/` and `styles.css`; Ladle/docs remain dev-only.
