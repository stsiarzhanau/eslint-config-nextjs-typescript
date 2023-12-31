# eslint-config-nextjs-typescript

Custom ESLint configuration for Next.js apps.

## Do I need this?

If you don't use **TypeScript** with Next.js or have a mixed TS/JS codebase, you definitely don't need this config.

If you don't use **Prettier**, **TailwindCSS**, **Vitest** and **React Testing Library** (at least a couple of them) when building Next.js applications and don't want to use **additional TypeScript specific rules**, then you probably don't need this config as well.

Otherwise, this config may be handy. As it allows not to bother with extending from `eslint-config-next` or `eslint-plugin-next`, dealing with potential conflicts / unintended overrides and installing additional dependencies.

The best combo is to use this config alongside with Prettier and `prettier-plugin-tailwindcss`.

## What's included?

 - **recommended** config from core ESLint
 - **recommended-type-checked** and **stylistic-type-checked** configs from **@typescript-eslint/eslint-plugin**
 - **recommended** and **typescript** configs from **eslint-plugin-import**
 - **recommended** and **jsx-runtime** configs from **eslint-plugin-react**
 - **recommended** config from **eslint-plugin-jsx-a11y**
 - **recommended** config from **eslint-plugin-react-hooks**
 - **recommended** config from **eslint-plugin-tailwind-css**
 - **core-web-vitals** config from **@next/eslint-plugin-next**
 - **recommended** config from **eslint-plugin-vitest**
 - **react** config from **eslint-plugin-testing-library**
 - **recommended** config from **jest-dom**
 - **eslint-config-prettier**
 - configured rules from **eslint-plugin-simple-import sort**
 - configured parser options and plugin settings

## Installation in a new create-next-app project

First, run interactive Next.js installation.

`npx create-next-app@latest`

 Select "No" when prompted "Would you like to use ESLint"?

Install this package and ESLint.

`npm install --save-dev eslint @stsiarzhanau/eslint-config-nextjs-typescript`

Then create a `.eslintrc.json` file with the following contents in the root folder of your Next.js project.

    {
      "extends": "@stsiarzhanau/nextjs-typescript",
      "parserOptions": {
        "project": ["./tsconfig.json"]
      }
    }

Modify `scripts` entry of your `package.json`.

    "scripts": {
    	"dev": "next dev",
    	"build": "next build",
    	"start": "next start",
      - "lint": "next lint"
      + "lint": "eslint [your options] [directories to lint]"
    },

## Replacing built-in ESLint configuration in an existing create-next-app project

Uninstall built-in ESLint config.

`npm uninstall eslint-config-next`

Install this package.

`npm install --save-dev @stsiarzhanau/eslint-config-nextjs-typescript`

Modify existing `.eslintrc.json`.

    {
      - "extends": "next/core-web-vitals"
      + "extends": "@stsiarzhanau/nextjs-typescript",
      + "parserOptions": {
      +   "project": ["./tsconfig.json"]
      + }
    }

Modify `scripts` entry of your `package.json`.

    "scripts": {
    	"dev": "next dev",
    	"build": "next build",
    	"start": "next start",
      - "lint": "next lint"
      + "lint": "eslint [your options] [directories to lint]"
    },

## Additional configuration

This config uses type aware rules from `@typescript-eslint/eslint-plugin`. That means the plugin uses your `tsconfig.json` to understand project structure. If you have a single `tsconfig.json` in the root directory, you are good to go. If you have more complex custom project structure you'll need to override [`parserOptions.project`](https://typescript-eslint.io/packages/parser#project) and/or [`parserOptions.tsconfigRootDir`](https://typescript-eslint.io/packages/parser#tsconfigrootdir) config options. This may also require changing ESLint configuration file format to `.eslintrc.js`.

