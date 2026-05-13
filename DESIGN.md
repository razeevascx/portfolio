---
design:
  name: "Rajeev Puri Portfolio Design System"
  version: "1.0.0"
  colors:
    background:
      dark: "#030303"
      muted: "#1a1a1a"
      card: "oklch(0.205 0 0)"
    foreground:
      primary: "#ffffff"
      secondary: "#9ca3af"
      muted: "oklch(0.708 0 0)"
      accent: "#2883ff"
    brand:
      primary: "#2883ff"
      primary-light: "#5c78ff"
      primary-hover: "#5ea2ff"
      glow: "rgba(92, 120, 255, 0.4)"
    ui:
      border: "oklch(1 0 0 / 10%)"
      input: "oklch(1 0 0 / 15%)"
      ring: "oklch(0.556 0 0)"
      destructive: "oklch(0.704 0.191 22.216)"

  typography:
    family:
      sans: "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    weight:
      light: 300
      normal: 400
      medium: 500
      semibold: 600
      bold: 700
      black: 900
    tracking:
      tight: "-0.025em"
      wide: "0.1em"
      widest: "0.4em"
    size:
      xs: "0.75rem"
      sm: "0.875rem"
      base: "1rem"
      lg: "1.125rem"
      xl: "1.25rem"
      "2xl": "1.5rem"
      "8xl": "6rem"

  radii:
    base: "0.625rem"
    full: "9999px"

  spacing:
    base: "0.25rem"
    container-px: "1rem"
    section-py: "3rem"

  motion:
    duration:
      fast: "200ms"
      normal: "300ms"
      slow: "600ms"
    easing:
      standard: "cubic-bezier(0.4, 0, 0.2, 1)"
      out: "cubic-bezier(0, 0, 0.2, 1)"

  shadows:
    glow: "0 0 20px rgba(40, 131, 255, 0.2)"
    glow-lg: "0 0 40px rgba(40, 131, 255, 0.4)"
---

# Design Identity

The visual identity of this portfolio is rooted in a **Cyber-Minimalist** aesthetic that blends high-tech precision with a sense of atmospheric wonder. It is designed to feel like a sophisticated digital workspace—natural yet advanced.

## Core Aesthetic Pillars

### 1. Dark-First Brutalism
The interface prioritizes deep blacks (`#030303`) and dark greys (`#1a1a1a`), creating a high-contrast environment where content and light-based effects (glows, auroras) can shine. This approach reduces cognitive noise and emphasizes focus.

### 2. High-Tech Tactility
The design incorporates elements that suggest technical depth and interactive precision:
- **Dot Matrix Patterns:** Used as loaders, background motifs, and decorative accents. They provide a structural, grid-based texture that feels both retro and futuristic.
- **Topographic Maps:** Fluid, organic contour lines in the background provide a "natural" contrast to the rigid grid elements, symbolizing the intersection of technology and environment.
- **Aurora & Nebula Effects:** Soft, ethereal light gradients provide depth and a "living" quality to the dark canvas.

### 3. Precision Typography
Typography is used to establish hierarchy and character:
- **Headlines:** Massive, tight-tracked for a sense of momentum and "launch."
- **Meta-labels:** Tiny, wide-tracked text used for secondary info, evoking a "terminal" or "technical specification" feel.
- **Body:** Light weights on dark backgrounds for a modern, airy reading experience.

## Interaction & Motion

Movement is not just decorative; it is part of the user's "wonder" journey:
- **Atmospheric Entrances:** Content fades and slides into place smoothly using Framer Motion.
- **Glow & Scale:** Hover states often trigger subtle glows or slight transforms, giving the UI a tactile, responsive feel.
- **Ripple & Waves:** Interactive dot matrix elements react to user proximity or loading states, reinforcing the "alive" nature of the system.

## Visual Vocabulary

- **Primary Blue:** A high-energy, vibrant blue (`#2883ff`) is the sole accent color, representing digital energy and action.
- **Sharp Radii:** A consistent `0.625rem` radius provides a modern, slightly softened technical look.
- **Borders as Structure:** Subtle, low-opacity borders define sections without creating visual clutter.
