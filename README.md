# FlexNav

- [FlexNav](#flexnav)
  - [Homework](#homework)
  - [Reading](#reading)
  - [The Terminal](#the-terminal)
    - [A Note For Windows Users](#a-note-for-windows-users)
  - [Initialize GIT and Create a Branch](#initialize-git-and-create-a-branch)
  - [Design Patterns](#design-patterns)
  - [Aside - Emmet](#aside---emmet)
  - [Node Package Manager (NPM)](#node-package-manager-npm)
  - [Flexbox](#flexbox)
    - [Aside - attribute selectors](#aside---attribute-selectors)
    - [Aside: Flex Order](#aside-flex-order)
  - [JavaScript Preview & Review - Boulevards de Paris](#javascript-preview--review---boulevards-de-paris)
    - [Arrays](#arrays)
  - [JavaScript Navigation](#javascript-navigation)
    - [Aside: Prettier](#aside-prettier)
  - [Event Delegation](#event-delegation)
  - [Working with Objects](#working-with-objects)
  - [An Array of Objects](#an-array-of-objects)
  - [Extra Credit - refresh](#extra-credit---refresh)
  - [Extra Credit - createElement](#extra-credit---createelement)
    - [Initialize on Load](#initialize-on-load)
  - [Notes](#notes)


## Homework

Examine the files in the `other/homework` folder. `index.html` is your starting point and `index-done.html` the goal. Your assignment is to edit `index.html` to it matches the goal. There are some notes for you to follow [here](https://github.com/front-end-foundations/4-flex-menu#design-with-flexbox).

## Reading

- [What is Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
- See how far you can get on [Flexbox Froggy](http://flexboxfroggy.com/)
<!-- - Pimp out your terminal with [this tutorial](https://wesbos.com/command-line-video-tutorials/) -->

## The Terminal

There are many good reasons to acquire a basic understanding of the command line terminal. In this class we will use the [Terminal](https://support.apple.com/guide/terminal/welcome/mac) app for GIT and GITHUB as well as for Node Package Manager (NPM).

<hr />

### A Note For Windows Users

A rough equivalent to Mac's Terminal app is [Powershell](https://docs.microsoft.com/en-us/powershell/) but there are important differences. Alternatives to Powershell include the shell that comes with [Git for Windows](https://gitforwindows.org/) aka "Git Bash." I suggest using Git Bash instead of Powershell on Windows for this exercise.

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
> total
> var el = document.querySelector('.anything') // error
> .exit // or control + c to exit node
$ clear // or command + k to clear the terminal
```

Use `cd` or the copy and paste method to cd into today's exercise folder.

## Initialize GIT and Create a Branch

```sh
$ git init
$ touch .gitignore
$ git add .
$ git commit -m 'initial commit'
$ git branch inclass
$ git checkout inclass
```

## Design Patterns

<img src="other/tabs-image.jpg">

Today we will be building [this simple page](http://oit2.scps.nyu.edu/~devereld/flexnav/#cuisines). The UI is spare to keep things simple.

Let's examine the samples in `other/design-patterns` (these are non-trivial examples, you do not need to understand everything, just the basic concepts - static, fragments and SPA or single page application):

- `static/cuisines.html` - uses static HTML pages
- `fragments/index-spa-fragments` - a single page application with scrolling
- `spa/index-spa-js.html` - a single page application with JavaScript

All three approaches are valid and common. For pedagogical purposes we will be modeling our design after the last one - a single page application with JavaScript.

## Aside - Emmet

- An HTML plugin called [Emmet](https://emmet.io) is available in VS Code
- Review [emmet syntax](http://docs.emmet.io/abbreviations/syntax/)

Create a new `index.html` file in the `app` folder. (Use touch if you want to be fancy.)

Emmet samples to try in `index.html`:

`html:5`

`ul>li*4>a[href="#"]{link}`

`nav>ul>li.t-cuisines*4>a[href="cuisines.html"]{cuisines}`

---

Add a link to `styles.css` in `index.html`:

```html
<link rel="stylesheet" href="css/styles.css">
```

And the following to your HTML page:

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

## Node Package Manager (NPM)

[Node Package Manager](https://www.npmjs.com) is an essential part of the web design and development ecosystem. [Node](https://nodejs.org/en/) includes NPM as part of its install

In order to familiarize you with node packages and to test your Node installation we will install a server with hot reloading - as opposed to using VS Code's GoLive extension.

Note the presence of `package.json` in today's folder. Examine it in VS Code.

[JSON](https://en.wikipedia.org/wiki/JSON) (JavaScript Object Notation) is a file format often used for transmitting data. It is ubiquitious in web development.

```js
{
  "name": "flex-nav",
  "version": "1.0.0",
  "description": "A simple navbar",
  "main": "index.js",
  "scripts": {
    "start": "browser-sync start --server 'app' --files 'app'"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "browser-sync": "^2.26.0"
  }
}

```

We are going to recreate this file. 

1. Delete `package.json`
2. `cd` to navigate to today's directory
3. Then initialize npm and install browser-sync:

```sh
$ npm init
$ npm install browser-sync
```

Note:

- the installed the software is listed in package.json dependencies ([Browser Sync](https://www.browsersync.io/))
- the addition of the installation folder: `node_modules` 
- the new [package-lock.json](https://docs.npmjs.com/files/package-lock.json)
- the `.gitignore` file (added by me) declares that the contents of the node_modules folder should not be tracked by git

Examine the contents of `node_modules`.

Browser Sync is an [NPM Package](https://www.npmjs.com/package/browser-sync) that is developed by a team using [Github](https://github.com/BrowserSync/browser-sync).

```sh
$ npm install browser-sync
```

Add the script (`"browser-sync start --server 'app' --files 'app'"`) to package.json.

This script is a command line. It was written by consulting the command line [documentation](https://browsersync.io/docs/command-line).

Make a small change to the HTML and note the hot reloading.

Use `ctrl-c` to shut down the server.

Try editing the start script to specify the browser and port:

```js
"scripts": {
  "start": "browser-sync start --browser \"google chrome\" --port 1234 --server 'app' --files 'app'"
},
```

Restart the server with `$ npm run start`.

## Flexbox

[What is Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)?

- A good [reference](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) cheat sheet
- `flex` is a _display_ attribute like `block, none, inline`
- Do not confuse it with _positioning_ which we have looked at for absolute, relative, static and fixed positioning
- Get familiar with [Can I Use](https://caniuse.com/#feat=flexbox) and [feature detection](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)

Add and review some basic formatting in `app/styles.css`:

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
}
```

Note the complex looking `font-family` value. It is quite common to use a _system font stack_ that allows each operating system to use its native font. [Google](https://bit.ly/2kYnnOV) it. 

You could try `font-family: system-ui;` but that only works in certain browsers. Consult [caniuse](https://caniuse.com/#feat=font-family-system-ui).

```css
nav ul {
  ...
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
  /* background-image: linear-gradient(
    to bottom,
    #ffcb2d 0%,
    #ffcb2d 95%,
    #9b8748 100%
  ); */
}

nav a {
  padding: 4px 8px;
  border: 1px solid #9b8748;
  border-radius: 3px 3px 0 0;
  background-color: #f9eaa9;
  opacity: 0.8;
  /* background-image: linear-gradient(
    to bottom,
    rgba(255, 236, 165, 1) 0%,
    rgba(232, 213, 149, 1) 6%,
    rgba(253, 233, 162, 1) 94%,
    rgba(253, 233, 162, 1) 100%
  ); */

}

nav li {
  display: flex;
}
```

Add a `active` class to the first link in the HTML.

```css
nav a:hover,
nav .active {
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(224, 226, 240, 1) 6%,
    rgba(254, 254, 254, 1) 53%
  );
  border-bottom: none;
  opacity: 1;
}
```

### Aside - attribute selectors

A selector can use HTML tag attributes. `nav .active` could be written `nav a[class="active"]`

See [https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors)

---

We have a meta tag:

```html
<meta name="viewport" content="width=device-width" />
```

```css
@media (min-width: 460px) {
  nav ul {
    padding-left: 1rem;
    justify-content: flex-start;
  }
  nav li {
    margin-right: 1rem;
  }
}
```

See [this Pen](https://codepen.io/DannyBoyNYC/pen/dawPQz) for some basic info on how to control flexbox responsively.

### Aside: Flex Order

Flex order property (demo only):

```css
nav :nth-child(2) {
  order: 1;
}
```

---

## JavaScript Preview & Review - Boulevards de Paris

<!-- See `other/ARRAYS.js` (use Quokka extension for VS Code). -->

Recall `document.querySelector('<css selector>')` returns the first selected item.

Navigate to this [Wikipedia](https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris) article.

Paste the following in the console:

```js
var test = document.querySelector('a');
```

While `document.querySelectorAll()` returns a collection (`nodeList`) of the items on the page:

```js
var test = document.querySelectorAll('a');
```

Inspect one of the listed boulevards to find `.mw-category` in the code. 
Note: You can reference the currently selected element using `$0` in the console.

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

### Arrays

We commonly use loops to iterate through an array and perform some action.

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
var linkTextTwo = linksArray.map(function(link) {
  return link.textContent;
});
```

```js
var linkTextTwo = linksArray.map(function(link) {
  return `${link.textContent} is in paree`;
}).join(' AND ');
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

Here's the same function as an arrow function:

```js
var de = linkText.filter(streetName => streetName.includes('de'));
```

## JavaScript Navigation

We will add an active class to the tabs when they are clicked on.

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

function makeActive(event) {
  console.log(event.target);
  event.preventDefault();
}
```

Since NodeLists have a forEach method we can also do this:

```js
tabs.forEach(function(tab) {
  tab.addEventListener('click', makeActive);
});
```

Using an Arrow function shortcut (for anonymous functions):

```js
tabs.forEach(tab => tab.addEventListener('click', makeActive));
```

Let's use `classList` again to add a class to the link we click on:

```js
var tabs = document.querySelectorAll('nav a');

tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive(event) {
  event.target.classList.add('active');
  event.preventDefault();
}
```

Lets remove the class from all tabs before we add it so that only one is active at a time:

```js
var tabs = document.querySelectorAll('nav a');

tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive(event) {
  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');
  event.preventDefault();
}
```

We can separate the class removal out into its own function and then call that function (`makeInactive();`):

```js
var tabs = document.querySelectorAll('nav a');

tabs.forEach(tab => tab.addEventListener('click', makeActive));

function makeActive(event) {
  makeInactive();
  event.target.classList.add('active');
  event.preventDefault();
}

function makeInactive() {
  tabs.forEach(tab => tab.classList.remove('active'));
}
```

### Aside: Prettier

Install the Prettier Code Formatter extension in VS Code.

Create `.prettierrc` in the app folder:

```js
{
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

And test.

You can also add prettier preferences in VS Code:

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
```

---

Add some variables with content:

```js
var cuisines =
  '<h1>Cuisines</h1> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.</p>';

var chefs =
  '<h1>Chefs</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.<p>';

var reviews =
  '<h1>Reviews</h1> <p>Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.</p>';

var delivery =
  '<h1>Delivery</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.</p>';
```

Create an empty `div` with a class of `content` in the html:

```html
<div class="content"></div>
```

Create a reference to it and initialize our page with some text using `innerHTML`:

```js
var contentPara = document.querySelector('.content');
...
contentPara.innerHTML = cuisines;
```

Style it using CSS:

```css
.content {
  padding: 1rem;
}
```

Note that we can access the value of the link's href by using `event.target.href`:

```js
function makeActive() {
  console.log(event.target.href);
  ...
}
```

So let's make the content of the `.content` div depend on the link's href. We will use the string method `includes` as a test for simple equality will fail:

```js
function makeActive() {
  console.log(event.target);
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

In web development parlance this is something akin to what is known as a Single Page Application or "SPA".

The problems with what we've built might be termed _maintaining state_ and _routing_. If you refresh the browser while you are on the Reviews tab it reinitializes the page to show the Cuisines tab. 

Not only is the refresh broken but the back and forward buttons don't work as expected either.

NB: we have a sneaky bug in our code. Everything works but `if (event.target.href.includes('cuisines'))` will _never_ be true. Try `console.log(event.target.href)` before the if statements. Can you spot it?

<!-- ANSWER
<li><a href="cuisines.html" class="active">cuisines</a></li> -->

## Event Delegation

Instead of listening for clicks on each individual tab:

`tabs.forEach(tab => tab.addEventListener('click', makeActive));`

We are going to use "event delegation."

Use:

`document.addEventListener('click', makeActive);`

Everything works but try clicking on the paragraph.

We will use an if statement and the JavaScript "not" (`!`) operator to ensure that the user has clicked on a link in the navbar before running our code:

```js
function makeActive(event) {
  if (!event.target.matches('a')) return
  console.log(event.target)
  makeInactive()
  event.target.classList.add('active')
  if (event.target.href.includes('cuisines')) {
    contentPara.innerHTML = cuisines
  } else if (event.target.href.includes('chefs')) {
    contentPara.innerHTML = chefs
  } else if (event.target.href.includes('reviews')) {
    contentPara.innerHTML = reviews
  } else if (event.target.href.includes('delivery')) {
    contentPara.innerHTML = delivery
  }
  event.preventDefault()
}
```

## Working with Objects

(See `other/OBJECTS.js` using Quokka in VS Code.)

```js
const data = {
  cuisines:
    '<h1>Cuisines</h1> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.</p>',

  chefs:
    '<h1>Chefs</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.<p>',

  reviews:
    '<h1>Reviews</h1> <p>Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.</p>',

  delivery:
    '<h1>Delivery</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.</p>'
}
```

Reinitialize using "dot" accessor method - e.g. `data.cuisines`:

```js
contentPara.innerHTML = data.cuisines; // NEW
```

And use the accessor in the makeActive function:

```js
function makeActive() {
  if (!event.target.matches('nav ul a')) return;
  makeInactive();
  event.target.classList.add('active');
  if (event.target.href.includes('cuisines')) {
    contentPara.innerHTML = data.cuisines;
  } else if (event.target.href.includes('chefs')) {
    contentPara.innerHTML = data.chefs;
  } else if (event.target.href.includes('reviews')) {
    contentPara.innerHTML = data.reviews;
  } else if (event.target.href.includes('delivery')) {
    contentPara.innerHTML = data.delivery;
  }
  event.preventDefault();
}
```

Our page is pretty fragile. Hitting refresh always displays the cuisines page and the back button doesn't work. Let's fix it by getting the page contents based on the address in the browser's address bar.

Remove the hardcoded active class and replace it with: 

`document.querySelector('nav a').classList.add('active');`

Change the href values to use hashes:

```html
<ul>
   <li><a href="#cuisines">cuisines</a></li>
   <li><a href="#chefs">chefs</a></li>
   <li><a href="#reviews">reviews</a></li>
   <li><a href="#delivery">delivery</a></li>
</ul>
```

Remove `event.preventDefault()` from the script. We no longer need it.

Now we'll get the string from the URL sing a bit of JavaScript [string manipulation]((https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)): 

```js
console.log(window.location)
var type = window.location.hash
var type = window.location.hash.substring(1)
console.log(hash)
```

```js
function makeActive(event) {
  if (!event.target.matches('a')) return
  makeInactive()
  event.target.classList.add('active')
  const type = window.location.hash.substring(1)
  contentPara.innerHTML = data[type]
}
```

You have to click on the tab twice to get the right content although the active / inactive class switching works.

We can set the initial hash with `window.location.hash = 'cuisines'`

See [https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)

```js
var contentPara = document.querySelector('.content')
var tabs = document.querySelectorAll('nav a')

function makeActive(event) {
  if (!event.target.matches('a')) return
  makeInactive()
  event.target.classList.add('active')
  setContentAccordingToHash()
}

function makeInactive() {
  tabs.forEach(function (tab) {
    tab.classList.remove('active')
  })
}

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1)
  contentPara.innerHTML = data[type]
}

function initializePage() {
  document.querySelector('nav a').classList.add('active')
  window.location.hash = 'cuisines'
  setContentAccordingToHash()
}

document.addEventListener('click', makeActive)
window.addEventListener('hashchange', setContentAccordingToHash)

initializePage()
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
   <nav>
   <ul>
     <li><a href="#cuisines">cuisines</a></li>
     <li><a href="#chefs">chefs</a></li>
     <li><a href="#reviews">reviews</a></li>
     <li><a href="#delivery">delivery</a></li>
   </ul>
   </nav>
    <div class="content"></div>
    <script src="js/data-object.js"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>
```

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1.25rem;
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
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(
    to bottom,
    #ffcb2d 0%,
    #ffcb2d 95%,
    #9b8748 100%
  );
}

nav a {
  padding: 4px 8px;
  border: 1px solid #9b8748;
  border-radius: 3px 3px 0 0;
  background-color: #f9eaa9;
  opacity: 0.8;
  background-image: linear-gradient(
    to bottom,
    rgb(248, 236, 193) 0%,
    rgb(245, 237, 213) 6%,
    rgb(248, 219, 112) 94%,
    rgb(247, 204, 51) 100%
  );
}

nav li {
  display: flex;
}

nav a:hover,
nav .active {
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(224, 226, 240, 1) 6%,
    rgba(254, 254, 254, 1) 53%
  );
  border-bottom: none;
  opacity: 1;
}

.content {
  padding: 1rem;
}

@media (min-width: 460px) {
  nav ul {
    padding-left: 1rem;
    justify-content: flex-start;
  }
  nav li {
    margin-right: 1rem;
  }
}
```


<!-- ## Data Attributes

Add [data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) to the HTML:

```html
<ul>
  <li>
    <a data-story="cuisines" href="#cuisines" class="active">cuisines</a>
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
  if (!event.target.matches('nav ul a')) return;
  makeInactive();
  event.target.classList.add('active');
  let activePage = document.querySelector('.active');
  let storyRef = activePage.dataset.story;
  contentPara.innerHTML = data[storyRef];
  // event.preventDefault();
}
```

Note that because we are using hashes as the href value for our links we no longer need to prevent the default behavior of the links since hashes always refer to the current page. -->

## An Array of Objects

This is an extemmely common format for data to be sent from a server for use in a page. 

```html
https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`;
https://pokeapi.co/api/v2/pokemon/
https://www.reddit.com/r/BudgetAudiophile.json
```

It's also very dangerous to send HTML from a server for use in your page as it opens possibilities for hacking. Accordingly I've removed the HTML tags here.

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

An array is commonly used in conjunction with loops. We will loop through our data array and se an if statement in order to find a match for our type variable.

```js
function setContentAccordingToHash() {
  const type = window.location.hash.substring(1)
  for (var i = 0; i < data.length; i++) {
    console.log(i, data[i])
    if (data[i].section === type) {
      console.log(data[i].story)
      contentPara.innerHTML = data[i].story
    }
  }
}

function initializePage() {
  console.log(data[0].section)
  document.querySelector('nav a').classList.add('active')
  window.location.hash = 'cuisines'
  setContentAccordingToHash()
}
```

We could also use the array's `forEach` method instead of a for loop:

```js
function setContentAccordingToHash() {
  const type = window.location.hash.substring(1)
  data.forEach(function (item) {
    if (item.section === type) {
      contentPara.innerHTML = item.story
    }
  })
```

Or a `for ... of` loop:

```js
function setContentAccordingToHash() {
  const type = window.location.hash.substring(1)

  for (var item of data) {
    if (item.section === type) {
      contentPara.innerHTML = item.story
    }
  }
}
```

## Extra Credit - refresh

A solution for the refresh button:

```js
function initializePage() {
  if (!window.location.hash) {
    window.location.hash = 'cuisines'
    document.querySelector('a[href="#cuisines"]').classList.add('active')
  } else {
    document
      .querySelector(`a[href="${window.location.hash}"]`)
      .classList.add('active')
  }
  setContentAccordingToHash()
}
```

## Extra Credit - createElement

Finally, let's create a header for the content.

Use the `document.createElement()` method to create an element. You can manipulate an element created with createElement() like you would any other element in the DOM. Add classes, attributes, styles, and more.

At the bottom of makeActive:

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

Add the same CSS property to the tab text.

### Initialize on Load

Initialize the header on first load using the `load` event (or the `DOMContentLoaded` event).

`window.addEventListener('load', setUp);`

```js
function setUp() {
  document.querySelector('nav a').classList.add('active');
  contentPara.innerHTML = data[0].story;
  makeHeader(data[0].section);
  window.location.hash = 'cuisines';
}
```

Simulate a click on the first tab:

```js
function setUp() {
  document.querySelector('nav a').click();
}
```

## Notes

similar. Nice use of callbacks:
https://itnext.io/build-a-single-page-web-app-javascript-and-the-dom-90c99b08f8a9

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="icon" type="image//png" href="favicon.png" />
    <link rel="stylesheet" href="css/styles.css" />
  </head>
  <body>
    <nav>
      <ul>
        <li><a href="#cuisines">cuisines</a></li>
        <li><a href="#chefs">chefs</a></li>
        <li><a href="#reviews">reviews</a></li>
        <li><a href="#delivery">delivery</a></li>
      </ul>
    </nav>
    <div class="content"></div>
    <script src="js/data-array.js"></script>
    <script src="js/scripts.js"></script>
  </body>
</html>

```

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol';
  font-size: 1.25rem;
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
  padding-top: 1rem;
  display: flex;
  justify-content: space-around;
  background-image: linear-gradient(
    to bottom,
    #ffcb2d 0%,
    #ffcb2d 95%,
    #9b8748 100%
  );
}

nav a {
  padding: 4px 8px;
  border: 1px solid #9b8748;
  border-radius: 3px 3px 0 0;
  background-color: #f9eaa9;
  opacity: 0.8;
  background-image: linear-gradient(
    to bottom,
    rgb(248, 236, 193) 0%,
    rgb(245, 237, 213) 6%,
    rgb(248, 219, 112) 94%,
    rgb(247, 204, 51) 100%
  );
}

nav li {
  display: flex;
}

nav a:hover,
nav a[class='active'] {
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(224, 226, 240, 1) 6%,
    rgba(254, 254, 254, 1) 53%
  );
  border-bottom: none;
  opacity: 1;
}

.content {
  padding: 1rem;
}

@media (min-width: 460px) {
  nav ul {
    padding-left: 1rem;
    justify-content: flex-start;
  }
  nav li {
    margin-right: 1rem;
  }
}

```

```js
var contentPara = document.querySelector('.content')
var tabs = document.querySelectorAll('nav a')

function makeActive(event) {
  if (!event.target.matches('a')) return
  makeInactive()
  event.target.classList.add('active')
  setContentAccordingToHash()
}

function makeInactive() {
  tabs.forEach(function (tab) {
    tab.classList.remove('active')
  })
}

function setContentAccordingToHash() {
  var type = window.location.hash.substring(1)
  for (var item of data) {
    if (item.section === type) {
      contentPara.innerHTML = item.story
    }
  }
  setActiveAccordingToHash(type)
}

function setActiveAccordingToHash(type) {
  makeInactive()
  document.querySelector(`a[href="#${type}"]`).classList.add('active')
}

function initializePage() {
  if (!window.location.hash) {
    window.location.hash = 'cuisines'
    document.querySelector('[href="#cuisines"]').classList.add('active')
  } else {
    document
      .querySelector(`[href="${window.location.hash}"]`)
      .classList.add('active')
  }
  setContentAccordingToHash()
}

document.addEventListener('click', makeActive)
window.addEventListener('hashchange', setContentAccordingToHash)
window.addEventListener('load', initializePage)

```
