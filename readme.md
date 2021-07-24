# react-ecosystem

Standard project structure for a react app.

## Setup

How to initialize the app to work!

``` bash
git init

npm init -y
npm install react
npm install react-dom
npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
npm install --save-dev webpack webpack-cli webpack-dev-server style-loader css-loader babel-loader
npm install --save-dev react-hot-loader
```

### Folder structure

``` log
react-ecosystem\
    public\
        index.html
    src\
        App.css
        App.js
        index.js
    .babelrc
    .gitignore
    package.json
    package-lock.json
    readme.md
    webpack.config.js
```

### File description

1. `./public/index.html` - HTML that will be rendered on the UI
2. `./src/App.css` - Styles for root component App
3. `./src/App.js` - Root component App which will be rendered in the HTML
4. `./src/index.js` - Main JS file responsible for rendering App in index.html
5. `./.babelrc` - configuration of babel to use presets to convert ES6 and JSX
6. `./package.json` - Definition of the application package
7. `./package-lock.json` - Locked package versions
8. `./readme.md` - Information about the application
9. `./webpack.config.js` - Config for webpack - loaders, plugins
