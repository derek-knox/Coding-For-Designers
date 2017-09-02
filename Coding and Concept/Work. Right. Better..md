# Work. Right. Better.

In programming there is a mantra, a tip, which is "make it right before you make it faster". This advice is found specifically in The Elements of Programming Style by Brian W. Kernighan and P.J. Plauger. This advice is heavily respected by the programming community. Put another way, when authoring code you should do so in the order:

1. make code work
2. make code right
3. make code better

In this section we will explore the notion of *right* and *better* specifically in reference to the `toggleImageOpacity` function from the previous section. The three step process should become second nature as you code. First and foremost you need the code to work. No shit. Making it right is less obvious though, where the goal is typically to acheive the same functionality or results, but with less code. Making it better is a bit more subjective.

Is the code better for beginner and junior coders? Is it better for advanced and senior coders? Is it better for the computer? Sometimes the solution is ideal for all, but this is not always the case. For instance an uncommon but advantageous language feature may be common sense to an advanced coder, but confusing to a junior coder. The code is better for one group and less so for the other. Similarly, when performance is a bottleneck in a program, better means sacrificing coder readability. This should be avoided, but it is sometimes necessary. This latter example translates to an improvement in compilation time and/or execution time, but not authoring time. As you'll learn in time, programming is about trade-offs.

Below is the `toggleImageOpacity` function with added comments. They are numbered for reference as we will soon be investigating each in detail. After we understand each line of code in the function, we will entertain improvement ideas.

```
// 1. function declaration with toggleImageOpacity identifier
function toggleImageOpacity() {

  // 2. variable declaration and assignment of imageToToggle identifier
  var imageToToggle = document.getElementById('image-to-toggle');
  
  // 3. variable declaration and assignment of currentOpacity identifier
  var currentOpacity = window.getComputedStyle(imageToToggle).opacity;
  
  // 4. 'if' portion of an if/else conditional statement
  if(currentOpacity == 1) {
  
    // 5. sub-property value assignment of imageToToggle reference value
    imageToToggle.style.opacity = .5;
  
  }
  
  // 6. 'else' portion of an if/else conditional statement
  else {
  
    // 7. sub-property value assignment of imageToToggle reference value
    imageToToggle.style.opacity = 1;
    
  }
  
}
```

If it is not already obvious, identifers are invaluable. They provide a reference to a particular value that may be used in other parts of the code. Above we saw one example of a function identifier and two examples of variable identifers. If a function expected one argument value, that function's signature would define an argument identifier. Think of an argument identifier as a shortcut to creating a variable identifier. Here is an example function named `setImageOpacity` with an argument identifier named `newOpacityValue` where the value passed at run-time is automatically assigned:

```
function setImageOpacity(newOpacityValue) {
  var imageToToggle = document.getElementById('image-to-toggle');
  imageToToggle.style.opacity = newOpacityValue;
}
```
