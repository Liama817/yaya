# watercolor-illustration

A project-wide visual design system for warm handmade editorial websites and apps.
It governs typography, colors, layouts, components, surfaces, and illustrations,
with a cookbook/market-journal character. The original four reference images are
encoded in the skill and are not needed again.

The name stays the same so existing installations can be updated. This revision
replaces the earlier illustration-only workflow: project requests now result in
implemented interface changes, even when image generation is unavailable.

## Install and adopt in a project

1. Unzip the download and put the `watercolor-illustration` folder in your project
   at `.claude/skills/watercolor-illustration/`.
2. Open Claude Code in that project and run:

```text
/watercolor-illustration Adopt this as the visual design system for this entire
project. Apply it to all existing pages and shared components, preserve the
functionality, and record the skill in CLAUDE.md for future visual work.
```

This first adoption asks Claude to implement the design and save a persistent
project instruction. Merely copying a skill folder does not execute a redesign.
The saved instruction points future visual work back to this skill; the project's
shared design tokens keep subsequent additions consistent.

If you only want to establish the direction before making visual changes, say:

```text
Read watercolor-illustration and register it as this project's visual design
system in CLAUDE.md. Do not restyle existing pages yet.
```

The skill should add a note like this to the project's existing `CLAUDE.md`,
without replacing other instructions:

```markdown
## Visual design system
Use watercolor-illustration as this project's canonical visual design system.
Read .claude/skills/watercolor-illustration/SKILL.md before visual work.
Apply it to pages, components, new features, and illustrations.
Reuse the project's established design tokens.
```

## Global installation

For availability across local projects, place the folder at:

```text
~/.claude/skills/watercolor-illustration/
```

For example, from the directory containing the extracted folder:

```sh
mkdir -p ~/.claude/skills
cp -R watercolor-illustration ~/.claude/skills/
```

Then run the adoption request in each project that should use the style. Its
CLAUDE.md should point to `~/.claude/skills/watercolor-illustration/SKILL.md`.
Global availability does not automatically impose the style on unrelated projects.
Project-local installation is useful when the skill should travel with the repo.
See [Claude Code skills](https://code.claude.com/docs/en/skills) and
[project instructions](https://code.claude.com/docs/en/memory).

## Everyday use

After adoption, ordinary feature requests should follow the saved visual direction:

```text
Add an October view to the seasonal-fruit calendar using our design system.

Build a fruit detail page with seasonality, storage tips, and recipe links.

Update the mobile navigation while preserving our watercolor editorial style.
```

You can also invoke `/watercolor-illustration` explicitly whenever you want.
Illustration-only requests remain supported. Actual image generation requires an
available image tool; missing tools must not stop interface implementation.

## Test the adoption

Preview the home page, an inner page, and mobile navigation. Check that type,
colors, spacing, controls, and artwork feel like one family and that interactions
still work. Then start a fresh conversation and ask for a small new component:
it should read the saved project instruction and reuse the existing tokens.
If artwork is missing, Claude should report that gap while delivering the UI.

## Update or distribute on GitHub

The package contains only `SKILL.md` and `README.md`. To update an earlier install,
replace those two files in its existing skill folder, then run the adoption request.

For GitHub distribution, use this folder as a repository root, commit both files,
and push. Others can download it into their project's `.claude/skills/` directory
or clone it globally (replace `YOUR-USERNAME`):

```sh
git clone https://github.com/YOUR-USERNAME/watercolor-illustration.git ~/.claude/skills/watercolor-illustration
```

Keep the repository as the canonical version and update installed copies as needed.
No scripts or reference-image assets are required.

The deliberate planning, implementation, and critique workflow is philosophically
inspired by Anthropic's [frontend-design skill](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md).
The house illustration language is derived from the user's four original references;
the interface rules translate that language into a usable project design system.
