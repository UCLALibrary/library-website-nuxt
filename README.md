# Nuxt 4 Main Library Website

This repository powers the UCLA Library main website.

## Project Tooling

This project is configured to use:

- **Node.js 24.16.0**
- **pnpm 11.9.0**

The repo pins pnpm through the `packageManager` field in `package.json`, so pnpm will be selected automatically when **Corepack** is enabled.

## Setup

### Prerequisites

This repository uses:

- Node.js `24.16.0`
- pnpm `11.9.0`

The repository includes:

- `.nvmrc` for Node.js version management
- `packageManager` in `package.json` for pnpm version management

With `nvm` and Corepack configured, developers can switch between repositories without manually managing Node.js or pnpm versions.

### First-Time Setup

If you do not already have Node.js `24.16.0` installed:

```bash
nvm install 24.16.0
```

#### Enable Corepack (one-time setup):

```bash
corepack enable
```

#### Switch to the project's Node.js version:

```bash
nvm use
```

Install dependencies:

```bash
pnpm install
```
### Environment variables

Make sure your local `.env` file is up to date before running the app locally. Request the latest values from the team if needed.


## Running the App

### Start the development server

```bash
pnpm dev
```

The app will run at:

```text
http://localhost:3000
```

### Generate static output

```bash
pnpm generate
```

### Preview a production build locally

```bash
pnpm start
```

## Quality Checks

### Lint the project

```bash
pnpm lint
```

### Auto-fix lint issues

```bash
pnpm lint:fix
```

### Type-check the project

```bash
pnpm typecheck
```

### Run the main test command

```bash
pnpm test
```

## Cypress Commands

### Open Cypress in interactive mode

```bash
pnpm cypress
```

### Run Cypress headlessly

```bash
pnpm cypress-run
```


## Switching Between Repositories

Different UCLA Library repositories may use different Node versions.

When you switch repositories:

```bash
cd <repository>
nvm use
"Run pnpm commands as usual"
```

- `nvm use` reads the Node version from `.nvmrc` when present.
- pnpm is selected automatically through Corepack and the repo’s `packageManager` field.

## Troubleshooting

### Wrong Node version

Check your active Node version:

```bash
node -v
```

Check installed Node versions:

```bash
nvm ls
```

Switch to the project version:

```bash
nvm use 24.16.0
```

### Wrong pnpm version

Check the active pnpm version:

```bash
pnpm -v
```

Enable Corepack if needed:

```bash
corepack enable
```

Refresh your shell cache if pnpm still looks wrong:

```bash
hash -r
```

Check which pnpm is being used:

```bash
which -a pnpm
```

If a globally installed pnpm is interfering, remove it:

```bash
npm uninstall -g pnpm
hash -r
```

### Clean reinstall

If dependencies look broken or stale:

```bash
rm -rf node_modules .nuxt
pnpm install
```

## Deployment

See the Nuxt deployment documentation for more details:

https://nuxt.com/docs/getting-started/deployment

## Global pnpm and Corepack

### If you use a global pnpm (for example, pnpm 9)

If you have pnpm installed globally (for example, via Homebrew) and want to use that version for a repository:

1. Disable Corepack:

   ```bash
   corepack disable
   ```

2. Run your pnpm commands as usual:

   ```bash
   pnpm install
   ```

Corepack will no longer intercept the `pnpm` command, so your globally installed pnpm will be used.

---

### Switching back to a repository that pins its own pnpm version

If you later switch to a repository that uses the `packageManager` field to pin a specific pnpm version:

1. Enable Corepack:

   ```bash
   corepack enable
   ```

2. Verify the active pnpm version:

   ```bash
   pnpm --version
   ```

3. If the version does not match the one pinned in the repository's `package.json`, run:

   ```bash
   corepack use pnpm@<version>
   ```

   Replace `<version>` with the version specified in the repository's `packageManager` field.

4. Run your pnpm commands again:

   ```bash
   pnpm install
   ```

---

### If you do **not** have a global pnpm installation

If you do not have pnpm installed globally (for example, via Homebrew), keep Corepack enabled.

When switching between repositories (and Node.js versions managed by `nvm`), Corepack will automatically use the pnpm version pinned in each repository's `packageManager` field.

If the required pnpm version is not available locally, run:

```bash
corepack use pnpm@<version>
```

where `<version>` is the version specified in the repository's `packageManager` field.

Then continue using pnpm normally:

```bash
pnpm install
```
