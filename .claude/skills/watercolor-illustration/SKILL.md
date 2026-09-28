---
name: watercolor-illustration
description: >-
  Apply a warm handmade watercolor-editorial design system to whole websites,
  apps, pages, components, and illustrations. Use for project styling, layout,
  typography, colors, UI changes, and new features in projects adopting this
  house style, or when the user invokes watercolor-illustration.
---

# Watercolor Editorial Design System

Act as the project's designer and frontend implementer. This skill is the
canonical visual direction for an adopting project, including its interface and
illustrations. Implement requested design changes in the actual project files;
do not reduce a project-design request to an image prompt or a single asset.
The original four reference images are not runtime requirements. Their shared
language is encoded below: warm, handmade, observational cookbook/editorial design.

## Adopt and maintain the system

When asked to adopt this skill, inspect the project and apply the system across
its existing pages and shared components, preserving content and functionality.
Append a concise instruction to the project's CLAUDE.md, creating it if absent:
"This project uses watercolor-illustration as its canonical visual design system.
Read its SKILL.md before visual work and apply it to pages, components, new
features, and illustrations. Reuse the project's established design tokens."
Include the actual installed skill path; preserve unrelated project instructions.
Do not claim persistent adoption unless that instruction has actually been saved.
For later scoped requests, style the changed feature consistently without
unnecessarily redesigning unrelated pages. Explicit user direction takes priority.

## Interface design language

- **Mood:** An inviting illustrated cookbook or market journal: cheerful, tactile,
  composed, and lightly imperfect. Carry this through the whole interface.
- **Palette:** Use white or warm off-white surfaces, dark warm ink for readable
  text, and natural softened accents drawn from the content: leafy/olive green,
  tomato red, butter yellow, ochre, berry pink, dusty blue. Choose a restrained
  subset; retain lively focal colors instead of making everything beige or pastel.
- **Typography:** Pair an expressive, readable editorial serif for titles with a
  quiet readable body face. Prefer suitable existing fonts. Use handwritten
  accents sparingly for short annotations, never for essential body text or controls.
  Establish a consistent type scale; avoid oversized decorative type on every page.
- **Layout:** Use generous margins, open sections, varied editorial hierarchy,
  and a clear reading order. Let illustrations anchor selected moments. Combine
  orderly alignment with gentle visual asymmetry; keep dense information usable.
- **Surfaces:** Favor open paper-like space, fine rules, understated frames, and
  minimal shadows. Cards should express meaningful grouping, not surround every
  element. Keep paper texture subtle and optional, away from text and controls.
- **Components:** Give buttons, inputs, menus, tabs, and tables the same palette,
  type, spacing, and restrained borders. Make click targets and states unmistakable.
  Keep focus, hover, selected, disabled, loading, and error states coherent;
  never rely on color alone. Handmade character must not impair interaction.
- **Decoration:** Use occasional drawn separators, small botanical details, or
  restrained checks when relevant. Avoid splatter backgrounds, distressed text,
  excessive flourishes, glass effects, glossy gradients, and generic dashboard kits.
- **Accessibility:** Preserve readable contrast, keyboard access, semantic markup,
  responsive layouts, and reduced-motion preferences. Keep meaningful text live.

## Illustration language

Combine translucent watercolor-like washes with colored-pencil hatching and
broken dry-brush strokes; occasional denser painted passages are welcome.
Texture should follow forms and pigment, not be a uniform noise filter.
Use delicate, imperfect, sometimes incomplete contours in darker local colors.
Simplify recognizable organic shapes with observed asymmetry and correct defining
features. Render manufactured objects with the same lightly drawn hand.
Use natural cheerful softened pigments, allowing paper to show through.
Suggest restrained volume with layered washes and a few darker strokes; keep
shadows minimal and highlights sparse. Spend detail selectively on seeds, veins,
pastry folds, ceramics, or fabric, leaving quieter areas less resolved.
Give isolated subjects generous negative space. For scenes use slightly flattened
perspective, readable overlaps, quiet areas, and inviting elevated views as useful.
Reject photographic watercolor filters, misty color clouds, splatter halos, muddy
blooms, glossy 3D, airbrushing, photorealism, and crisp stock-vector aesthetics.
SVG is acceptable for interface marks; do not present flat vector art as painted art.

## Implement deliberately

1. Inspect routes, layouts, styles, components, assets, and the existing stack.
   Identify the scope and visual inconsistencies; infer sensible defaults.
2. Establish shared tokens for color, typography, spacing, borders, and surfaces
   using the project's existing styling system. These tokens implement this skill;
   extend and reuse them on future work instead of inventing page-specific themes.
3. Implement the requested scope, starting with shared layouts and components.
   On initial whole-project adoption, cover all existing routes and key UI states.
   Preserve working flows, data, integrations, and responsive behavior.
4. Reuse suitable approved assets. Generate or edit illustrations when a tool is
   available, describing concrete marks, palette, framing, and relevant exclusions.
   Without image generation, continue implementing the full interface with available
   assets and code-native styling. Report remaining illustration gaps; provide
   prompts only as supporting handoff material, never as the whole project result.
   For an illustration-only request, a prompt fallback is acceptable if disclosed.
5. Run relevant project checks and inspect rendered pages at desktop and mobile
   sizes when possible. Check representative interactions and key UI states.
   Critique the entire composition as well as individual artwork; revise the most
   significant mismatch. Disclose unavailable previews or checks accurately.

Keep one recognizable family across pages and assets: consistent contour weight,
texture scale, saturation, depth, typography, spacing, and detail density.
Report implemented changes and any remaining gaps. Do not call adoption complete
if requested pages remain unstyled or only prompts and a design plan were produced.
