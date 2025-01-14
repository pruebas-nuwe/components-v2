# `Nuwe component library - v2`

Rebuilding Nuwe's material-based component system (IN PROGRESS)

## Table of Contents

- [`Nuwe component library - v2`](#nuwe-component-library---v2)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Deploying with Vercel](#deploying-with-vercel)
  - [Directives for building new components (in progress)](#directives-for-building-new-components-in-progress)
  - [Usage](#usage)
    - [Installation](#installation-1)
    - [Storybook](#storybook)
  - [Publishing](#publishing)

## Installation

In the host project:

`npm i @nuwe/component-library`

You will also need the following peer dependencies installed in the host project:

```
"react"
"react-dom"
"@mui/material"
```

### Deploying with Vercel


## Directives for building new components (in progress)

-   Avoid exporting styled-components directly unless it's really necessary.
-   Never export styled component css snippets.
-   Annotate the component props with relevant info to help understand how to use them.
-   Export theme as a variable with a list of constants.
-   Write unit tests for complex components. Visually check everything else in Storybook.
-   Add stories for components as they would appear in the app. This should go in a `[component].stories.tsx` file.
-   Add documentation for the component to explain its usage. This should go in a `[component].stories.mdx` file.
-   Use storybook [parameters](https://storybook.js.org/docs/react/writing-stories/introduction#using-parameters) to set up common background colours/layouts where a component could be used.
-   Use storybook [controls](https://storybook.js.org/docs/react/essentials/controls) to allow for users to test the props variant where possible.

## Usage

```
import { NavBar } from "@nuwe/component-library";
```


### Installation



### Storybook

To get going with Storybook:

`npm run storybook`

This should create a local server (usually on `localhost:6006`) with the interface. The environment
makes use of hot reloading, so there is no need to refresh your browser as you build.

## Publishing

Follow the instructions outlined [here](../../README.md#publishing-changes-to-npm)
