# Nuxt 3 MEAP Website

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.


## Setup

:exclamation: Verify that your development environment runs the Node and PNPM versions referenced in the project's [`actions.yml` file](https://github.com/UCLALibrary/meap-website-nuxt/blob/main/.github/workflows/setup-workspace/action.yml)

```bash
# node
node -v
```

```bash
# pnpm
pnpm -v
```


- If your global Node or PNPM version is different, use the respective version setup steps:
  - [Node version setup](#node-version-setup)
  - [PNPM version setup](#pnpm-version-setup)

Install the project dependencies:

```bash
# pnpm
pnpm install
```

:exclamation: Make sure local `.env` is updated before running dev server *(Request .env settings from team)*

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

## Production

Static Build:

```bash
# pnpm
pnpm generate
```

Locally preview static build:

```bash
# pnpm
pnpm start
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Addendum

### Node Version Setup

- Verify current version: `node -v`
<br>
- If the current node verison is different from the project node version, check for other existing versions: `nvm list` or `nvm ls`
<br>
- You should/may see an output such as this:
```bash
-> v20.18.3
   v22.22.0
   v26.2.0
default -> 20.18.3 (-> v20.18.3 *)
```

- Install the project node version if it is not listed: `nvm install version-number`
  - Example: `nvm install 20.20.2`
<br>
- Verify project version is installed: `nvm list`
<br>
- Switch to use project node version: `nvm use version-number`
  - Example: `nvm use 20.20.2`
<br>
- Verify the project version: `node -v`

:bulb: **To set specific node version as the global default:**

`nvm alias default version-number`

### PNPM Version Setup

If you are using a different global pnpm version (for example, v10+), you may see this type of error:

    ERR_PNPM_UNSUPPORTED_ENGINE
    Expected version: ^9.12.1
    Got: 10.x.x

#### Recommended setup: use Corepack

Node.js includes Corepack, which lets different projects use different pnpm versions.

1. Enable Corepack: `corepack enable`
<br>
2. Set the correct pnpm version for the project: `corepack use pnpm@version-number`
    - Example: `corepack use pnpm@9.12.1`
<br>
3. Verify the version: `pnpm -v`
<br>
4. Run commands as usual:

    `pnpm install`
    `pnpm lint`

#### Important notes

- Do not downgrade your global pnpm version.
- Do not remove the `engines` field.
- This setup allows different repos to use different pnpm versions safely.

#### Troubleshooting

If `pnpm -v` still shows the wrong version, run:

    hash -r
    which -a pnpm

If a global pnpm is overriding Corepack, remove it:

    npm uninstall -g pnpm
    hash -r
