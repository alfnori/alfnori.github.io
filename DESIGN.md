# DESIGN.md — Futuristic Mech Visual World

## Direction

A dark, industrial-futuristic aesthetic inspired by mech cockpits, HUD interfaces, and military-grade technology panels. The design communicates precision engineering, technical mastery, and cutting-edge capability — mirroring Adolfo's 10+ years building complex distributed systems.

## Palette

- **Base Dark**: `#070a10` — near-black with blue undertone (deep space)
- **Surface**: `#0d1117` — GitHub-dark-like surface
- **Surface Elevated**: `#161b22` — panels, cards
- **Border**: `#21262d` — structural lines
- **Cyan Primary**: `#00e5ff` — HUD accent, primary interactive
- **Cyan Glow**: `#00e5ff` at 15% opacity — glow effects
- **Amber Accent**: `#f0b429` — status, availability badge, warnings
- **Text Primary**: `#e6edf3` — main text
- **Text Secondary**: `#8b949e` — labels, metadata
- **Text Muted**: `#484f58` — subtle details
- **Green Status**: `#3fb950` — available badge
- **Red Alert**: `#f85149` — critical elements

## Typography

- **Display**: `'Rajdhani', 'Exo 2', sans-serif` — angular, technical, mech-inspired
- **Body**: `'Inter', system-ui, sans-serif` — clean readability
- **Mono**: `'JetBrains Mono', monospace` — code, data, measurements

## Visual Language

### Panels & Cards
- Angular clip-path corners (cut corners, not rounded)
- 1px borders with subtle cyan glow on hover
- Background: `#0d1117` with `#161b22` elevated surfaces
- No rounded corners — sharp, geometric edges

### HUD Elements
- Corner brackets on section headers: `┌ ┐ └ ┘` style decorators
- Thin horizontal scan lines as decorative elements
- Monospace labels with letter-spacing for technical feel
- Status indicators with pulsing glow animations

### Separators
- Angular chevron separators: `▸` or `◆` between sections
- Gradient lines fading from cyan to transparent
- Circuit-board inspired connection lines

### Typography Treatment
- Section headers in Rajdhani, uppercase, tracked wide
- Role/title labels in monospace with cyan color
- Tech tags as angular bordered badges (no rounded-full)
- Numbers and dates in monospace for data feel

### Interactions
- Hover: cyan border glow + subtle translate
- Links: underline with cyan, glow on hover
- Buttons: angular shapes with gradient borders
- Smooth transitions with cubic-bezier easing

### Motion
- Entrance: fade-in + translateY from below
- Scan line animation on hero section
- Pulsing glow on availability badge
- Subtle parallax on scroll (if performance allows)

## Layout

- Max-width container: 1100px
- Generous vertical spacing between sections
- Angular section dividers (not simple hr)
- Grid layouts with visible structural lines
- Asymmetric hero layout with photo + info

## Mode

**Persuade** — The visitor must decide quickly that Adolfo is worth hiring. Design earns attention and communicates technical excellence through its own execution.
