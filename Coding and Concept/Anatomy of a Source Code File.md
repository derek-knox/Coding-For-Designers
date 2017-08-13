# Anatomy of a Source Code File

This section will be the first where we really start digging into the existing languages of HTML, CSS, and JavaScript. We have covered quite a bit in an effort to get to this point. Specifically, we learned about the useful concepts of encoding and decoding in the Breaking Barriers chapter. We learned in Structure, Style, and Behavior how each plays a valuable and distinct role in an interactive creation. In Coding and Visual Design, we mapped design-specific concepts to coding concepts to help establish a frame of reference. More recently, we introduced programming-specific concepts to help shape your understanding of how code can live and communicate in real-time.

We know code is a system for converting meaning between forms and HTML, CSS, and JS are just specific forms. The web browser knows how to decode HTML into divisions of content and render them. It also knows how to decode CSS property-value pairs to adorn the HTML elements with style. Lastly, we know a runtime and engine understand how to decode and execute JavaScript which enables a living and interactive creation to exist.

We will now start to dig into HTML, CSS, and JavaScript since we have a greater understanding of how the various concepts we have covered play-off each other. Your mental model should be primed.

Let's squash a myth real quick. Designers and other non-coders new to coding think they need to learn an entire new language, and in the context of the web, *three* new languages. This is not true. What needs to be learned is:
1. structure, style, and behavior concepts
2. anatomical implementation of each concept
3. common subset of code words for each implementation

For 2D and the web, that means we need to know the difference between HTML structure, CSS styling, and JavaScript behavior. Number one is covered. Let's dig into number two and three.

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

This is the most structurally simple and valid HTML a browser uses. Let's walk through each tag using *comments*. We saw earlier that JavaScript uses the `//` character sequence for comments. HTML uses the `<!---->` sequence where the actual comment rests in the middle of the dashes. Just take note that each language may have a uniqe approach to comments, but their purpose is the same. 

```
<!-- Tell the browser the document type, we only care about html -->
<!DOCTYPE html>

<!-- Tell the browser where we've defined our html, additional data could be outside it -->
<html>

  <!-- Define the page metadata, useful data for the browser, other programs, and search engines -->
  <head>
  
    <!-- Define the character encoding, ensures browser knows how to read the characters -->
    <meta charset="utf-8">
    
    <!-- Define the page title, useful for the browser, other programs, and search engines -->
    <title>Coding for Designers Page</title>
    
  </head>
  
  <!-- Define the page content, what gets rendered for users to see and interact with -->
  <body>Content goes here.</body>
  
</html>
```

There are many types of tags that can be added in both the `<head>` and the `<body>`. As mentioned earlier, we will not go over them here as you, just like other coders, can use other resources to dig deeper. We will reveal the most common ones for the `<body>` however to fulfill the *common subset* bullet above. Instead of comments I will just use English inline with tags to show how the elements wrap content. The content is visible to the user where the tags that wrap it are not. Remember the tags simply tell the browser your content structure. As a result the spacing between elements is not important, the browser understands the structure regardless. Spacing within content is what matters.

```
<body>
  <div>
    <h1>This is the Primary Title of the Page</h1>
    <p>This is a paragraph. It usually has more sentences. This paragraph has only three.</p>
    <button>Push Me</button>
  </div>
  <div>
    <h2>This is a Secondary Title</h2>
    <p>This is another paragraph. It only has two sentences, but it also has a <a>hyperlink</a>.</p>
    <img></img>
  </div>
</body>
```

A `<div>` tag simpy denotes a division of content where the layout of each division is dependent on style. This will likely become your most used element tag. The `<h1>`, `<p>`, `<button>`, and `<h2>` tags are self-expanatory, but the `<a>` and `<img>` tags are less so. This is because they are each lacking *attributes*. We'll use the shortcut *attrs* moving forward. All elements can leverage attrs, but these latter two elements require them to function as designed.

Think of attrs as APIs. Attrs enable the coder to achieve functionality based on a shared understanding of designed usage. They are also where we start to transition toward CSS with the `class` attr. First we will update the `<a>` and `<img>` tags with each of their most useful attrs to attain the desired functionality.

So `<a>hyperlink</a>` becomes `<a href='http://www.codingfordesignersbook.com'>hyperlink</a>` where the `href` attr is set with `=` to the value `http://www.codingfordesignersbook.com`. The browser knows that the anchor tag, when hit, should change the web page to the value provided. This same functionality can be achieved using JavaScript only, but we'd have to write more code. Remember, APIs provide a tradeoff and a simpler way to do work.

Additionally, `<img></img>` becomes `<img src='assets/img/cover-coding-for-designers.jpg'></img>` where the `src` attr is set with `=` to the value `assets/img/cover-coding-for-designers.jpg`. The browser knows that the image tag, when read by the browser, should automatically download the image at the provided `src` or source path value. Upon completion of the download, the tag embodies the downloaded image. This same functionality can be achieved using JavaScript only, but we'd have to write more code. Again, a simpler way to do work.

The takeaway is that the browser provides useful APIs via attrs applied to elements. Now that we've covered the basic implementation of HTML structure, let's dig into style. Welcome to the `class` attr.

The `class` attr gives you the power to style content, to give it a look and feel. Let's for example give each `<div>` the same style. So `<div>` becomes `<div class='black-background'>` where the `class` attr is set with `=` to the value `black-background`. The `black-background` name value could be virtually anything we want but there are rules for valid names. Make it easier on yourself and stick with:
- lowercase English characters
- use `-` instead of spaces between words.

Now that we have set a `black-background` value for the `class` attr, how do we actually set the style for it? Remember that I mentioned other tags can be added to the `<head>`? Specifically, there is a `<link>` tag that allows us to link another file to our web page. Perfect. Our updated `<head>` is below and it now has a `<link>` tag. The attrs of it tell the browser to download and use a CSS file where our defined styles, including `black-background`, reside.

```
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="assets/css/style.css">
  <title>Coding for Designers Page</title>
</head>
```

The folder structure on the server computer that is providing these files to client computers is below. Take note that a lacking file extension means the item is a folder. The *relative* paths of the `<link>`'s `href` attr value and the `<img>`'s `src` attr value rely on the structure below. These relative paths tell the browser exactly where to find the file to use.

```
index.html
assets
  css
    style.css
  img
    cover-coding-for-designers.jpg
```

Now is the time to look at the anatomy of a `.css` file which, for our purpose, simply consists of one or more class definitions. Our `style.css` file is:

```
.black-background {

  /* This is a CSS comment, the below property-value pair sets an element's background color to black */
  background-color: '#000000';
  
}
```

Each class definition is denoted by a preceding `.` so our `black-background` class becomes `.black-background` within our `.css` file. Then, similar to the JavaScript scope concept we visited earlier, the property-value pairs are defined between the `{` and `}` characters. The `{` and `}` define the scope, the space and enclosure, where one or more property-value pairs are associated with a particular class.

Each property-value pair consists of a property name, which uses the same rules for class naming suggested above, followed by a `:` and the actual value within `'` and `'`. With this class and its valid property-value pairs defined, any element that has a `class` of `black-background` will get the styles applied. Pretty cool.

Since browsers typically default the color of text to black, our applied `black-background` class makes our text blend with the black background. We want to see the text too so we can fix this by updating our class definition to use another common property named `color`. Again, we won't go over all the valid properties that are possible as you, like other coders, can reference resources. The takeaway is the relationship of property-value pairs within class definitions. Here is one approach to update our `style.css` file:

```
.black-background {
  background-color: '#000000';
  color: '#ffffff';  
}
```

Another approach could be:

```
.black-background {
  background-color: '#000000';
}

.white-text {
  color: '#ffffff';
}
```

Our `<div>`s would need to be updated for this second solution. Take note that spaces are used between class names to enable application of more than one class style. This is a very powerful aspect of CSS.

```
<div class='black-background white-text'>
```

With either solution, both our `<div>`s will have black backgrounds and the text within them will be white. As a creation evolves, feel free to change names of classes if it makes sense to. A class name may make less sense as new property-value pairs are added or removed. Over time you will leverage established naming practices and/or develop your own to gain an intuitive feel of when to update a name. Just know that it is a very common to change names as a creation evolves.

We've covered the anatomy of HTML and CSS, so now it is time for JavaScript. In a way we already looked at the anatomy of JavaScript in the *Elements and Elements* section. That breakdown was a bit more granular and we'll revisit the specifics in the next chapter *Coding and JavaScript*. For now we will look at the high level anatomy of a JavaScript file. We will focus on shape, space, and form or more precisely function, scope, and object.

As you already know, a function is like a shape because it encloses scope just as a shape encloses space. An enclosure helps prevent clashing of what exists in the aforementioned scope and space. No clashing please. Objects like forms, are a higher level enclosure. They each embody one or more functions or shapes respectively. JavaScript has specific types of objects, but a function is *also* an object. This may seem odd at first, but the idea is really simple when you think about the importance of scopes.

Long story short, because a function is an object in JavaScript, a JavaScript program is essentially a nested tree of functions. As a by product of functions each enclosing a scope, a JavaScript program can also be thought of as a nested tree of scopes. So when the JavaScript engine executes a particular line of code that has a reference to a value, it works like this in an effort to get the actual value:
1. look in the target scope for the reference
2. if not found, look in its next enclosing scope
3. repeat until the last scope is hit

If the reference is found in one of the scopes, it can use the referenced value and continue to do work. This is what we want. If the last scope is hit and the value does not exist, then we have a problem. We will go into detail later regarding this scenario, so just be aware of it.

Now that we know the anatomy of a JavaScript program is simply a nested tree of function scopes, let's add a simple example based on our HTML and CSS examples used thus far in this section. HTML has a tag that allows us to add JavaScript with ease, it is the `<script>` tag. You can add a `<script>` tag to the `<head>` or the `<body>`, but the later is best practice. Specifically, `<script>` tags should reside just before the `</body>`. Here is an updated excerpt from our `index.html` file.

```
    <!-- The previous HTML code from our index.html file is excluded for brevity -->
    </div>
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

