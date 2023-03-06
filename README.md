# gatsby-config-bug

First, `gatsby-config.mjs` works fine.

Its the TypeScript variant `gatsby-config.ts` that does not work properly.

In this reproduction, you find both a working, and the non working version. They are identical, except for `gatsby-config.*`and `gatsby-node.*` file extensions.

## The bug version

It uses Gatsby v5.7.0

Steps to reproduce:

1. clone this repo and run yarn install.
2. 🐛 For the not working `.ts` version, run:

   ```bash
   yarn workspace local-plugin--ts clean && yarn workspace main-app--ts clean && yarn workspace main-app--ts build --verbose && yarn workspace main-app--ts serve
   ```

You get this error message:

> ERROR #10127 API.TYPESCRIPT.COMPILATION

> Your "gatsby-config.ts" file failed to compile to "gatsby-config.js". Please run
> "gatsby clean" and try again.

## The working version

1. ✅ For the working `.mjs` version, run:

   ```bash
   yarn workspace local-plugin--mjs clean && yarn workspace main-app--mjs clean && yarn workspace main-app--mjs build --verbose && yarn workspace main-app--mjs serve
   ```

## Observations

You can't mix and match `.mjs` and `.ts`.

When we have `gatsby-config.mjs` – the `gatsby-node.mjs` needs also to be `.mjs`. It gets not picked up when its a `.ts` file.
