# Vite React Typescript Tailwind Template

<p align="center">
    <img src="./public/vite-logo.png" width="240" height="240" alt="vite">
    <br>
    <br>
</p>

This template has been configured with all of the tools required to create a React Application using **TypeScript** and **TailwindCSS** with Vite.

## Technologies

![React](https://img.shields.io/badge/frontend-react-61DBFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/frontend-ts-blue?style=flat&logo=typescript)
![Tailwind](https://img.shields.io/badge/frontend-tailwind-00C4C4?style=flat&logo=tailwindcss)
![ESLint](https://img.shields.io/badge/linter-eslint-4B32C3?style=flat&logo=eslint)
![Prettier](https://img.shields.io/badge/formatter-prettier-F8BC45?style=flat&logo=prettier)
![Vitest](https://img.shields.io/badge/specs-vitest-yellow?style=flat&logo=vitest)
![Vite](https://img.shields.io/badge/build-vite-A855F7?style=flat&logo=vite)

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) for utility CSS classes
- [ESLint](https://eslint.org/) configured with some initial rules
- [Prettier](https://prettier.io/) to enforce consistent code style
- [Vitest](https://vitest.dev/) for unit testing and code coverage
- [Vite](https://vitejs.dev/) to build the project for development or production
- [Husky 🐶](https://typicode.github.io/husky/) runs the full list of specs before committing your changes to ensure that you have a green build

## Development

### Setup

1. `git clone https://github.com/nrabhiram/vite-react-ts-tailwind-template.git`
2. Run `npm install` to install all of the project's dependencies
3. Build the project for production: `npm run build`
4. Run the local development server: `npm run dev`

### Tailwind + CSS Modules

1. Create a CSS Module file by following the naming convention - `<Component>.module.css`
2. Use the `@apply` directive in your CSS class definitions to use Tailwind's utility classes into your own custom CSS
    
    ```css
    .app-heading {
        @apply text-5xl font-semibold mb-4;
    }
    ```
3. Import the CSS Module file into the React component file

### Dev Loop

- `prettier-format` - run the autoformatter
- `lint` - run the linter
- `test` - run the specs
- `test-filter <spec-name>` - run a specific spec
- `coverage` - get a coverage report of the specs
- `build` - build the project files for distribution
- `dev` - run the local development server

## Contributing

Feel free to [open an issue](https://github.com/nrabhiram/vite-react-ts-tailwind-template/issues/new) or create a PR if you'd like to contribute 🙌

## License

The project is available as open source under the terms of the [MIT License](LICENSE).
