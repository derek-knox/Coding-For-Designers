# Work. Right. Better.

...

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
