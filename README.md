# ui-toolkit

Lightweight React UI toolkit with bundled styles and Ladle demos.

## Consume (no registry publish)
Option A — git dependency (keeps source):  
```
yarn add github:cbabil/ui-toolkit
```
Then build styles in your app entry:  
```
import 'ui-toolkit/dist/style.css';
```

Option B — download build artifact (recommended):  
- Run the “Build Release” workflow (or `yarn build:lib` locally) and grab the uploaded `ui-toolkit-dist.zip`.  
- Unzip and point your app to the built files:
```
// add to your app (e.g. src/vendor/ui-toolkit)
import './vendor/ui-toolkit/style.css';
import { Button, Modal, Table, Tabs, Toast } from './vendor/ui-toolkit';
```

## Local dev (this repo)
- Preview components (Ladle): `yarn dev`
- Typecheck: `yarn typecheck`
- Build lib: `yarn build:lib`

## Releases
- No registry publish. Use the “Build Release” GitHub Action (workflow_dispatch) to produce a `ui-toolkit-dist.zip` artifact containing `dist/`, `styles.css`, and typings.
- For manual release: `yarn build:lib && npm pack` or zip the `dist` folder.

## Making changes
- Edit source in `src/` and styles in `src/styles/`.
- Keep Ladle stories in `src/*.stories.tsx` for previews; they are not shipped in artifacts.
- Run `yarn typecheck` before building.
- Build output lives in `dist/` and `styles.css`; Ladle/docs remain dev-only.
