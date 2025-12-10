# Contributing

## Workflow
- Branch or draft PR for changes.
- Preview UI with `yarn dev` (Ladle).
- Typecheck: `yarn typecheck`.
- Build (optional pre-publish): `yarn build:lib`.
- Keep `dist/` out of commits (published via CI or local build when releasing).

## Code style
- React + TypeScript.
- Keep styles in `src/styles/` and components in `src/components/`.
- Add/update Ladle stories for UI changes; stories are dev-only.

## Publishing
- Publish via GitHub Action “Publish UI Toolkit” (manual dispatch or tag `vX.Y.Z`).
- Package is scoped `@cbabil/ui-toolkit` on GitHub Packages.

## Reporting issues
- Use issue templates (bug/feature). For questions, use Discussions.
