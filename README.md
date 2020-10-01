# Calculator #
![Calculator](preview.png)

[DEMO](https://gleb-bayeshko.github.io/calculator/) ------>

## Technology stack ##
* **HTML**
* **CSS/SASS** *(SCSS)*:
  * Folders and files architecture,
  * Final main.scss file with imports of all other files,
  * Some animations (with keyframes and JavaScript);
* **JavaScript** *(ECMAScript 6/7/8)*:
  * Render all elements on page (initial index.html file is empty except for the basic html structure),
  * Module (import/export),
  * Class,
  * Destructuring assignment,
  * Arrow functions,
  * Rest parameters,
  * Spread syntax and etc.
* **Webpack** *(webpack.config.js)*:
  * Plugins,
  * Loaders,
  * Modes (dev/prod),
  * Final bundle.

## Functionality ##
- Basic calculations:
  - Addition,
  - Subtraction,
  - Multiplication,
  - Division,
- Actions with fractional numbers;
- Input of negative numbers;
- All-clear button;
- Delete button:
  - Delete numbers one at time,
  - Delete operator if input is empty and move pervious result to the input area;