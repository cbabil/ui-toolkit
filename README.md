# ui-toolkit

React component library + Ladle playground for the ProjectHub-inspired purple theme. Uses Vite for the library build, Ladle for interactive stories, Tailwind utilities (via PostCSS) for tokens, and lucide-react for icons.

## Prerequisites
- Node 18+ and Yarn

## Make targets
```bash
make install    # yarn install
make dev        # clean + install + ladle dev
make preview    # ladle build (static storybook-style demo)
make lib        # vite library build -> dist/
make typecheck  # tsc --noEmit
make clean      # remove node_modules, dist, ladle caches
```

## Using the components
Import the compiled CSS tokens once in your app, then use the components:
```tsx
import 'ui-toolkit/styles.css';
import { Button, Input, Dropdown, Table, SideMenu, Stepper /* ... */ } from 'ui-toolkit';

export function Example() {
  return <Button label="New Project" variant="primary" />;
}
```

## Design tokens
Defined in `src/styles.css`: colors (accent/success/warning/danger), spacing scale, radii, typography, icon sizes, borders, elevations, control sizes, skeleton/base surfaces, and component-specific variables (e.g., side menu width, stepper sizes).

## Components (current)

### Foundations
- Colors · Spacing · Radius · Elevation · Typography

### Core
- Inputs: Button · Input · Dropdown · Search · Checkbox · Radio · Switch
- Navigation: Tabs · SideMenu (submenu, version label)
- Data: Table (sortable, actions, pagination) · Card · Skeleton · Badge
- Feedback: Alert · Toast
- Flow: Stepper · Modal

## Notes
- Icons come from `lucide-react` (no react-icons).
- Primary accent color drives outlines, hovers, and connectors for consistency across components.
- Stories live in `src/*.stories.tsx`; use Ladle to explore variations.
