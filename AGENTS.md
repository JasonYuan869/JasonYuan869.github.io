# Repository instructions

## Commits and releases

This repository uses Semantic Release on pushes to `main`. Write commit messages using the Conventional Commits format so the intended release is created automatically.

- Use `fix: <description>` for bug fixes and small website content updates that should create a patch release.
- Use `feat: <description>` for new user-facing functionality that should create a minor release.
- Use `<type>!: <description>` or add a `BREAKING CHANGE:` footer for incompatible changes that should create a major release.
- Types such as `docs:`, `chore:`, `refactor:`, `test:`, `build:`, `ci:`, and `style:` do not trigger a release by default.
- Keep the subject concise, imperative, and lowercase after the type when practical.
- Before committing, choose the release type based on the user-visible impact of the complete change, not merely the kind of file edited.

Examples:

- `fix: update current employment details`
- `feat: add project filtering`
- `feat!: redesign project URLs`
