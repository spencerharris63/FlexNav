# FlexNav

- [FlexNav](#flexnav)
  - [Homework](#homework)
  - [Midterm](#midterm)
  - [Reading](#reading)
  - [The Terminal](#the-terminal)
    - [A Note For Windows Users](#a-note-for-windows-users)
  - [Initialize GIT and Create a Branch](#initialize-git-and-create-a-branch)
  - [Aside - Design Patterns](#aside---design-patterns)
  - [Node Package Manager (NPM)](#node-package-manager-npm)
  - [Flexbox](#flexbox)
    - [Aside: Attribute Selectors](#aside-attribute-selectors)
    - [Aside: Flex Order](#aside-flex-order)
  - [JavaScript Preview & Review - Boulevards de Paris](#javascript-preview--review---boulevards-de-paris)
    - [Arrays](#arrays)
    - [Aside: Prettier](#aside-prettier)
  - [Event Delegation](#event-delegation)
  - [Working with Objects](#working-with-objects)
  - [An Array of Objects](#an-array-of-objects)

## Homework

Examine the files in the `other/homework` folder. `index.html` is your starting point and `index-done.html` the goal. Your assignment is to edit `index.html` so it matches the goal.

## Midterm

Copy the `other/homework` folder from the previous section (Flexnav) into a stand alone project.

- `index.html` is your starting point
- `index-done.html` the goal
- edit `index.html` so it matches the goal
- try not to copy directly, use `index-done.html` only when you get stuck

One task you will have to perform is not in the `index-done.html` file. Using the notes in Basilica:

- add an empty div to the page
- use JavaScript to change the content of the div when the user clicks on the tabs

Make sure to create a local Git repo.

When you are done push your local repo to Github and use Netlify to deploy your assignment.

Send me a link to the Github repo as well as the Netlify site

## Reading

- [What is Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Using_CSS_flexible_boxes)
- See how far you can get on [Flexbox Froggy](http://flexboxfroggy.com/)

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

[Configure](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup) your installation of git:

```sh
$ git config --global user.name "John Doe"
$ git config --global user.email johndoe@example.com
$ git config --global init.defaultBranch main
$ git config --list
```

Initialize your repository:

```sh
$ git init
# $ touch .gitignore
# $ echo node_modules >> .gitignore
$ git add .
$ git commit -m 'initial commit'
$ git branch inclass
$ git checkout inclass
```

Note the .gitignore

## Aside - Design Patterns

<img src="other/tabs-image.jpg">

Today we will be building [this simple page](http://oit2.scps.nyu.edu/~devereld/flexnav/#cuisines). The UI is spare to keep things simple.

Let's examine the samples in `other/design-patterns` (these are non-trivial examples, you do not need to understand everything, just the basic concepts - static, fragments and SPA or single page application):

- `static/cuisines.html` - uses static HTML pages
- `fragments/index-spa-fragments` - a single page application with scrolling
- `spa/index-spa-js.html` - a single page application with JavaScript

All three approaches are valid and common. For pedagogical purposes we will be modeling our design after the last one - a single page application with JavaScript.

---

Add a link to `styles.css` in `index.html`:

```html
<link rel="stylesheet" href="css/styles.css" />
```

Add the following to index.html:

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

Try editing the start script to specify the port number:

```js
"scripts": {
  "start": "browser-sync start --port 1234 --server 'app' --files 'app'"
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
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Helvetica Neue", Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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

Add an `active` class to the first link in the HTML.

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

### Aside: Attribute Selectors

A selector can use HTML tag attributes. `nav .active` could be written `nav a[class="active"]` or just `[class="active"]`

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

Paste the following in the browser's console:

```js
var test = document.querySelector("a");
```

`document.querySelectorAll()` returns a collection (`nodeList`) of the items on the page:

```js
var test = document.querySelectorAll("a");
```

Inspect one of the listed boulevards to find `.mw-category` in the code.
Note: You can reference the currently selected element using `$0` in the console.

```js
var category = document.querySelector(".mw-category");
```

We can use our `category` variable as the basis for a more targeted query:

```js
var links = category.querySelectorAll("a");
```

Examine the methods on the resulting nodeList. Try `links.length` in the console.

Our nodeList looks like an array but isn't. Let's convert the nodeList into an Array:

```js
var linksArray = Array.from(links);
```

- Examine the methods on the resulting Array and compare them to the methods on a nodeList
- Examine one of the anchor tags from the resulting array in the console. Note the `textContent` property

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
var linkTextTwo = linksArray.map(function (link) {
  return link.textContent;
});
```

```js
var linkTextTwo = linksArray
  .map(function (link) {
    return `${link.textContent} is in paree`;
  })
  .join(" AND ");
```

<!-- Here's an alternative form of the same thing using an arrow function:

```js
var linkText = linksArray.map((link) => link.textContent);
```

Note that we use `=>` instead of the word `function`. Since we only have one variable, we could also remove the round braces:

```js
var linkText = linksArray.map((link) => link.textContent);
``` -->

Let's use another Array method, `filter`, to isolate only those boulevards that contain a specific string:

```js
var de = linkText.filter(function (streetName) {
  return streetName.includes("de");
});
```

<!-- Here's the same function as an arrow function:

```js
var de = linkText.filter((streetName) => streetName.includes("de"));
``` -->

## JavaScript Navigation

We will add an active class to the tabs when they are clicked on.

Link the empty JavaScript file to index.html.

`<script src="js/scripts.js"></script>`

Add to scripts.js:

```js
var tabs = document.querySelector("nav a");
console.log(tabs);
```

We need to use `querySelectorAll` because we are gathering more than one item:

```js
var tabs = document.querySelectorAll("nav a");
console.log(tabs);
console.log(tabs.length);
```

Now we need to attach an eventListener to each of the tabs. `addEventListener()` requires you to pass in a specific, individual element to listen to. You cannot pass in an array or node list of matching elements.

```js
var tabs = document.querySelectorAll("nav a");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", makeActive);
}

function makeActive(event) {
  console.log(event.target);
  event.preventDefault();
}
```

Since NodeLists have a forEach method we can also do this:

```js
tabs.forEach(function (tab) {
  tab.addEventListener("click", makeActive);
});
```

Using an Arrow function shortcut (for anonymous functions):

```js
tabs.forEach((tab) => tab.addEventListener("click", makeActive));
```

Let's use `classList` again to add a class to the link we click on:

```js
var tabs = document.querySelectorAll("nav a");

tabs.forEach((tab) => tab.addEventListener("click", makeActive));

function makeActive(event) {
  event.target.classList.add("active");
  event.preventDefault();
}
```

Lets remove the class from all tabs before we add it so that only one is active at a time:

```js
var tabs = document.querySelectorAll("nav a");

tabs.forEach((tab) => tab.addEventListener("click", makeActive));

function makeActive(event) {
  tabs.forEach((tab) => tab.classList.remove("active"));
  event.target.classList.add("active");
  event.preventDefault();
}
```

We can separate the class removal out into its own function and then call that function (`makeInactive();`):

```js
var tabs = document.querySelectorAll("nav a");

tabs.forEach((tab) => tab.addEventListener("click", makeActive));

function makeActive(event) {
  makeInactive();
  event.target.classList.add("active");
  event.preventDefault();
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}
```

<!--
clone the branch into a new folder
set up netlify:
https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/
view the main branch on Netlify
merge the inclass branch into master
commit and push
view the main branch on Netlify
-->

### Aside: Prettier

[Prettier](https://prettier.io/docs/en/index.html) is a code formatter.

Install the Prettier extension in VS Code.

`npm install -D prettier`

Create `.prettierrc` in the app folder.

```js
{
  "singleQuote": true,
  "trailingComma": "none",
  "semi": false
}
```

<!-- ```js
"scripts": {
	"format": "prettier --write \"./**/*.{js,html,css}\""
},
```

```sh
$ npm run format
``` -->

And test.

Note: you can also [add prettier preferences](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) in VS Code:

```js
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
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
  "<h1>Cuisines</h1> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.</p>";

var chefs =
  "<h1>Chefs</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.<p>";

var reviews =
  "<h1>Reviews</h1> <p>Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.</p>";

var delivery =
  "<h1>Delivery</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.</p>";
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

<!-- textContent -->

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
function makeActive(event) {
  console.log(event.target.href);
  makeInactive();
  event.target.classList.add("active");

  if (event.target.href.includes("chefs")) {
    contentPara.innerHTML = chefs;
  }

  event.preventDefault();
}
```

Expand the conditions:

```js
function makeActive() {
  makeInactive();
  event.target.classList.add("active");

  if (event.target.href.includes("cuisines")) {
    contentPara.innerHTML = cuisines;
  } else if (event.target.href.includes("chefs")) {
    contentPara.innerHTML = chefs;
  } else if (event.target.href.includes("reviews")) {
    contentPara.innerHTML = reviews;
  } else if (event.target.href.includes("delivery")) {
    contentPara.innerHTML = delivery;
  }

  event.preventDefault();
}
```

<!-- SWITCH https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch -->

In web development parlance this is something akin to what is known as a Single Page Application or "SPA".

The problem with what we've built might be termed _maintaining state_ and _routing_. If you refresh the browser while you are on the Reviews tab. The page reinitializes to show the Cuisines tab and content.

Not only is the refresh broken but the back and forward buttons don't work as expected either.

NB: we have a sneaky bug in our code. Everything works but `if (event.target.href.includes('cuisines'))` will _never_ be true. Can you correct it?

<!-- ANSWER
<li><a href="cuisines.html" class="active">cuisines</a></li> -->

## Event Delegation

Instead of listening for clicks on each individual tab:

`tabs.forEach(tab => tab.addEventListener('click', makeActive));`

We are going to use "event delegation."

Use:

```js
// tabs.forEach((tab) => tab.addEventListener("click", makeActive));
document.addEventListener("click", makeActive);
```

Everything works but try clicking on the paragraph and the yellow background.

We will use an if statement and the JavaScript "not" (`!`) operator to ensure that the user has clicked on a link in the navbar before running our code:

```js
function makeActive(event) {
  console.log(event.target);
  if (!event.target.matches("a")) return; // NEW
  makeInactive();
  event.target.classList.add("active");
  if (event.target.href.includes("cuisines")) {
    contentPara.innerHTML = cuisines;
  } else if (event.target.href.includes("chefs")) {
    contentPara.innerHTML = chefs;
  } else if (event.target.href.includes("reviews")) {
    contentPara.innerHTML = reviews;
  } else if (event.target.href.includes("delivery")) {
    contentPara.innerHTML = delivery;
  }
  event.preventDefault();
}
```

## Working with Objects

<!-- (See `other/OBJECTS.js` using Quokka in VS Code.) -->

```js
let obj = {
  a: 1,
  b: 2,
};

console.log(obj.a);

obj.c = 3;

delete obj.a;
```

Use `data-object.js` in `index.html`:

```js
const data = {
  cuisines:
    "<h1>Cuisines</h1> <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.</p>",

  chefs:
    "<h1>Chefs</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.<p>",

  reviews:
    "<h1>Reviews</h1> <p>Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.</p>",

  delivery:
    "<h1>Delivery</h1> <p>Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.</p>",
};
```

Reinitialize using "dot" accessor method - e.g. `data.cuisines`:

```js
contentPara.innerHTML = data.cuisines; // NEW
```

And use the accessor in the makeActive function:

```js
function makeActive() {
  if (!event.target.matches("nav ul a")) return;
  makeInactive();
  event.target.classList.add("active");
  if (event.target.href.includes("cuisines")) {
    contentPara.innerHTML = data.cuisines; // NEW
  } else if (event.target.href.includes("chefs")) {
    contentPara.innerHTML = data.chefs; // NEW
  } else if (event.target.href.includes("reviews")) {
    contentPara.innerHTML = data.reviews; // NEW
  } else if (event.target.href.includes("delivery")) {
    contentPara.innerHTML = data.delivery; // NEW
  }
  event.preventDefault();
}
...
contentPara.innerHTML = data.cuisines;
```

Our page is pretty fragile. Hitting refresh still displays the cuisines page and the back button doesn't work. Let's fix it by getting the page contents based on the address in the browser's address bar.

Remove the hardcoded active class in the HTML and replace it with:

```js
document.querySelector("nav a").classList.add("active");
```

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

Now we'll get the string from the URL using a bit of JavaScript [string manipulation](<(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)>):

```js
console.log(window.location);
var type = window.location.hash;
// var type = window.location.hash.substring(1);
console.log(type);
```

```js
function makeActive(event) {
  if (!event.target.matches("a")) return;
  makeInactive();
  event.target.classList.add("active");
  const type = window.location.hash.substring(1);
  contentPara.innerHTML = data[type];
}
```

Note the use of `data[type]` instead of `data.type.

```js
var funkyObject = {
  a: "testing",
  "not a variable": "but you can use it in an object",
};

console.log(funkyObject.a);
console.log( funkyObject.not a variable  ) // doesn't work
console.log(funkyObject["not a variable"]);
```

```js
var propertyToCheck = prompt("What do you want to get?");
console.log(propertyToCheck);
funkyObject.propertyToCheck; // doesn't work
funkyObject[propertyToCheck];
```

You have to click on the tab twice to get the right content although the active / inactive class switching works.

We can set the initial hash with `window.location.hash = 'cuisines'`

See [https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event](https://developer.mozilla.org/en-US/docs/Web/API/Window/hashchange_event)

And then use another event listener `hashchange`:

```js
var tabs = document.querySelectorAll("nav a");
var contentPara = document.querySelector(".content");

function makeActive(event) {
  if (!event.target.matches("nav a")) return;
  makeInactive();
  event.target.classList.add("active");
  const type = window.location.hash.substring(1);
  contentPara.innerHTML = data[type];
}

function makeInactive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}

function setContentAccordingToHash() {
  const type = window.location.hash.substring(1);
  contentPara.innerHTML = data[type];
}

function initializePage() {
  document.querySelector("nav a").classList.add("active");
  window.location.hash = "cuisines";
  setContentAccordingToHash();
}

document.addEventListener("click", makeActive);
window.addEventListener("hashchange", setContentAccordingToHash);

initializePage();
```

Now that we are using a hash we can look for it when the page loads and then derive a solution for the refresh button:

```js
function initializePage() {
  if (!window.location.hash) {
    window.location.hash = "cuisines";
    document.querySelector('[href="#cuisines"]').classList.add("active");
  } else {
    document
      .querySelector('[href="' + window.location.hash + '"] ')
      .classList.add("active");
  }
  setContentAccordingToHash();
}
```

Note the use of [attribute selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) and concatenation.

We'll replace our concatination with template strings (aka string literals).

```js
const name = "Yorik";
const age = 2;
const oldSchool =
  "My dog's name is " + name + " and he is " + age * 7 + " years old.";

const newSchool = `My dog's name is ${name} and he is ${age * 7} years old.`;
console.log("oldschool ", oldschool);
console.log("newschool ", newschool);
```

[Template Strings](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) use back ticks instead of quotes and have access to JS expressions inside placeholders - ${ ... }.

```js
.querySelector(`[href="${window.location.hash}"]`)
```

If we want to use the hash change to determine both the active tab and the content being displayed we can dispense with the click event listener. This also makes it easier to reset both the active state and content when the browers forward and back arrows are used:

```js
var tabs = document.querySelectorAll("nav a");
contentPara = document.querySelector(".content");

// when the hash changes
function setActiveTabAccordingToHash(type) {
  makeAllTabsInactive();
  var tabToActivate = document.querySelector(`a[href="#${type}"]`);
  tabToActivate.classList.add("active");
}

function makeAllTabsInactive() {
  tabs.forEach((tab) => tab.classList.remove("active"));
}

// runs on page load and whenever the hash changes
function setContentAccordingToHash() {
  var type = window.location.hash.substring(1);
  contentPara.innerHTML = data[type];
  setActiveTabAccordingToHash(type);
}

// only runs once on page load
function initializePage() {
  if (!window.location.hash) {
    window.location.hash = "cuisines";
    document.querySelector('[href="#cuisines"]').classList.add("active");
  }
  setContentAccordingToHash();
}

window.addEventListener("hashchange", setContentAccordingToHash);

initializePage();
```

<!-- ## Aside - Data Attributes

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
  ...
  let activePage = document.querySelector('.active');
  let storyRef = activePage.dataset.story;
  contentPara.innerHTML = data[storyRef];
}
```

## END -->

## An Array of Objects

This is an extremely common format for data to be sent from a server for use in a page.

```html
https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=uQG4jhIEHKHKm0qMKGcTHqUgAolr1GM0`;
https://pokeapi.co/api/v2/pokemon/
https://www.reddit.com/r/BudgetAudiophile.json
```

Examine `data-array.js`:

```js
const data = [
  {
    section: "cuisines",
    story:
      "Cuisines. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio maiores adipisci quibusdam repudiandae dolor vero placeat esse sit! Quibusdam saepe aperiam explicabo placeat optio, consequuntur nihil voluptatibus expedita quia vero perferendis, deserunt et incidunt eveniet temporibus doloremque possimus facilis.",
  },
  {
    section: "chefs",
    story:
      "Chefs. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.",
  },
  {
    section: "reviews",
    story:
      "Reviews. Asperiores laudantium, rerum ratione consequatur, culpa consectetur possimus atque ab tempore illum non dolor nesciunt. Neque, rerum. A vel non incidunt, quod doloremque dignissimos necessitatibus aliquid laboriosam architecto at cupiditate commodi expedita in, quae blanditiis.",
  },
  {
    section: "delivery",
    story:
      "Delivery. Possimus labore, officia dolore! Eaque ratione saepe, alias harum laboriosam deserunt laudantium blanditiis eum explicabo placeat reiciendis labore iste sint. Consectetur expedita dignissimos, non quos distinctio, eos rerum facilis eligendi.",
  },
];
```

An array is commonly used in conjunction with loops. We will loop through our data array and se an if statement in order to find a match for our type variable.

```js
function setContentAccordingToHash() {
  const type = window.location.hash.substring(1);
  for (var i = 0; i < data.length; i++) {
    if (data[i].section === type) {
      contentPara.innerHTML = data[i].story;
      setActiveTabAccordingToHash(type);
    }
  }
}
```

We could also use the array's `forEach` method instead of a for loop:

```js
function setContentAccordingToHash() {
  const type = window.location.hash.substring(1);
  data.forEach(function (item) {
    if (item.section === type) {
      contentPara.innerHTML = item.story;
      setActiveTabAccordingToHash(type);
    }
  });
}
```

I prefer a `for ... of` loop ([documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of)):

```js
function setContentAccordingToHash() {
  const type = window.location.hash.substring(1);
  for (var item of data) {
    if (item.section === type) {
      contentPara.innerHTML = item.story;
      setActiveTabAccordingToHash(type);
    }
  }
}
```

We can use a template string (string literal) to create HTML that uses both the section and story elements:

```js
if (item.section === type) {
  // contentPara.innerHTML = item.story
  contentPara.innerHTML = `<h2>${item.section}</h2> <p>${item.story}</p>`;
  setActiveTabAccordingToHash(type);
}
```

And finally, use an [event](https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event) to kick start our page:

```js
// initializePage()
document.addEventListener("DOMContentLoaded", initializePage);
```
