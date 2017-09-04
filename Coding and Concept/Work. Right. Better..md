# Work. Right. Better.

In programming there is the axiom "make it right before you make it faster". This specific version is found in The Elements of Programming Style by Brian W. Kernighan and P.J. Plauger and it is heavily respected by the programming community. Ultimately, when authoring code you should:

1. make code work
2. make code right
3. make code better

In this section we will explore the notion of *right* and *better* in reference to the `toggleImageOpacity` function that we recently looked at. The three step process will become second nature as you continue to improve your coding skills.

First and foremost you need the code to *work*. No shit right? Making it *right* is less obvious though, where the goal is typically to achieve the same functionality with less code. Making it *better* is a bit more subjective.

Is the code better for beginner and junior coders? Is it better for advanced and senior coders? Is it better for the computer? Sometimes the solution is ideal for all, but this is not always the case. For instance an uncommon but advantageous language feature may be common sense to an advanced coder, but confusing to a beginner coder. The code is better for one group and less so for the other. Similarly, when performance is a bottleneck in a program, better may mean sacrificing human readability. This should be avoided, but it is sometimes necessary. This latter example translates to an improvement in compilation time and/or execution time, but not authoring time. Programming is about trade-offs.

Below is the `toggleImageOpacity` function from the previous section with added comments. Each comment is numbered for reference as we will soon be investigating the code line-by-line. After we understand each line of code, we will entertain improvement ideas.

```
// 1. function declaration using toggleImageOpacity identifier
function toggleImageOpacity() {

  // 2. variable declaration and assignment using imageToToggle identifier
  var imageToToggle = document.getElementById('image-to-toggle');
  
  // 3. variable declaration and assignment using currentOpacity identifier
  var currentOpacity = window.getComputedStyle(imageToToggle).opacity;
  
  // 4. 'if' portion of an if/else conditional statement
  if(currentOpacity == 1) {
  
    // 5. sub-property assignment using imageToToggle reference
    imageToToggle.style.opacity = .5;
  
  }
  
  // 6. 'else' portion of an if/else conditional statement
  else {
  
    // 7. sub-property assignment using imageToToggle reference
    imageToToggle.style.opacity = 1;
    
  }
  
}
```

Now that the numbered comments provide a bit more context to each associated line of code, let's take a step deeper into each snippet.

```
// 1. function declaration using toggleImageOpacity identifier
function toggleImageOpacity() {  }
```

In snippet one, the `toggleImageOpacity` function declaration, there are four core parts comprising the line of code:
1. `function` - keyword reserved by the JavaScript language
2. `toggleImageOpacity` - custom name used to identify the function
3. `()` - parens denoting how to call the function to execute work
4. `{}` - 

If it is not already obvious, identifers are invaluable. They provide a reference to a particular value that may be used in other parts of the code. The reference may be used in a sync or async fashion too. Identifiers are your friend.

Above we saw one example of a function identifier and two examples of variable identifers. If a function expected one argument value, that function's signature would define an argument identifier. Think of an argument identifier as a shortcut for creating a variable identifier. Here is an example function named `setImageOpacity` with an argument identifier named `newOpacityValue`. The value passed at run-time is automatically assigned to it for use inside the function.

```
function setImageOpacity(newOpacityValue) {
  var imageToToggle = document.getElementById('image-to-toggle');
  imageToToggle.style.opacity = newOpacityValue;
}
```
