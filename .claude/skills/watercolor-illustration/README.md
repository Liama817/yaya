# watercolor-illustration

A minimal Claude Code skill for warm handmade editorial and cookbook artwork:
watercolor-like washes, colored-pencil and dry-brush marks, delicate imperfect
contours, natural cheerful color, selective detail, and generous negative space.
It works across food, objects, plants, animals, and slightly flattened scenes.

The house style is permanently written into `SKILL.md`; the original four
reference images are **not required at runtime**. The workflow covers deliberate
planning, generation, critique, revision, and consistency across a collection.
An image-generation tool must be available to create images; otherwise the skill
provides a ready-to-use prompt. Results depend on the image model and may need revision.

## Files

```text
watercolor-illustration/
├── SKILL.md
└── README.md
```

## Install in Claude Code

Unzip the download. From the directory containing `watercolor-illustration/`,
choose one installation scope.

**Global — available across your local projects:**

```sh
mkdir -p ~/.claude/skills
cp -R watercolor-illustration ~/.claude/skills/
```

The resulting entry point is
`~/.claude/skills/watercolor-illustration/SKILL.md`.

**Project-local — available in one repository:**

Place the folder under that project's `.claude/skills/`. From the project root,
replace the example source path below with the extracted folder's actual path:

```sh
mkdir -p .claude/skills
cp -R /path/to/watercolor-illustration .claude/skills/
```

The resulting entry point is
`.claude/skills/watercolor-illustration/SKILL.md`.

See [Claude Code's skill documentation](https://code.claude.com/docs/en/skills)
for skill locations and invocation behavior.

## Use

Invoke directly in Claude Code:

```text
/watercolor-illustration A croissant and coffee, with generous white space.
```

Or ask in natural language:

```text
Use the watercolor-illustration skill to create a coordinated set of a fig,
a persimmon, and a pomegranate for my seasonal fruit page.

Use watercolor-illustration for a garden table scene with a striped cloth,
a ceramic jug, flowers, and a sleeping cat. Leave room above for a heading.
```

Specify the subject, intended use, dimensions, and background when they matter.
You do not need to attach style references again.

## Distribute on GitHub

Use this folder as the root of a repository named `watercolor-illustration`,
with `SKILL.md` and `README.md` at the repository root. Commit and push both files
to your GitHub repository. No scripts, reference assets, or build step are needed.

Others can download the repository ZIP and install the extracted folder as above,
or clone it directly into the global skills directory (replace `YOUR-USERNAME`):

```sh
mkdir -p ~/.claude/skills
git clone https://github.com/YOUR-USERNAME/watercolor-illustration.git ~/.claude/skills/watercolor-illustration
```

Keep GitHub as the canonical version. Update a clone with `git pull` from its
folder; for copied installations, replace the installed files with the latest ones.

The workflow takes philosophical inspiration from Anthropic's
[frontend-design skill](https://github.com/anthropics/skills/blob/main/skills/frontend-design/SKILL.md):
make intentional choices, reject generic defaults, and critique the result.
The illustration instructions here encode this project's own fixed house style.
