# Anatomy of a Source Code File

This section will be the first where we really start digging into the existing languages of HTML, CSS, and JavaScript. We have covered quite a bit in an effort to get to this point. Specifically, we learned about the powerful concepts of binary and states in addition to encoding and decoding in the Breaking Barriers chapter. We learned in Structure, Style, and Behavior how each layer plays a valuable and distinct role in an interactive creation. In Coding and Visual Design, we mapped familiar design-specific concepts to coding concepts to help establish a knowledge bridge. More recently, we introduced programming-specific concepts to help shape your understanding of how code lives and communicates in real-time.

We know code is a system for converting meaning between forms and HTML, CSS, and JavaScript are just specific forms. The web browser knows how to decode HTML into divisions of content and render them. It also knows how to decode CSS property-value pairs to adorn the HTML elements with style and functionality. Lastly, we know a runtime and engine understand how to decode and execute JavaScript which enables a living and interactive creation to exist.

We will now start to dig into HTML, CSS, and JavaScript since we have a greater understanding of how the various concepts we have covered play-off each other. Your mental model should be primed.

Let's squash a myth real quick. Designers and other non-coders new to coding think they need to learn an entire new language, and in the context of the web, *three* new languages. This is not true. What needs to be learned is the:
1. distinction between structure, style, and behavior
2. anatomical implementation of structure, style, and behavior
3. common subset of code words for each implementation

For 2D and the web, that means we need to know the difference between HTML structure, CSS styling, and JavaScript behavior. We have this distinction covered. Let's dig into number two and three.

In keeping with the structure, style, and behavior order, let's look at the anatomy of each file type starting with HTML which uses the `.html` file extension. Our file is titled `index.html` to align with a best practice naming convention.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Coding for Designers Page</title>
  </head>
  <body>Content goes here.</body>
</html>
```

This is the most structurally simple, complete, and valid HTML a browser uses. Let's walk through each tag using *comments* to clarify each tag's purpose. We saw earlier that JavaScript uses the `//` character sequence for comments. HTML uses the `<!---->` sequence where the actual comment rests in the middle of the dashes. Just take note that each language may have a uniqe approach to comments, but the purpose is the same. Yes, it would be ideal if they were all the same.

```
<!-- Tell the browser the document type - we only care about html -->
<!DOCTYPE html>

<!-- Tell the browser where we've defined our html - additional data exists outside it -->
<html>

  <!-- Define the page metadata - useful data for the browser, other programs, and search engines -->
  <head>
  
    <!-- Define the character encoding - inform the browser how to reliably decode this document -->
    <meta charset="utf-8">
    
    <!-- Define the page title - useful for the browser, other programs, and search engines -->
    <title>Coding for Designers Page</title>
    
  </head>
  
  <!-- Define the page content - what gets rendered for viewing and interacting -->
  <body>Content goes here.</body>
  
</html>
```

There are many types of element tags that can be added in both the `<head>` and `<body>` element tags. As mentioned earlier, we will not go over them here as you, just like other coders, can use other resources to dig deeper. We will reveal the most common ones for the `<body>` however to fulfill the *common subset* bullet above. Instead of comments I will use English inline with the tags to show how the elements wrap content. The content is visible to the user where the tags that wrap the content are not. Remember the tags simply tell the browser your content structure. As a result the spacing between elements is not important, the browser understands the structure regardless. Spacing within content is what matters.

```
<body>
  <div>
    <h1>This is the Primary Title of the Page</h1>
    <p>This is a paragraph. It usually has more sentences. This paragraph has only three.</p>
    <button>Push Me</button>
  </div>
  <div>
    <h2>This is a Secondary Title</h2>
    <p>This is another paragraph. It has two sentences, contains a <a>hyperlink</a>, and is followed by an image.</p>
    <img></img>
  </div>
</body>
```

A `<div>` tag simpy denotes a division of content where the layout of each division is dependent on style. This will likely become your most used element tag. The `<h1>`, `<p>`, `<button>`, and `<h2>` tags are self-expanatory, but the `<a>` and `<img>` tags are less so. This is because they are each lacking *attributes*. We'll use the shortcut *attrs* moving forward. All elements can leverage attrs, but these latter two elements require them to function as designed.

Think of attrs as APIs. Attrs enable the coder to achieve functionality based on a shared understanding of designed use. They are also where we start to transition toward CSS via the `class` attr. First we will update the `<a>` and `<img>` tags with each of their most useful attrs to attain the desired functionality.

So `<a>hyperlink</a>` becomes `<a href='http://www.codingfordesignersbook.com'>hyperlink</a>` where the `href` attr is set with `=` to the value `http://www.codingfordesignersbook.com` between quotes. The browser knows that the anchor tag, when hit, should change the web page to the value provided. This same functionality can be achieved using JavaScript only, but we'd have to write more code. Remember, APIs provide a tradeoff and a simpler way to do work.

Additionally, `<img></img>` becomes `<img src='assets/img/cover-coding-for-designers.jpg'></img>` where the `src` attr is set with `=` to the value `assets/img/cover-coding-for-designers.jpg` between quotes. The browser knows how the image tag is designed to work, so it automatically downloads the image provided by the `src` attr, which is the path to the asset. Upon completion of the download, the tag embodies the downloaded image. This same functionality can be achieved using JavaScript only, but we'd have to write more code. Again, the goal is a simpler way to do work.

The takeaway is that the browser provides useful APIs via attrs applied to elements. Now that we've covered the basic implementation of HTML structure, let's dig into style. Welcome to the `class` attr.

The `class` attr gives you the creative power to style content. We will start by giving each `<div>` the same style. So `<div>` becomes `<div class='dark-background'>` where the `class` attr is set with `=` to the value `dark-background`. The `dark-background` name value could be virtually anything we want but there are rules for valid names. Make it easier on yourself and stick with:
- lowercase English characters
- use `-` instead of spaces

Now that we have set a `dark-background` value for the `class` attr, how do we actually define the style for the browser to render it? Remember when I mentioned that other tags can be added to the `<head>`? There is a `<link>` tag that allows us to link another file to our web page. Perfect. Our updated `<head>` is below and it now has a `<link>` tag. The attrs of it tell the browser to download and use a CSS file where our defined styles reside, including `dark-background`.

```
<head>
  <meta charset="utf-8">
  
  <!-- rel defines the href relationship type - href defines the hyperlink reference -->
  <link rel="stylesheet" href="assets/css/style.css">
  
  <title>Coding for Designers Page</title>
</head>
```

The folder structure on the server computer that is providing these files to client computers is below. Take note that a lacking file extension means the item is a folder. The *relative* paths of the `<link>`'s `href` attr value and the `<img>`'s `src` attr value rely on the structure below. These relative paths, relative to the `index.html` that is, tell the browser exactly where to find the file to use.

```
index.html
assets
  css
    style.css
  img
    cover-coding-for-designers.jpg
```

Now is the time to look at the anatomy of a `.css` file which, for our purpose, simply consists of one or more class definitions. Our `style.css` file is simply:

```
.dark-background {

  /* This is a CSS comment - the below property-value pair sets an element's background color to black */
  background-color: #000000;
  
}
```

Each class definition is denoted by a preceding `.` so our `dark-background` class becomes `.dark-background` within our `.css` file. Then, similar to the JavaScript scope concept we visited earlier, the property-value pairs are defined between the `{` and `}` characters. The `{` and `}` define the scope, the space and enclosure, where one or more property-value pairs are associated with a particular class.

Each property-value pair consists of a property name that uses the same rules for class naming suggested above, followed by a `:` and then an actual value. With a class and its valid property-value pairs defined, any element that has a `class` by the same name will get the styles applied. Pretty cool and very reusable.

Since browsers typically default the color of text to black, our applied `dark-background` class makes our text blend with the dark background. We want to see the text too so we can fix this by updating our class definition to use another common property named `color`. Again, we won't go over all the valid properties that are possible as you, like other coders, can reference resources. The takeaway is the relationship of property-value pairs within class definitions. Here is one approach to update our `style.css` file:

```
.dark-background {
  background-color: #000000;
  color: #ffffff;  
}
```

Another approach could be:

```
.dark-background {
  background-color: #000000;
}

.light-text {
  color: #ffffff;
}
```

Our `<div>`s would need to be updated for this second solution. Take note that spaces are used between class names to enable more than one class style to be applied. This is a very powerful aspect of CSS, one which you will grasp more intuitively in time. Updated HTML using this second solution is below:

```
<div class='dark-background light-text'>
```

With either solution, both our `<div>`s will have dark backgrounds and the text within them will be light. You might wonder how the text of the child elements can be white without explicitly setting styles on them. This is where the *cascading* part of cascading style sheets comes in. Think of cascading as style inheritence. Cascading is extremely powerful and you will learn its nuances in time.

As a creation evolves, feel free to change the names of classes if it makes sense to. A class name may make less sense as new property-value pairs are added or removed. Over time you will leverage established naming practices and/or develop your own to gain an intuitive feel of when to update a name. Additionally, you'll develop a sense of how best to group certain property-value pairs. Just know that it is extremely common to change names as a creation evolves.

Thus far we've covered the anatomy of HTML and CSS, so now it is time for JavaScript. In a way we already looked at the anatomy of JavaScript in the *Elements and Elements* section. That breakdown was a bit more granular and we'll revisit the specifics in the next chapter *Coding and JavaScript*. For now we will look at the high level anatomy of a JavaScript file. We will focus on shape, space, and form or more precisely function, scope, and object.

As you already know, a function is like a shape because it encloses scope just as a shape encloses space. An enclosure helps prevent clashing of what exists between different scopes or spaces. No clashing please. Objects, like forms, are a higher level enclosure. More often than not, they each embody one or more functions or shapes respectively. JavaScript, like most programming languages has specific types of objects. JavaScript is really unique in that a function is *also* an object. This may seem odd at first, but the idea is beneficial when considering the importance of scopes.

Long story short, a JavaScript program is essentially a nested tree of functions. As a by-product of functions each enclosing a scope, a JavaScript program can also be thought of as a nested tree of scopes. So when the JavaScript engine executes a particular line of code that has a reference to a value, it works like this in an effort to get the actual value:
1. look in the target scope for the reference
2. if not found, look in that scope's parent scope
3. repeat until the root parent scope is hit

When the reference is found in one of the scopes, the engine uses the referenced value and continues to do work. This is what we want. If the root scope is hit and the value does not exist, then we have a problem. We will go into detail later regarding this scenario, so just be aware of it.

Now that we know the anatomy of a JavaScript program is simply a nested tree of scopes, let's add a simple example based on this section's HTML and CSS examples. As you might imagine, HTML has a tag that allows us to add JavaScript just as easily as we added CSS. Welcome to the `<script>` tag. You can add a `<script>` tag to the `<head>` or the `<body>`, but the latter is best practice. Specifically, `<script>` tags should reside just before the closing body, the `</body>`. Here is an updated excerpt from our `index.html` file.

```
    <!-- The previous HTML code from our index.html file is excluded for brevity -->
    <script src='assets/js/main.js'></script>
</body>
```

Naturally, the server folder structure needs the path to our `main.js` so our updated structure becomes:

```
index.html
assets
  css
    style.css
  img
    cover-coding-for-designers.jpg
  js
    main.js
```

The browser understands the script tag and its `src` attr and then, you guessed it, the browser automatically downloads it. When completely downloaded, the runtime and engine take over with compilation and execution. Before we look at the contents of our main.js file, let's update the `<button>` HTML to more easily use it with JavaScript. Now, with two added attrs, it looks like this:

```
<button id='toggle-button' onclick='toggleOpacity()'>
```

The `id` attr is how we identify an element in our HTML as unique to our document. An id means we intend there to be only one element with a specific name. A unique id enables us to gain a reference to the element that it is attached to via JavaScript. With this element reference in JavaScript, we can use its API to do all sorts of things.

The result of clicking the `toggle-button` button during run-time results in the function named `toggleOpacity` to be called via `()`. This results in the function's contents being executed by the engine. Behind the scenes, the runtime APIs transform the hardware input (mouse, trackpad, stylus, touch, etc.) to event queue work. The event loop then picks up the resulting package and it gets placed on the stack. This all happens in milliseconds or even microseconds when the event loop is not blocked. Lastly, the engine actually executes the function contents. Now is a good time to look at those contents.

```
function toggleOpacity() {
  var toggleButton = document.getElementById('toggle-button');
  var currentOpacity = toggleButton.style.opacity;
  if(currentOpacity === 1) {
    toggleButton.style.opacity = .5;
  } else {
    toggleButton.style.opacity = 1;
  }
}
```


