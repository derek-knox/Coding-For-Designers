# Anatomy of a Source Code File

This section will be the first where we really start digging into the existing languages of HTML, CSS, and JavaScript. We have covered quite a bit in an effort to get to this point. Specifically, we learned about the useful concepts of encoding and decoding in the Breaking Barriers chapter. We learned in Structure, Style, and Behavior how each plays a valuable and distinct role in an interactive creation. In Coding and Visual Design, we mapped design-specific concepts to coding concepts to help establish a frame of reference. More recently, we introduced programming-specific concepts to help shape your understanding of how code can live and communicate in real-time.

We know code is a system for converting meaning between forms and HTML, CSS, and JS are just specific forms. The web browser knows how to decode HTML into divisions of content and render them. It also knows how to decode CSS property-value pairs to adorn the HTML elements with style. Lastly, we know a runtime and engine understand how to decode and execute JavaScript which enables a living and interactive creation to exist.

We will now start to dig into HTML, CSS, and JavaScript since we have a greater understanding of how the various concepts we have covered fit, work, and play-off each other. Your mental model should be primed.

Let's squash a myth real quick. Designers and other non-coders new to coding think they need to learn an entire new language, and in the context of the web, *three* new languages. This is not true. What needs to be learned is simply:
1. structure, style, and behavior concepts
2. anatomical implementation of each concept
3. 80/20 subset of code words for each implementation

For 2D and the web, that means we need to know the difference between HTML structure, CSS styling, and JavaScript behavior. Number one is covered. Let's dig into number two and three.

In keeping with the structure, style, and behavior order, let's look at the anatomy of each file type starting with HTML (.html).

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Example Coding for Designers Page</title>
  </head>
  <body></body>
</html>
```
