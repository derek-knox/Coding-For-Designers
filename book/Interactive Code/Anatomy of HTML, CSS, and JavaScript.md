## Anatomy of HTML, CSS, and JavaScript

This section will be the first where we really start digging into the existing languages of HTML, CSS, and JavaScript. We have covered quite a bit in an effort to get to this point. Specifically, we learned about the powerful concepts of binary and states in addition to encoding and decoding in the *Breaking Barriers* chapter. We learned in *Structure, Style, and Behavior* how each concept plays a valuable and distinct role in an interactive creation. In *Programming and Visual Design* we mapped familiar visual design concepts to programming concepts to help establish a knowledge bridge. More recently, we explored programming-specific concepts to help shape your understanding of how code lives and communicates in real-time.

We know code is a system for converting meaning between forms where HTML, CSS, and JavaScript are just specific forms. HTML is a markup language used to define structure. CSS is a style language used to define style. JavaScript is a programming language used to define behavior. The web browser knows how to decode HTML into divisions of content and render them. It also knows how to decode CSS property-value pairs to adorn the HTML elements with style and functionality. Lastly, we know a browser's runtime and engine understand how to decode and execute JavaScript which enables an interactive creation to exist.

We will now start to dig into HTML, CSS, and JavaScript since we have a greater understanding of how the various concepts we have covered play-off each other. Your mental model should be primed.

Let's squash a myth real quick first. Designers and other non-coders new to coding think they need to learn an *entire* new language including all its words, syntax, and idiosyncrasies. 
- Word - you know what a word is
- Syntax - language-specific rules of meaningful word and character patterns
- Idiosyncrasies - exceptions to rules

In the context of the web, that would mean *three* sets need to be learned. There is a better way to spend time and energy learning however. What really needs to be learned is:
1. Distinction between structure, style, and behavior
2. Common syntax subset of each structure, style, and behavior language
3. Common words subset of each language (80/20 rule)

For 2D and the web, that means we need to know the difference between HTML structure, CSS styling, and JavaScript behavior. We have this distinction covered already. Bonus. Let's dig into number two and three. Learning these two subsets for each language may not be easy, but it can be simple. In fact HTML and CSS have a simpler learning curve compared to JavaScript. As such, I will briefly cover the former and let other resources guide you following this chapter. For JavaScript however, the next chapter *80/20 JavaScript* will be your go-to guide. Regardless, there is no substitue for practice.

### HTML

In keeping with the structure, style, and behavior order, let's look at the anatomy of each starting with HTML. We will title our file `index.html` to align with a best practice naming convention. Technically you can name it anything your OS allows, but make it easier on yourself and follow this best practice.

```markup
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Coding for Designers</title>
  </head>
  <body>Content goes here.</body>
</html>
```

This is the most structurally simple, complete, and valid HTML a browser uses. Let's walk through each tag using *comments* to clarify each tag's purpose. We saw earlier that JavaScript uses the `//` character sequence for comments. HTML uses the `<!---->` sequence where the actual comment rests in the middle of the dashes. Just take note that each language may have a uniqe approach to comments, but the purpose is the same. Yes, it would be ideal if all languages used the same character sequence for denoting comments. It's not a perfect world. Sad face.

```markup
<!-- Tell the browser the document type - we only care about html -->
<!DOCTYPE html>

<!-- Tell the browser where we've defined our html - additional data exists outside it -->
<html>

  <!-- Define the page metadata - useful data for the browser, other programs, and search engines -->
  <head>
  
    <!-- Define the character encoding - inform the browser how to reliably decode this document -->
    <meta charset="utf-8">
    
    <!-- Define the page title - useful for the browser, other programs, and search engines -->
    <title>Coding for Designers</title>
  
  <!-- Define the page metadata end -->
  </head>
  
  <!-- Define the page content - what gets rendered for viewing and user interaction -->
  <body>Content goes here.</body>

<!-- Define the html end -->
</html>
```

There are many types of element tags that can be added in both the `<head>` and `<body>` element tags. As mentioned earlier, we will not go over them here as you, just like other coders, can use other resources to look up what tags are available. We will reveal the most common ones for the `<body>` however to fulfill the *common subset* bullet above. Instead of comments I will use English inline with the tags to show how the elements wrap content. Content is visible to the user where the tags that wrap the content are not. The tags simply tell the browser your structure, the building block parent-child relationships. The spacing *between elements* is not important as the browser understands the structure regardless. Spacing *between content* is what matters.

Spacing, tabs, and new lines do typically exist between elements however. This is solely to improve human readability. Imagine if the below HTML elements were all on a single line. The browser wouldn't care as the defined structure would remain the same (thanks to the opening and closing HTML tags), but we would have a much tougher time reading and easily seeing the parent-child relationships when authoring.

```markup
<body>
  <div>
    <h1>This is the Primary Title of the Page</h1>
    <p>This is a paragraph. It is followed by an image and a button.</p>
    <img>
    <button>Toggle Image Opacity</button>
  </div>
  <div>
    <h2>This is a Secondary Title</h2>
    <p>This is another paragraph. It has a <a>hyperlink</a>.</p>
  </div>
</body>
```

The first thing you will notice about six of the seven tags is that they are abbreviations, they are shortcuts. This admitedly sucks for beginners, but it is great for when you know the small subset by heart. You will learn it quickly, but it still is lame from a beginner perspective. Here's a breakdown to help:

![HTML Tags Subset Map](../assets/img/visual-todo-placeholder.jpg?v1.11 "HTML Tags Subset Map")

<table>
  <tr>
    <td>`div`</td>
    <td>division</td>
  </tr>
  <tr>
    <td>`h1`</td>
    <td>heading one</td>
  </tr>
  <tr>
    <td>`p`</td>
    <td>paragraph</td>
  </tr>
  <tr>
    <td>`img`</td>
    <td>image</td>
  </tr>
  <tr>
    <td>`button`</td>
    <td>button</td>
  </tr>
  <tr>
    <td>`h2`</td>
    <td>heading two</td>
  </tr>
  <tr>
    <td>`a`</td>
    <td>hyperlink</td>
  </tr>
</table>

A `<div>` tag simpy denotes a division of content where the aesthetic and layout (position and dimension) of each division is dependent on style. This will likely become your most used element tag. Combining it with the virtually infinite variations of CSS styling enables you to create the same visual effect of virtually every other tag. If not for the specific *attributes* and *semantics* of certain tags that browsers, operating systems, and search engines use, we could almost get away with solely using `<div>`s with custom styles. I mention this to illustrate that a lot can be achieved with little.

Moving on, the `<h1>`, `<p>`, `<button>`, and `<h2>` tags are explained and covered with in the inline examples above. The `<img>` and `<a>` tags are not however. This is because they are each lacking *attributes*. We'll use the shortcut *attrs* moving forward. All elements can leverage attrs, but these latter two elements *require* them to function as designed.

Think of attrs as APIs. Attrs enable the coder to achieve functionality based on a shared understanding of designed use. They are also where we start to transition toward CSS via the `class` attr. First we will update the `<img>` and `<a>` tags with each of their most useful attrs.

So `<img>` becomes `<img src='assets/img/cover-coding-for-designers.jpg'>` where the `src` attr is set with `=` to the value `assets/img/cover-coding-for-designers.jpg` between quotes. Quotes define the start and end of the attr value. The browser knows how the image tag is designed to work so its runtime APIs automatically download the image provided by the `src` attr, which is the path to the asset. Upon completion of the download, the tag embodies the downloaded image. This same functionality can be achieved using JavaScript only, but we'd have to write more code. Remember, APIs provide a tradeoff and a simpler way to do work.

Additionally, `<a>hyperlink</a>` becomes `<a href='http://www.codingfordesignersbook.com'>hyperlink</a>` where the `href` attr is set with `=` to the value `http://www.codingfordesignersbook.com` between quotes. The browser knows that the anchor tag, when hit, should change the web page to the value provided. This same functionality can be achieved using JavaScript only, but we'd have to write more code. Again, the goal is a simpler way to do work.

The takeaway is that the browser provides useful runtime API hooks via element attrs. Now that we've covered the basic implementation of HTML structure, let's dig into style. Welcome to the `class` attr.

### CSS

The `class` attr gives you the creative power to style content. We will start by giving each `<div>` the same style. So `<div>` becomes `<div class='dark-background'>` where the `class` attr is set with `=` to the value `dark-background` between quotes. The `dark-background` name could be virtually anything we want, but there are rules for valid names. Make it easier on yourself and stick with:
- Lowercase English alphabet characters
- Use `-` instead of spaces

Now that we have set a `dark-background` value for the `class` attr, how do we actually define the style for the browser to render it? Remember when I mentioned that other tags can be added to the `<head>`? Welcome to the `<link>` tag. It allows us to link another file to our web page. Perfect. Our updated `<head>` is below and it now has a `<link>` tag. The attrs of it tell the browser to download and use a CSS file where our defined `dark-background` style resides.

```markup
<head>
  <meta charset="utf-8">
  
  <!-- 'rel' defines the href relationship type - 'href' defines the hyperlink reference -->
  <link rel="stylesheet" href="assets/css/style.css">
  
  <title>Coding for Designers</title>
</head>
```

The folder structure on the server computer that is providing these files to client computers is below. Take note that a lacking file extension means the item is a folder. The *relative* paths of the `<link>`'s `href` attr value and the `<img>`'s `src` attr value rely on the structure below. These relative paths, relative to the `index.html` that is, tell the browser exactly where to find the file to use.

```markup
index.html
assets
  css
    style.css
  img
    cover-coding-for-designers.jpg
```

Now is the time to look at the anatomy of a `.css` file which, for our purpose, consists of one class definition. Typically the file would have more than one, but currently we only need one. Take note that CSS uses *comments* via `/**/` where the comment itself resides in the middle. I too wish HTML, CSS, and JavaScripot shared the same comment syntax, but I digress. Our `style.css` file is simply:

```css
.dark-background {

  /* This is a CSS comment - the below property-value pair sets an element's background color to black */
  background-color: #000000;
  
}
```

Each class definition is denoted by a preceding `.` so our `dark-background` class becomes `.dark-background` within our `.css` file. Then, similar to the JavaScript scope concept we visited earlier, the property-value pairs are defined between the `{` and `}` characters. The `{` and `}` define the scope, the space and enclosure, where one or more property-value pairs are associated with a particular class.

Each property-value pair consists of a property name that uses the same rules for class naming suggested above, followed by a `:` and then an actual value. For ease of learning, I wish the `:` was `=` instead, but I digress. With a class and its valid property-value pair(s) defined, any element that has a `class` by the same name will get the styles applied. Pretty damn cool and very reusable.

If it isn't already obvious, each browser sets *default styles* as a baseline. Without default styles we would see nothing until we provided our own. So browser's provide defaults so we at least can render something before starting to customize. Think of default styles as a `browser-specific-style.css` that the browser provides each page behind the scenes. Defaults apply style based on element type instead of by the `class` attr however. More often than not, you'll want to set your own styles to override these defaults. This is exactly why we created `style.css`.

Since browsers typically default the color of text to black, our applied `dark-background` class makes our text blend with the dark background. We want to see the text too so we can fix this by updating our class definition to use another common property named `color`. Again, we won't go over all the valid properties that are possible as you, like other coders and designers, can reference resources. The takeaway is the relationship of property-value pairs within class definitions. Here is one approach to update our `style.css` file:

```css
.dark-background {
  background-color: #000000;
  color: #ffffff;  
}
```

Another approach could be:

```css
.dark-background {
  background-color: #000000;
}

.light-text {
  color: #ffffff;
}
```

Our `<div>`s would need to be updated for the second solution. Take note that spaces are used between class names to enable more than one class style to be applied to a single element. This is a very powerful aspect of CSS, one which you will grasp more intuitively in time. Updated HTML using the second solution is below:

```markup
<div class='dark-background light-text'>
```

With either solution, both our `<div>`s will have dark backgrounds and the text within them will be light. You might wonder how the text of the child elements can be light without explicitly setting styles on them. This is where the *cascading* part of cascading style sheets comes in. Think of cascading as style inheritence. Long story short, a majority of property-value styles can be inherited regardless of nested element depth. Cascading is extremely powerful and you will learn its nuances in time.

As a creation evolves, feel free to change the names of classes if it makes sense to. A class name may make less sense as new property-value pairs are added or removed. Over time you will leverage established naming practices and develop your own to gain an intuitive feel of when to update a name. Additionally, you'll develop a sense of how best to group certain property-value pairs for reuse by different elements. Just know that it is extremely common to change names as a creation evolves.

### JavaScript

Thus far we've covered the anatomy of HTML and CSS, so now it is time for JavaScript. In a way we already looked at the anatomy of JavaScript in the *Elements and Elements* section. That breakdown was a bit more granular though and we'll revisit the specifics in the next chapter *80/20 JavaScript*. For now we will look at the high level anatomy of a JavaScript program. We will focus on shape, space, and form or more precisely function, scope, and object.

As you already know, a function is like a shape because it encloses scope just as a shape encloses space. An enclosure helps prevent clashing of what exists between different scopes or spaces. No clashing please. Objects, like forms, are a higher level enclosure. More often than not, they each embody one or more functions or shapes respectively. JavaScript, like the majority of programming languages, has specific *types* of objects. JavaScript is fairly unique however in that a function is *also* an object.

Long story short, at execution time, a JavaScript program is a nested tree of functions. As a byproduct of functions each enclosing a scope, a JavaScript program can also be thought of as a nested tree of scopes. What is interesting is that the tree changes. This occurs because the stack of functions grows and shrinks over time.

![TODO - Execution Time Tree](../assets/img/visual-todo-placeholder.jpg?v1.11 "TODO - Execution Time Tree")

When the JavaScript engine evaluates an expression that has a reference (shortcut name for a value), it works like this in an effort to get the bound value:
1. Look in this function's scope for the reference
2. If not found, look in that scope's parent scope
3. Repeat until the reference is found or the root parent scope is hit

When the reference is found in one of the scopes, the engine uses the value that is bound to the reference and continues to do work. This is what we want. If the root scope is hit and the value does not exist, then we have a problem. We will go into detail later regarding this scenario, so just be aware of it.

Now that we know the anatomy of a JavaScript program is simply a nested tree of scopes, let's add a simple example based on this section's HTML and CSS examples. As you might imagine, HTML has a tag that allows us to add JavaScript just as easily as we added CSS. Welcome to the `<script>` tag. You can add a `<script>` tag to the `<head>` or the `<body>`, but the latter is best practice for non-blocking reasons. Specifically, `<script>` tags should reside just before the closing body, the `</body>`. Here is an updated excerpt from our `index.html` file.

```markup
    <!-- The previous HTML code from our index.html file is excluded for brevity -->
    <script src='assets/js/main.js'></script>
</body>
```

Naturally, the server folder structure needs the path to our `main.js` so our updated structure becomes:

```markup
index.html
assets
  css
    style.css
  img
    cover-coding-for-designers.jpg
  js
    main.js
```

The browser understands the script tag and its `src` attr and then, you guessed it, the browser automatically downloads it. When completely downloaded, the runtime and engine take over with compilation and execution of its contents. Before we look at the contents of our `main.js` file, let's update our `<img>` and `<button>` HTML to more easily use each with JavaScript.

The updated `<img>` becomes:

```markup
<img id='image-to-toggle' src='assets/img/cover-coding-for-designers.jpg'></img>
```

The updated `<button>` becomes:

```markup
<button onclick='toggleImageOpacity()'>Toggle Image Opacity</button>
```

The `id` attr is how we identify an element in our HTML as unique to our document. An id means we intend there to be only one element with a specific name. A unique id enables us to gain a reference to the element's corresponding object for use in JavaScript. With this JavaScript reference we can use its API to do all sorts of cool things.

The result of clicking the button above during execution time results in the function named `toggleImageOpacity` to be called via `()`. This results in the function's contents being executed by the engine. Behind the scenes, the runtime APIs transform the hardware input (mouse, trackpad, stylus, touch, etc.) to event queue work. The event loop then picks up the resulting package and it gets placed on the stack. This all happens in milliseconds or even microseconds when the event loop is not blocked. Lastly, the engine actually executes the function contents. Now is a great time to look at the contents residing in our `main.js` file.

```javascript
function toggleImageOpacity() {

  // Reference work
  var imageToToggle = document.getElementById('image-to-toggle');
  var currentOpacity = window.getComputedStyle(imageToToggle).opacity;
  
  // Core work
  if(currentOpacity == 1) {
    imageToToggle.style.opacity = .5;
  } else {
    imageToToggle.style.opacity = 1;
  }
  
}
```

Do not worry if you cannot understand everything in the above function as we'll cover it in great detail in the next section. You should however be able to grasp what is happening each time the `toggleImageOpacity` function executes. The image's opacity style is simply toggled between `.5` (50%) and `1` (100%). Take note that the function is structured in two parts:
1. Reference work
2. Core work

A function is not always structed this way by a coder, but JavaScript compilation essentially enforces it. We don't go into the details of compilation as previously mentioned, but look into *JavaScript hoisting* if you want to dig deeper. Just save yourself some pain and declare your identifiers (`var`s first and `function`s second) at the top of their parent function prior to use.

Admittedly, this program is tiny as it is comprised of only one small function. Take note however that programs of all sizes leverage this structure since they are just functions nested in functions. And consequently scopes nested in scopes. We will consider larger programs later in the *80/20 JavaScript* chapter to see this in action.

Before advancing to the next chapter though, we'll dive really deep into the `toggleImageOpacity` function. The function *works*, but we can *improve* it.
