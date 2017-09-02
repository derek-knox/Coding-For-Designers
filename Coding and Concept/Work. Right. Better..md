# Work. Right. Better.

In programming there is a mantra, a tip, which is "make it right before you make it faster". This advice is found specifically in The Elements of Programming Style by Brian W. Kernighan and P.J. Plauger and it is heavily respected by the programming community. Put another way you should:

1. make code work
2. make code right
3. make code better

In this section we will explore the notion of *right* and *better* specifically in reference to the `toggleImageOpacity` function from the previous section. The three step process should become second nature as you code. First and foremost you need the code to work. Only then can you potentially improve it.

Admittedly right and better are somewhat subjective, but code can be more right and/or better for us coders or for the computer. Sometimes the solution is ideal for both. Sometimes however, especially when performance is a bottleneck in a program, better means sacrificing coder readability. This translates to "better" for compilation time and execution time, not authoring time.

Below is the `toggleImageOpacity` function with added comments. After we understand more of what exactly is going on, we can entertain improvement ideas.

```
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
