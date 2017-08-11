# Anatomy of a Source Code File

This section will be the first where we really start digging into the existing languages of HTML, CSS, and JavaScript. We have covered quite a bit in an effort to get to this point. Specifically, we learned about the useful concepts of encoding and decoding in the Breaking Barriers chapter. We learned in Structure, Style, and Behavior how each plays a valuable and distinct role in an interactive creation. In Coding and Visual Design, we mapped design-specific concepts to coding concepts to help establish a frame of reference. More recently, we introduced programming-specific concepts to help shape your understanding of how code can live and communicate in real-time.

We know code is a system for converting meaning between forms and HTML, CSS, and JS are just specific forms. The web browser knows how to decode HTML into divisions of content and render them. It also knows how to decode CSS property-value pairs to adorn the HTML elements with style. Lastly, we know a runtime and engine understand how to decode and execute JavaScript which enables a living and interactive creation to exist.

We will now start to dig into HTML, CSS, and JavaScript since we have a greater understanding of how the various concepts we have covered fit, work, and play-off each other. Your mental model should be primed.

Let's squash a myth real quick. Designers and other non-coders new to coding think they need to learn an entire new language, and in the context of the web, *three* new languages. This is not true. What needs to be learned is:
1. structure, style, and behavior concepts
2. anatomical implementation of each concept
3. common subset of code words for each implementation

For 2D and the web, that means we need to know the difference between HTML structure, CSS styling, and JavaScript behavior. Number one is covered. Let's dig into number two and three.

In keeping with the structure, style, and behavior order, let's look at the anatomy of each file type starting with HTML which uses the `.html` file extension.

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Coding for Designers Page</title>
  </head>
  <body></body>
</html>
```

This is the most structurally simple and valid HTML a browser uses. Let's walk through each tag using *comments*. We already saw an example in JavaScript earlier using the `//` character sequence. HTML uses the `<!---->` sequence where the actual comment rests in the middle of the dashes. Just take note that each language may have a uniqe approach to comments, but their purpose is the same. 

```
<!-- Tell the browser the document type, we only care about html -->
<!DOCTYPE html>

<!-- Tell the browser where we've defined our html, additional data could be outside it -->
<html>

  <!-- Define the page metadata, useful data for the browser and other programs -->
  <head>
  
    <!-- Define the character encoding, ensures browser knows how to read the characters -->
    <meta charset="utf-8">
    
    <!-- Define the page title, useful for browser tab and search engines among other programs -->
    <title>Coding for Designers Page</title>
    
  </head>
  
  <!-- Define the page content, what gets rendered for users to see and interact with -->
  <body></body>
  
</html>
```

There are many types of tags that can be added in both the `<head>` and the `<body>`. As mentioned earlier, we will not go over them here as you, just like other coders, can use other resources to dig deeper. We will reveal the most common ones for the `<body>` however to fulfill the *common subset* bullet above. Instead of comments I will just use English inline with tags to show how the elements wrap content. The content is visible to the user where the tags that wrap it are not. Remember the tags simply tell the browser your content structure.

```
<body>
  <div>
    <h1>This is the Main Title of the Page</h1>
    <p>This is a paragraph. It usually has more sentences. This one only has three.</p>
    <button>Push Me</button>
  </div>
  <div>
    <h2>This is a Secondary Title</h2>
    <p>This is another paragraph. It only has two sentences, but it also has a <a>hyperlink</a>.</p>
    <img></img>
  </div>
</body>
```

The `<div>`, `<h1>`, `<p>`, `<button>`, and `<h2>` tags are simple to grasp, but the `<a>` and `<img>` tags are less so. This is because they are both lacking *attributes*. We'll use the shortcut *attrs* moving forward. All elements can leverage attrs, but these latter two are required for the elements to function as designed.

Think of attrs as APIs. Attrs enable the coder to achieve functionality based on a shared understanding of designed usage. They are also where we start to transition toward CSS with the `class` attr. First we will update the `<a>` and `<img>` tags with each of their most useful attrs to attain the desired functionality.

So `<a>hyperlink</a>` becomes `<a href='http://www.codingfordesignersbook.com'>hyperlink</a>` where the `href` attr is set with `=` to the value `http://www.codingfordesignersbook.com`. The browser knows that the anchor tag, when hit, should change the web page to the value provided. This same functionality can be achieved using JavaScript only, but we'd have to write more code. Remember, APIs provide a tradeoff and a simpler way to do work.

Additionally, `<img></img>` becomes `<img src='http://codingfordesignersbook.com/assets/img/cover-coding-for-designers.jpg'></img>` where the `src` attr is set with `=` to the value `http://codingfordesignersbook.com/assets/img/cover-coding-for-designers.jpg`. The browser knows that the image tag, when read by the browser, should automatically download the image at the provided `src` or source path value. Upon completion of the download, the tag embodies the downloaded image. This same functionality can be achieved using JavaScript only, but we'd have to write more code. Again, a simpler way to do work.

The takeaway is that the browser provides useful APIs via attrs applied to elements. Now that we've covered the basic implementation of HTML structure, let's dig into style. Welcome to the `class` attr.
