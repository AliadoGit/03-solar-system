# Interactive Solar System

A pure HTML/CSS/JS simulation of the solar system with orbital animations, pause/resume controls, and adjustable speed.

## Features

- 8 planets with accurate relative orbit sizes and colors
- Earth's Moon with nested orbit
- Saturn's ring
- Pause/Resume simulation
- Speed slider (0.1x - 4x)
- Responsive design (scales on smaller screens)
- Zero dependencies — only vanilla HTML, CSS, and JS

## How It Works

- Orbits use CSS `@keyframes` with `animation-duration` driven by a `--speed` custom property
- Planets counter-spin to keep labels upright
- Stars are generated with `radial-gradient` — no image assets needed
- JS handles pause toggle and speed control by updating CSS variables

## Usage

Open `index.html` in any modern browser. No build step or server required.

## Project Structure

```
├── index.html   # Solar system markup and planet definitions
├── styles.css   # Animations, orbit math, planet colors, responsive layout
└── script.js    # Pause/resume + speed slider logic
```

## License

MIT
