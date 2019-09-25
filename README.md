# FlexNav

- [FlexNav](#flexnav)
  - [Homework](#homework)
  - [Reading](#reading)
  - [The Terminal](#the-terminal)
    - [A Note For Windows Users](#a-note-for-windows-users)
  - [Initialize GIT and Create a Branch](#initialize-git-and-create-a-branch)
  - [JavaScipt Preview and Review - Boulevards de Paris](#javascipt-preview-and-review---boulevards-de-paris)
      - [Array Methods](#array-methods)
  - [Exercise: FlexNav](#exercise-flexnav)
    - [Design Patterns](#design-patterns)
    - [VS Code - Emmet](#vs-code---emmet)
    - [VS Code - Prettier](#vs-code---prettier)
  - [Node Package Manager](#node-package-manager)
  - [FlexNav CSS](#flexnav-css)
    - [Floats](#floats)
    - [Box Sizing](#box-sizing)
    - [Float CSS with Images](#float-css-with-images)
    - [Removing the Images](#removing-the-images)
    - [Float CSS without Images](#float-css-without-images)
  - [Flexbox](#flexbox)
    - [Flexbox in the Wild](#flexbox-in-the-wild)
    - [Final Flexbox CSS](#final-flexbox-css)
  - [JavaScript Navigation](#javascript-navigation)
  - [Event Delegation](#event-delegation)
  - [Working with Objects](#working-with-objects)
  - [An Array of Objects](#an-array-of-objects)
  - [Notes](#notes)

## Homework

Examine the files in the `other/homework` folder. `index.html` is your starting point and `index-done.html` the goal. Your assignment is to edit `index.html` to it matches the goal. There are some notes for you to follow [here](https://github.com/front-end-foundations/4-flex-menu#design-with-flexbox).

## Reading

- [What is Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
- See how far you can get on [Flexbox Froggy](http://flexboxfroggy.com/)

## The Terminal

There are many good reasons to acquire a basic understanding of the command line terminal. In this class we will use the [Terminal](https://support.apple.com/guide/terminal/welcome/mac) app for GIT and GITHUB as well as for Node Package Manager (NPM).

<hr />

### A Note For Windows Users

The Windows equivalent to Mac's Terminal app is [Powershell](https://docs.microsoft.com/en-us/powershell/) but there are important differences. Windows alternates to Powershell include the shell that comes with [Git for Windows](https://gitforwindows.org/) aka "Git Bash." I suggest using Git Bash instead of Powershell on Windows.

<hr />

Some basic shell commands (the convention in documentation is to use `$` to indicate a prompt - do NOT include it when copying and pasting a command):

```sh
$ pwd  // print working directory
$ cd <path-to-folder>
$ cd .. // go up one level
$ cd ~ // go to your home directory
$ ls  // list files
$ ls -l  // flags expand the command
$ ls -al
```

Demo: tab completion, history and copy paste.

Demo: on a mac you can `cd` into a folder via drag and drop or by copying and pasting a folder into the terminal.

```sh
$ node --version
$ npm --version
$ git --version
$ node
> var total = 12+12
> var el = document.querySelector('.anything') // error
> .exit // or control + c to exit node
$ clear // or command + k to clear the terminal
```

Use `cd` or the copy and paste method to cd into today's exercise folder.

## Initialize GIT and Create a Branch

```sh
$ git init
$ git add .
$ git commit -m 'initial commit'
$ git branch inclass
$ git checkout inclass
```

Examine a branch in VS Code.

## JavaScipt Preview and Review - Boulevards de Paris

See `other/ARRAYS.js` (use Quokka extension for VS Code).

Recall `document.querySelector('<css selector>')` returns the first selected item.

Navigate to this [Wikipedia](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris) article.

Paste the following in the console:

```js
var test = document.querySelector('a'); // returns the first anchor on the page
```

While `document.querySelectorAll()` returns a collection (`nodeList`) of the items on the page:

```js
var test = document.querySelectorAll('a');
```

Inspect one of the listed boulevards to find `.mw-category` in the code. Note: You can reference the currently selected element using `$0`.

```js
var category = document.querySelector('.mw-category');
```

We can use our `category` variable as the basis for a more targeted query:

```js
var links = category.querySelectorAll('a');
```

Examine the methods on the resulting nodeList. Try `links.length` in the console.

Our nodeList looks like an array but isn't. Let's convert the nodeList into an Array:

```js
var linksArray = Array.from(links);
```

- Examine the methods on the resulting Array and compare them to the methods on a nodeList.
- Examine one of the anchor tags from the resulting array in the console. Note the `textContent` property.

Here is a simple example showing how to call an array method and access an element from an array

```js
linksArray[0];
linksArray[0].textContent;
```

#### Array Methods

We commonly use for loops to iterate through an array and perform some action.

Below we initialize an empty array `linkText` and then loop through the linksArray using its length property. For every item in linksArray we use Array.push() to add it to linkText:

```js
var linkText = [];
for (let i = 0; i < linksArray.length; i++) {
  linkText.push(linksArray[i].textContent);
}
```

Let's look at a couple important [array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array): [`array.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) and [`array.filter()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

Here's an example that uses the array's [`map`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method to isolate the text content from our linksArray:

```js
var linkText = linksArray.map(function(link) {
  return link.textContent;
});
```

Here's an alternative form of the same thing using an arrow function:

```js
var linkText = linksArray.map(link => link.textContent);
```

Note that we use `=>` instead of the word `function`. Since we only have one variable, we could also remove the round braces:

```js
var linkText = linksArray.map(link => link.textContent);
```

Let's use another Array method, `filter`, to isolate only those boulevards that contain a specific string:

```js
var de = linkText.filter(function(streetName) {
  return streetName.includes('de');
});
```

Note: `includes` is a string method. The `return` at the end of the function body ends the function and specifies the value(s) to be stored in `de`.

Here's the same function as an arrow function:

```js
var de = linkText.filter(streetName => streetName.includes('de'));
```

## Exercise: FlexNav

<img src="other/tabs-image.jpg">

Today we will be building [this simple page](http://oit2.scps.nyu.edu/~devereld/flexnav/#cuisines). The UI is spare in order that we may focus on the technique.

To begin, we will focus on navigation list styling but instead of using `display: inline` or `display: inline-block` to create horizontal navigation we will use floats and then flexbox.

### Design Patterns

In `other/floatNav-design-patterns`

- `cuisines.html` server vs client side rendering
- `index-spa-fragments` single page application with scroll
- `index-spa-js.html` single page application with JavaScript

### VS Code - Emmet

- An HTML plugin called [Emmet](https://emmet.io) is available in VS Code
- Review [emmet syntax](http://docs.emmet.io/abbreviations/syntax/)

Create a new `index.html` file in the `float-nav` folder.

Emmet samples to try in `index.html`:

`html:5`

`ul>li*4>a[href="#"]{link}`

`nav>ul>li.t-cuisines*4>a[href="cuisines.html"]{cuisines}`

Edit it as shown:

```html
<nav>
  <ul>
    <li><a href="index.html">cuisines</a></li>
    <li><a href="chefs.html">chefs</a></li>
    <li><a href="reviews.html">reviews</a></li>
    <li><a href="delivery.html">delivery</a></li>
  </ul>
</nav>
```

Add a link to `styles.css` in `index.html`:

`<link rel="stylesheet" href="css/styles.css">`

### VS Code - Prettier

Install the Prettier Code Formatter extension in VS Code.

Here are some sample VS Code configurations:

```js
"editor.formatOnSave": true,
"[javascript]": {
  "editor.formatOnSave": true
},
"[html]": {
  "editor.formatOnSave": true
},
"[css]": {
  "editor.formatOnSave": true
},
"prettier.singleQuote": true,
"prettier.trailingComma": "all",
"editor.wordWrap": "on",
```

## Node Package Manager

[Node Package Manager](https://www.npmjs.com) is an essential part of the web design and development ecosystem. [Node](https://nodejs.org/en/) includes NPM as part of its install

In order to familiarize you with node packages and to test your Node installation we will attempt to initiate hot reloading without using VS Code's Go Live extension.

Note the presence of `package.json` in today's folder. Examine it in VS Code.

[JSON](https://en.wikipedia.org/wiki/JSON) (JavaScript Object Notation) is ubiquitious in web development.

Use `cd` to navigate to today's directory. Then:

```sh
$ npm install
$ npm run start
```

- did it work? (sudo)

You have installed the software listed in package.json dependencies ([Browser Sync](https://www.browsersync.io/)) and ran the command in package.json scripts.

Browser Sync is an [NPM Package](https://www.npmjs.com/package/browser-sync) that is developed by a team using [Github](https://github.com/BrowserSync/browser-sync).

The script (`"browser-sync start --server 'app' --files 'app'"`) was written by consulting the command line [documentation](https://browsersync.io/docs/command-line).

Make a change to the HTML and note the hot reloading.

Note the addition of the installation folder: `node_modules` and [package-lock.json](https://docs.npmjs.com/files/package-lock.json).

Note the `.gitignore` file.

Use `ctrl-c` to shut down the server.

Try editing the start script to specify the browser:

```js
"scripts": {
  "start": "browser-sync start --browser \"google chrome\" --port 1234 --server 'app' --files 'app'"
},
```

Restart the server with `$ npm run start`.

## FlexNav CSS

Open the file in Chrome and examine the default user agent styles using the inspector.

Add and review some basic formatting in `styles.css`:

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Helvetica Neue', Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
a {
  text-decoration: none;
  color: #333;
}
ul {
  margin: 0;
  padding: 0;
}
nav ul {
  list-style: none;
  background-color: #ffcb2d;
  padding: 0 0 0 46px;
}
```

Note the complex looking `font-family` value. You could use `font-family: system-ui;` but that only works in certain browsers. Consult [caniuse](https://caniuse.com/#feat=font-family-system-ui).

It is quite common today to use a _system font stack_ that allows each operating system to use its native font. [Google](https://bit.ly/2kYnnOV) it.

### Floats

Float the list items to the left:

```css
nav li {
  float: left;
}
```

Notice what happened to the yellow color.

The `<li>` items no longer force the parent `<ul>` element to expand to contain them. We can see this by virtue of the fact that the yellow background color has disappeared.

This behavior, know as collapsing, occurs whenever all the direct children of a container element are floated. In this case the `<ul>` has collapsed. This behavior is known as "collapsing" and is a common design issue when using floats.

Traditionally, there are a number of methods in use to prevent this:

- float a float (or "FNE" - float nearly everything) - apply a float to the collapsed element
- the clearfix hack - this entails creating a utility class and will be covered later
- adding a clearing div - this entails adding an HTML element to the page solely for the purpose of visual formatting and so is discouraged

For our current example let's use the second - FNE - method.

Try adding a float to the 'collapsed' `ul` element:

```css
nav ul {
  ... float: left;
}
```

Note that the width has changed. Boxes are 100% width by default (they stretch to fill their container). Floating the collapsed element causes it to contract to contain its children.

Since we want the `<ul>` to extend the width of the window let's fix the width and add a touch of space above.

```css
nav ul {
  ... padding: 1rem 0 0 46px;
  width: 100%;
}
```

Note: when you float an element you usually have to specify a width.

Extend the [background property](https://www.w3schools.com/css/css_background.asp) to add a background color and image to the `<ul>`.

```css
nav ul {
  ... background-image: url(../img/nav_bg.gif);
}
```

Aside: demo the background property using `img/pattern.gif`.

Add positioning to the background.

```css
nav {
  ... background-image: url(../img/nav_bg.gif);
  background-repeat: repeat-x;
  background-position: bottom left;
}
```

Next we'll tackle the `<a>` tags. Add the following to our CSS block.

Adding padding, margins to separate, and a border to make them more tab-like:

```css
nav a {
  padding: 4px 8px;
  border: 1px solid #9b8748;
  border-radius: 3px 3px 0 0;
  margin: 0 6px 0 0;
}
```

The same issue we had with collapsing earlier has occurred here as well with the anchor tags. The padding and border is hanging below the yellow area. We will use the same float method as before to make the container expand to fit its floated children. Let's remove the redundant border while we're at it.

```css
nav a {
  ... border-bottom: none;
  float: left;
}
```

By floating the anchors we cause the `<li>`s to expand to contain their floated children.
Now we add a background image to the `<a>`. Note the use of the background shortcut and that the image has a gradient and transparency.

```css
nav a {
  ... background: #f9eaa9 url(../img/off_bg.gif) repeat-x top left;
}
```

Note:

- We are using the background shortcut
- the background graphic we placed in the `<ul>` is obscured by the tabs.

Now we create hover states for our tabs by swapping out the background image:

```css
nav a:hover {
  background: #fff url(i/on_bg.gif) repeat-x top left;
}
```

We will use padding to show or hide the background graphic running along the bottom of the `<ul>` - increasing the height by one pixel on hover to hide the image.

Recall that the padding on the bottom of the anchor tags was 4px. Let's increase the padding on the hover state to 5px.

```css
nav a:hover {
  ... padding-bottom: 5px;
}
```

If you roll over the tabs now the height of the anchor increases by one pixel causing the containing `<ul>` to expand as well and thus showing the border along the bottom under the inactive tabs.

Due to the fact that there is no selected tab (only hovered) the height of the ul jumps 1 pixel. Let's assume that one of the tabs will always be highlighted.

Add a `active` class to the first link in the HTML.

```css
nav a:hover,
nav a.active {
  background: #fff url(../img/on_bg.gif) repeat-x top left;
  padding-bottom: 5px;
}
```

<!-- Create a second selector to highlight one of the anchors by adding `.t-cuisines a` as a second selector to the hover rule.

Multiple selectors must be separated by a comma. Most prefer to keep the multiple selectors on separate lines like so:

```css
a:hover,
.t-cuisines a {
  ...;
}
```

Now, if we add an id to the body tag we can edit the selector to make it page specific.

Add `class="cuisines"` to the body tag.

```html
<body class="p-cuisines">
```

Edit the second selector to make the tab highlighting specific to this page.

```css
a:hover,
.p-cuisines .t-cuisines a {
  ...;
}
```

Save a copy of `index.html` as `chefs.html` and add a class to the body tag:

```html
<body class="p-chefs"></body>
```

Add a new selector to the CSS:

```css
a:hover,
.p-cuisines .t-cuisines a,
.p-chefs .t-chefs a {
  ...;
}
```

Lighten the color of the text and the border-color in the inactive tabs:

```css
a {
  ...
  color: #777;
}
a:hover,
.p-cuisines .t-cuisines a,
.p-chefs .t-chefs a {
  ...
  color: #333;
  border-color: #9b8748;
}

```

Now when you navigate between the two pages you should see a friendly reminder of what page you are on courtesy of the CSS file. -->

### Box Sizing

Note the horizontal scrollbar.

Add:

```css
nav {
  box-sizing: border-box;
  ...
}
```

We could also apply it to the entire project:

```css
* {
  box-sizing: border-box;
}
```

See [this article](https://dev.to/hankchizljaw/bite-sized-basics-box-sizing-4al2) on dev.to for a simple explanation of box sizing in HTML.

### Float CSS with Images

Here is the CSS complete using images:

```css
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Helvetica Neue', Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
a {
  text-decoration: none;
  color: #333;
}
ul {
  margin: 0;
  padding: 0;
}
nav ul {
  list-style: none;
  background-color: #ffcb2d;
  background-image: url(../img/nav_bg.gif);
  background-repeat: repeat-x;
  background-position: bottom left;
  float: left;
  padding: 1rem 0 0 46px;
  width: 100%;
}
nav li {
  float: left;
}
nav a {
  padding: 4px 8px;
  border: 1px solid #9b8748;
  border-radius: 3px 3px 0 0;
  margin: 0 6px 0 0;
  border-bottom: none;
  float: left;
  background: #f9eaa9 url(../img/off_bg.gif) repeat-x top left;
}
nav a:hover,
nav a.active {
  background: #fff url(../img/on_bg.gif) repeat-x top left;
  padding-bottom: 5px;
}
```

### Removing the Images

Images and externally linked assets are a factor contributing to the time it takes to download and render your page. It is considered a best practice to minimize the number of images whereever possible.

- [Intro to gradients in css](https://css-tricks.com/css3-gradients/) has more information than you'll ever need
- [Gradient editor](http://www.colorzilla.com/gradient-editor/) is the tool I used to create the gradients below

Edit the background properties for the tabs:

Normal anchor (eg. non-hovered) state:

```css
nav a {
  ... background-color: #f9eaa9;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 236, 165, 1) 0%,
    rgba(232, 213, 149, 1) 6%,
    rgba(253, 233, 162, 1) 94%,
    rgba(253, 233, 162, 1) 100%
  );
}
```

Active and hovered states:

```css
nav a:hover,
nav a.active {
  padding-bottom: 5px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(224, 226, 240, 1) 6%,
    rgba(254, 254, 254, 1) 53%
  );
  border-bottom: none;
}
```

And nav:

```css
nav {
  ... background-color: #ffcb2d;
  background-image: linear-gradient(
    to bottom,
    #ffcb2d 0%,
    #ffcb2d 95%,
    #9b8748 100%
  );
}
```

### Float CSS without Images

Here is the float-based CSS without images complete up to this point:

```css
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Helvetica Neue', Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
a {
  text-decoration: none;
  color: #333;
}
ul {
  margin: 0;
  padding: 0;
}
nav ul {
  list-style: none;
  background-color: #ffcb2d;
  background-image: linear-gradient(
    to bottom,
    #ffcb2d 0%,
    #ffcb2d 95%,
    #9b8748 100%
  );
  float: left;
  padding: 1rem 0 0 46px;
  width: 100%;
}
nav li {
  float: left;
}
nav a {
  padding: 4px 8px;
  border: 1px solid #9b8748;
  border-radius: 3px 3px 0 0;
  margin: 0 6px 0 0;
  border-bottom: none;
  float: left;
  background-color: #f9eaa9;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 236, 165, 1) 0%,
    rgba(232, 213, 149, 1) 6%,
    rgba(253, 233, 162, 1) 94%,
    rgba(253, 233, 162, 1) 100%
  );
}
nav a:hover,
nav a.active {
  padding-bottom: 5px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(224, 226, 240, 1) 6%,
    rgba(254, 254, 254, 1) 53%
  );
}
```

## Flexbox 

[What is Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)?

- A good [reference](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) cheat sheet
- `flex` is a _display_ attribute like `block, inline, block-inline`
- Do not confuse it with _positioning_ which we have looked at for absolute, relative and fixed positioning
- Get familiar with [Can I Use](https://caniuse.com/#feat=flexbox) and [feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)

### Flexbox in the Wild

- nytimes.com main story on the front page
- theguardian.com main story on the front page

<hr />

First - comment out the float properties in the CSS and add `display: flex` to the nav:

```css
nav {
  /* float: left; */
  ...;
}

li {
  /*float: left;*/
  display: flex;
}
```

```css
a {
  /* float: left; */
  ...;
}
```

And add the flex display property:

```css
nav {
  /* float: left; */
  display: flex;
  ...;
}
```

```css
nav li {
  display: flex;
  margin: 0 6px 0 0;
}
```

See [this Pen](https://codepen.io/DannyBoyNYC/pen/dawPQz) for some basic info on how to control flexbox responsively.

We have a meta tag:

```html
<meta name="viewport" content="width=device-width" />
```

Expand the tabs on small screens:

```css
@media (max-width: 768px) {
  nav li {
    flex-grow: 1;
  }
  nav a {
    flex-grow: 1;
  }
}
```

Flex order property (demo only):

```css
...
nav .t-cuisines {
  order: 3;
}
```

### Final Flexbox CSS 

Here's the final CSS with flexbox:

```css
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Helvetica Neue', Arial, sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
}
ul {
  margin: 0;
  list-style: none;
  padding: 0;
}
a {
  text-decoration: none;
}
nav ul {
  display: flex;
  padding: 1rem 0 0 46px;
  background-color: #ffcb2d;
  background-image: linear-gradient(
    to bottom,
    #ffcb2d 0%,
    #ffcb2d 95%,
    #9b8748 100%
  );
}
li {
  display: flex;
  margin: 0 6px 0 0;
}
a {
  color: #333;
  padding: 4px 8px;
  border: 1px solid #9b8748;
  border-radius: 3px 3px 0 0;
  background-color: #f9eaa9;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 236, 165, 1) 0%,
    rgba(232, 213, 149, 1) 6%,
    rgba(253, 233, 162, 1) 94%,
    rgba(253, 233, 162, 1) 100%
  );
}
a:hover,
a.active {
  padding-bottom: 5px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(224, 226, 240, 1) 6%,
    rgba(254, 254, 254, 1) 53%
  );
  border-bottom: none;
}

@media (max-width: 768px) {
  nav li {
    flex-grow: 1;
  }
  nav a {
    flex-grow: 1;
  }
}
```

## JavaScript Navigation

Link the empty JavaScript file to index.html.

`<script src="js/scripts.js"></script>`

Add to scripts.js:

```js
var tabs = document.querySelector('nav a');
console.log(tabs);
```

We need to use `querySelectorAll` because we are gathering more than one item:

```js
var tabs = document.querySelectorAll('nav a');
console.log(tabs);
console.log(tabs.length);
```

Now we need to attach an eventListener to each of the tabs. `addEventListener()` requires you to pass in a specific, individual element to listen to. You cannot pass in an array or node list of matching elements.

```js
var tabs = document.querySelectorAll('nav a');

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener('click', makeActive);
}

// Since NodeLists have a forEach method we can also do this:
// tabs.forEach(function(tab) {
//   tab.addEventListener('click', makeActive);
// });

function makeActive() {
  console.log(this);
  event.preventDefault();
}
```

Using an Arrow function shortcut (for anonymous functions):

```js
var tabs = document.querySelectorAll('nav a');

tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive() {
  console.log(this);
  event.preventDefault();
}
```

Note the use of `this` to refer to the thing clicked on. `this` is very powerful and pretty complex in JavaScript. The value of `this` is usually determined by a function's execution context. Execution context simply means how a function is called. Our function is called by clicking on a link so `this` shows as a link in the console when we log it. Here `this` is equal to `tab`.

Let's use `classList` again to add a class to the link we click on:

```js
var tabs = document.querySelectorAll('nav a');

tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive() {
  this.classList.add('active');
  event.preventDefault();
}
```

Lets remove the class from all tabs before we add it so that only one is active at a time:

```js
var tabs = document.querySelectorAll('nav a');

tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive() {
  tabs.forEach(tab => tab.classList.remove('active'));
  this.classList.add('active');
  event.preventDefault();
}
```

We can separate the class removal out into its own function and then call that function (`makeInactive();`):

```js
var tabs = document.querySelectorAll('nav a');

tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive() {
  makeInactive();
  this.classList.add('active');
  event.preventDefault();
}

function makeInactive() {
  tabs.forEach(tab => tab.classList.remove('active'));
}
```

Finally, rather than using `this` it is customary to use `event.target`:

```js
function makeActive() {
  console.log(event);
  console.log(event.target);
  makeInactive();
  event.target.classList.add('active');
  event.preventDefault();
}
```

Add some variables with content:

```js
var cuisines =
  'Cuisines. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.';

var chefs =
  'Chefs. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.';

var reviews =
  'Reviews. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.';

var delivery =
  'Delivery. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.';
```

Create an empty `div` with a class of `content` in the html:

```html
<div class="content"></div>
```

Create a reference to it and initialize our page with some text using `innerHTML`:

```js
var contentPara = document.querySelector('.content');
document.querySelector('nav a').classList.add('active');
contentPara.innerHTML = cuisines;
```

Style it using CSS:

```css
.content {
  padding: 1rem;
}
```

Note that we can access the value of the link's href by using `this.href` _or_ `event.target.href`:

```js
function makeActive() {
  console.log(this.href)
  console.log(event.target.href);
  ...
}
```

So let's make the content of the `.content` div depend on the link's href. We will use the string method `includes` as a test for simple equality will fail:

```js
function makeActive() {
  console.log(event.target.href);
  makeInactive();
  event.target.classList.add('active');
  if (event.target.href.includes('cuisines')) {
    contentPara.innerHTML = cuisines;
  } else if (event.target.href.includes('chefs')) {
    contentPara.innerHTML = chefs;
  } else if (event.target.href.includes('reviews')) {
    contentPara.innerHTML = reviews;
  } else if (event.target.href.includes('delivery')) {
    contentPara.innerHTML = delivery;
  }
  event.preventDefault();
}
```

In JavaScript parlance this is something akin to what is known as a Single Page Application or "SPA" with `routing`, but its not quite there yet.

The  problems with what we've built might be called _maintaining state_ and _routing_. If you refresh the browser while you are on the Reviews tab it reinitializes the page to show the Cuisines tab. Not only is the refresh broken but the back and forward buttons don't work as expected either.

## Event Delegation

Instead of listening for clicks on each individual tab:

`tabs.forEach(tab => tab.addEventListener('click', makeActive));`

We are going to use event delegation.

Use:

`document.addEventListener('click', makeActive);`

Everything works but try clicking on the paragraph.

We will use an if statement to ensure that the user has clicked on a link in the navbar before running our code:

```js
function makeActive() {
  if (event.target.matches('nav ul a')) {
    makeInactive();
    event.target.classList.add('active');
    if (event.target.href.includes('cuisines')) {
      contentPara.innerHTML = cuisines;
    } else if (event.target.href.includes('chefs')) {
      contentPara.innerHTML = chefs;
    } else if (event.target.href.includes('reviews')) {
      contentPara.innerHTML = reviews;
    } else if (event.target.href.includes('delivery')) {
      contentPara.innerHTML = delivery;
    }
    event.preventDefault();
  }
}
```

## Working with Objects

(See `other/OBJECTS.js` using Quokka in VS Code.)

```js
const data = {
  cuisines:
    'Cuisines. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.',

  chefs:
    'Chefs. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.',

  reviews:
    'Reviews. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.',

  delivery:
    'Delivery. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.'
};
```

Reinitialize using dot accessor method:

```js
var contentPara = document.querySelector('.content');
document.querySelector('nav a').classList.add('active');
contentPara.innerHTML = data.cuisines; // NEW
```

Add [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) to the HTML:

```html
<ul>
  <li>
    <a data-story="cuisines" href="#cuisines">cuisines</a>
  </li>
  <li>
    <a data-story="chefs" href="#chefs">chefs</a>
  </li>
  <li>
    <a data-story="reviews" href="#reviews">reviews</a>
  </li>
  <li>
    <a data-story="delivery" href="#delivery">delivery</a>
  </li>
</ul>
```

Use dataset and bracket notation when accessing an object's property via a variable:

```js
function makeActive() {
  if (event.target.matches('nav ul a')) {
    makeInactive();
    event.target.classList.add('active');
    let activePage = document.querySelector('.active');
    let storyRef = activePage.dataset.story;
    contentPara.innerHTML = data[storyRef];

    // event.preventDefault();
  }
}
```

Note that because we are using hashes as the href value for our links we no longer need to prevent the default behavior of the links since hashes always refer to the current page.

## An Array of Objects

This is an extemmely common format for data.

```js
const data = [
  {
    section: 'cuisines',
    story:
      'Cuisines. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.'
  },
  {
    section: 'chefs',
    story:
      'Chefs. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.'
  },
  {
    section: 'reviews',
    story:
      'Reviews. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.'
  },
  {
    section: 'delivery',
    story:
      'Delivery. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.'
  }
];
```

An array is commonly used in conjunction with loops:

```js
function makeActive() {
  if (event.target.matches('nav ul a')) {
    makeInactive();
    event.target.classList.add('active');
    let activePage = document.querySelector('.active');
    let storyRef = activePage.dataset.story;
    // NEW
    for (let i = 0; i < data.length; i++) {
      if (data[i].section === storyRef) {
        // console.log(data[i].story);
        contentPara.innerHTML = data[i].story;
      }
    }
  }
}
```

We could also use the array's forEach method instead of a for loop:

```js
function makeActive() {
  if (event.target.matches('nav ul a')) {
    makeInactive();
    event.target.classList.add('active');
    let activePage = document.querySelector('.active');
    let storyRef = activePage.dataset.story;
    data.forEach(function(item) {
      if (item.section === storyRef) {
        contentPara.innerHTML = item.story;
      }
    });
  }
}
```

Here is the forEach callback function as an arrow function:

```js
function makeActive() {
  if (event.target.matches('nav ul a')) {
    makeInactive();
    event.target.classList.add('active');
    let activePage = document.querySelector('.active');
    let storyRef = activePage.dataset.story;
    data.forEach(item => {
      if (item.section === storyRef) {
        contentPara.innerHTML = item.story;
      }
    });
  }
}
```

Finally, let's create a header for the content.

Use the `document.createElement()` method to create an element. You can manipulate an element created with createElement() like you would any other element in the DOM. Add classes, attributes, styles, and more.

`makeHeader(storyRef);`

```js
function makeHeader(head) {
  const myHeader = document.createElement('h3');
  myHeader.innerText = head;
  contentPara.prepend(myHeader);
}
```

To insert the content we can use:

- before() - insert an element before another one
- after() - inserts an element in the DOM after another one
- prepend() -inserts an element at the beginning of a selection
- append() - inserts an element at the end

To remove an element you can use `remove()`.

Add some CSS to capitalize the new header:

```css
.content h3 {
  text-transform: capitalize;
}
```

Add the same property to the tab text.

Initialize the header on first load using the `load` event (or the `DOMContentLoaded` event).

`window.addEventListener('load', setUp);`

```js
function setUp() {
  document.querySelector('nav a').classList.add('active');
  contentPara.innerHTML = data[0].story;
  makeHeader('Cuisines');
  window.location.hash = 'cuisines';
}
```

## Notes
