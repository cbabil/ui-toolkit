# @cbabil/ui-toolkit

Lightweight React UI toolkit with bundled styles and Ladle demos. Published to GitHub Packages.

## Install (consumer app)
1) Add to `~/.npmrc` (with a GitHub token that has `read:packages`):
```
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
@cbabil:registry=https://npm.pkg.github.com
```
2) Install:
```
yarn add @cbabil/ui-toolkit
```
3) Import styles once in your app entry:
```
import '@cbabil/ui-toolkit/dist/style.css';
```
4) Use components:
```
import { Button, Modal, Table, Tabs, Toast } from '@cbabil/ui-toolkit';
```

## Local dev (this repo)
- Preview components (Ladle): `yarn dev`
- Typecheck: `yarn typecheck`
- Build lib: `yarn build:lib`

## Publish to GitHub Packages
- Ensure `~/.npmrc` has a token with `write:packages`:
```
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
@cbabil:registry=https://npm.pkg.github.com
```
- Build and publish:
```
yarn build:lib
npm version patch   # or minor/major
npm publish
```
Or run the manual GitHub Action “Publish UI Toolkit” (tag push `vX.Y.Z` also triggers it).

## Making changes
- Edit source in `src/` and styles in `src/styles/`.
- Keep Ladle stories in `src/*.stories.tsx` for previews; they are not published.
- Run `yarn typecheck` before publish.
- The package ships `dist/`, `src/`, and `styles.css` (see `files` in package.json). Ladle and docs stay dev-only.
