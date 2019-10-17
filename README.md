## Getting Started
The Pod Point React DOM Components is a library of base styles and components designed for rapid prototyping for React Web projects.

### Installation
```
npm install --save @pod-point/react-dom-components
```

### Development
```
git clone git@github.com:Pod-Point/react-dom-components.git
cd react-dom-components
npm install
```

### Tasks
To run a local development version of the components in Docz
```
npm install run docz:dev
```

To run a build version of the components in Docz
```
npm install run docz:build
```

To make edits to the TailwindCSS config or styles
```
npm install run tailwind:watch
```

To build the TailwindCSS config or styles
```
npm install run tailwind:build
```

### Linters and IDE setup
We use [Pod Point's React ESLint package](https://github.com/Pod-Point/eslint-config-podpoint-react) for React projects.
For CSS pattern consistency, we use a third party package called ```stylelint```. This is required as we are using Tailwind's ```@apply``` method in the custom CSS files.
To see how to set this up in VS Code, please refer to [this article.](https://www.meidev.co/blog/visual-studio-code-css-linting-with-tailwind/)
