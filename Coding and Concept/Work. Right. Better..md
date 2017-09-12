# Work. Right. Better.

In programming there is the axiom "make it right before you make it faster". This specific version is found in The Elements of Programming Style by Brian W. Kernighan and P.J. Plauger and it is heavily respected by the programming community. Ultimately, when authoring code you should:

1. make code work
2. make code right
3. make code better

In this section we will explore the notion of *right* and *better* in reference to the `toggleImageOpacity` function that we recently looked at. The three step process will become second nature as you continue to improve your coding skills.

First and foremost you need the code to *work*. No shit right? Making it *right* is less obvious, but typically the goal is to achieve the same functionality with less code. Making it *better* is a bit more subjective.

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
  
  // 6. end of 'if'
  }
  
  // 7. 'else' portion of an if/else conditional statement
  else {
  
    // 8. sub-property assignment using imageToToggle reference
    imageToToggle.style.opacity = 1;
  
  // 9. end of 'else' 
  }

// 10. end of toggleImageOpacity function
}
```

Now that the numbered comments provide a bit more context to each associated line of code, let's take a step deeper into each snippet.

```
// 1. function declaration using toggleImageOpacity identifier
function toggleImageOpacity() {
```

In snippet one there are four core parts comprising the line of code:
1. `function` - keyword reserved by JavaScript denoting a function
2. `toggleImageOpacity` - custom identifier for referencing a function by name
3. `()` - *function signature input* defining how to call the function to do work
4. `{` - opening curly brace for declaring the beginning of the *function body*
    - `}` - a closing curly brace is expected after the *function body* for declaring its end
    - the `{` and `}` define the scope boundary of a function

The above four parts make up the anatomy of a function. First, the `function` keyword tells the JavaScript engine your intention to define a function. Second, a custom identifier is set to enable other code to properly reference and call the function by name. Third, the function's signature input defines what arguments the function accepts. No arguments are expected for `toggleImageOpacity`. Lastly, the `{` and `}` define the bounds of the function body. Some functions, just prior to closing the function body `return` a value too, but this will be covered in the next chapter. 

With respect to making snippet one *right* and *better*, there is nothing we can do. Let's move to snippet two.

```
// 2. variable declaration and assignment using imageToToggle identifier
var imageToToggle = document.getElementById('image-to-toggle');
```

In snippet two there are five parts comprising the line of code:
1. `var` - keyword reserved by JavaScript denoting a variable aka a value reference
2. `imageToToggle` - custom identifier for referencing a variable by name
3. `=` - *assignment operator* that assigns the value on its right to the identifer on its left
4. `document.getElementById('image-to-toggle')` - browser API for referencing a specific HTML element
5. `;` - character reserved by JavaScript denoting the end of a code statement

The above five parts...

If it is not already obvious, identifers are invaluable. They provide a reference to a particular value that may be used in other parts of the code. The reference may be used in a sync or async fashion too. Identifiers are your friend.

Above we saw one example of a function identifier and two examples of variable identifers. If a function expected one argument value, that function's signature would define an argument identifier. Think of an argument identifier as a shortcut for creating a variable identifier. Here is an example function named `setImageOpacity` with an argument identifier named `newOpacityValue`. The value passed at run-time is automatically assigned to it for use inside the function.

```
function setImageOpacity(newOpacityValue) {
  var imageToToggle = document.getElementById('image-to-toggle');
  imageToToggle.style.opacity = newOpacityValue;
}
```
