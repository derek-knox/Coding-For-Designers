# Work. Right. Better.

In programming there is the axiom "make it right before you make it faster". This exact quote is found in The Elements of Programming Style by Brian W. Kernighan and P.J. Plauger and it is heavily respected by the programming community. When authoring code you should, in order, make it:

1. work
2. right
3. better

In this section we will explore the notion of *right* and *better* in reference to the working `toggleImageOpacity` function that we recently looked at. This effort will introduce reusable code improvement tactics and the thought process behind them. The three step process will become second nature in time.

First and foremost you need the code to *work*. No shit. Making it *right* is less obvious though. Typically the goal is to achieve the same functionality with less and/or more efficient code. Making it *better* is more subjective.

Is the code better for beginner and junior coders? Is it better for advanced and senior coders? Is it better for the computer? Sometimes the solution is ideal for all, but this is not always the case. For example an advantageous language feature may be common sense to an advanced coder, but confusing to a beginner coder. The code is better for one group and less so for the other. Similarly, when program performance is a bottleneck, better may mean sacrificing human readability. This should be avoided, but it is sometimes necessary. This latter example translates to an advantage during compilation time and/or execution time, but a disadvantage during authoring time.

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
  
    // 5. nested property assignment using imageToToggle reference
    imageToToggle.style.opacity = .5;
  
  // 6. end of 'if'
  }
  
  // 7. 'else' portion of an if/else conditional statement
  else {
  
    // 8. nested property assignment using imageToToggle reference
    imageToToggle.style.opacity = 1;
  
  // 9. end of 'else' 
  }

// 10. end of toggleImageOpacity function
}
```

Now that the numbered comments provide a bit more context to each associated line of code, let's take a step deeper into each snippet. I do not expect you to understand everything we cover in the rest of this section, so do not be discouraged if some words or ideas make no sense yet as this is expected. The intention below is to plant seeds in your mind regarding certain vocabulary and concepts. Extract what you can and pass over the rest.

In snippet one there are four parts comprising the line of code:
```
// 1. function declaration using toggleImageOpacity identifier
function toggleImageOpacity() {
```
1. `function` - keyword reserved by JavaScript denoting a function
2. `toggleImageOpacity` - custom identifier for referencing the function by name
3. `()` - *function signature input* defining how to call the function to do work
4. `{` - opening curly brace for declaring the beginning of the *function body*
    - `}` - a closing curly brace is expected after the *function body* for declaring its end
    - the `{` and `}` define the scope boundary of a function

The above four parts make up the anatomy of a function. First, the `function` keyword tells the JavaScript engine your intent to define a function. Second, a custom identifier is set to enable other code to properly reference and call the function by name. Third, the function's signature input defines what arguments the function expects. No arguments are expected for `toggleImageOpacity` currently. Lastly, the `{` and `}` define the bounds of the function body. Some functions return a value prior to closing the function body too, but this *function signature output* will be covered in the next chapter. 

With respect to making snippet one *right* there is nothing we can do. A case could be made for making it *better* by renaming `toggleImageOpacity` to a single character alternative. This change is better for computers because there is less information to read which also translates to a smaller payload to send over a network. We won't make this change as we want to keep the code better for us humans. Research the *minification* process to learn about attaining the best of both worlds.

In snippet two there are five parts comprising the line of code:
```
// 2. variable declaration and assignment using imageToToggle identifier
var imageToToggle = document.getElementById('image-to-toggle');
```
1. `var` - keyword reserved by JavaScript denoting a variable
2. `imageToToggle` - custom identifier for referencing a value by name
3. `=` - *assignment operator* that assigns the value on its right to the identifer on its left
4. `document.getElementById('image-to-toggle')` - browser API for referencing a specific HTML element
5. `;` - character reserved by JavaScript denoting the explicit end of a code statement

The above five parts make up the anatomy of a declaration and assignment statement. The parts work together to assign the resulting value from the `document.getElementById()` browser API call to the declared `imageToToggle` identifier. In subsequent code, the identifier can be used as a shortcut to reference the actual element object and then use its API. It is worth noting that every use of `imageToToggle` could be replaced with `document.getElementById('image-to-toggle')`. This approach would *work*, but it would be *less right* because we'd be doing the same work more times than needed.

Assigning an executed function's result to a variable is an example of *caching*. Caching is a great approach for decreasing code volume and increasing run-time performance. The more expensive and time consuming the function call, the more valuable caching is. Preventing repetitive work is the win here.

With respect to making snippet two *more right*, there is one other thing we could do. We could cache the `imageToToggle` lookup and assignment *outside* of the `toggleImageOpacity` function. In doing so, we would prevent the repetitive work that occurs each time `toggleImageOpacity` executes. This approach would require two conditions to continue to work:
1. value assigned never changed
2. element remained in the document

Additionally, an even *more right* approach could be made if `imageToToggle`'s value would be useful to other code within our program. If this was the case then the variable wouldn't exist in the scope just outside the `toggleImageOpacity`'s scope, but could instead leverage a higher level scope via the singleton design pattern. We mentioned this approach in the Principles and Patterns section, but the details are outside the scope of this book. Again, we're just planting seeds here so do not concern yourself if much of this is over your head.

We'll leave the snippet as is for simplicity and because there isn't anything *better* we can do.

In snippet three there are five parts comprising the line of code:
```
  // 3. variable declaration and assignment using currentOpacity identifier
  var currentOpacity = window.getComputedStyle(imageToToggle).opacity;
```
Each part reflects the same general description as snippet two with the exception of `window.getComputedStyle(imageToToggle).opacity`. This part accesses the specific `opacity` property of the cached `imageToToggle` element object instead of the element object itself.

The suggestion to cache the identifier outside the `toggleImageOpacity` function is problematic in this snippet though. The difference is that `currentOpacity` is something we want to lookup *each time* the function executes. This is a requirement if we want an up-to-date opacity value. As a result, making this change would result in a *less right* and ultimately broken set of code. Caching the `getComputedStyle(imageToToggle)` lookup outside the function scope could be considered *more right* however. Nothing *better* is possible.

In snippet four there are seven parts comprising the line of code:
```
// 4. 'if' portion of an if/else conditional statement
if(currentOpacity == 1) {
```
1. `if` - keyword reserved by JavaScript denoting conditional code execution
2. `(` - opening paren for declaring the beginning `if` condition
3. `currentOpacity` - custom identifier for referencing a value by name
4. `==` - *loose equality* that coercively compares values on each side and produces a true or false value
5. `1` - a literal number value
6. `)` - closing paren for declaring the `if` condition end
7. `{` - opening curly brace for declaring the beginning of the *true*-condition code to execute

The above seven parts make up the core anatomy of an `if` statement. First, the `if` keyword tells the JavaScript engine your intent to define a condition to control execution flow. When the condition is true, the code between its `{` and `}` will execute. If the condition is false, then the code block is skipped. The beginning `(` and ending `)` parens define the space where the condition in question resides. This condition is the comparison between the value in the `currentOpacity` identifier and the number value `1`. We will cover this again later, but `=` is used to assign where `==` is used to compare.

With respect to making snippet four *right* and *better*, we enter subjective changes. This subjectivity sources from a deeper understanding of JavaScript:
1. implicit coercion
2. optional braces

Implicit coercion is a nuanced sub-system. Coercion is a fancy word for interpreting a value in one form as another form. We'll leave the details to the next chapter, but just know that loose equality `==` allows coercion where *strict equality* `===` does not. Put another way, loose equality allows interpretation where strict equality does not. Optional braces are an authoring time convenience for succinct code writing.

The snippet will remain for now. Certain sub-systems and their caveats do not need to be learned until you are ready to dig deeper.

In snippet five there are four parts comprising the line of code:
```
// 5. nested property assignment using imageToToggle reference
imageToToggle.style.opacity = .5;
```
1. `imageToToggle.style.opacity` - xxx
2. `=` - assignment operator that assigns the value on its right to the identifer on its left
3. `.5` - xxx
4. `;` - character reserved by JavaScript denoting the explicit end of a code statement

...

If it is not already obvious, identifers are invaluable. They provide a reference to a particular value by name that may be used in other parts of the code. The named reference may be used in a sync or async fashion too. Identifiers are your key to getting specific work done at specific times. A value is denoted in one of two ways:
1. primitive
2. reference

We will dive deeper into this in the next chapter, but the general idea is that a reference value is one that may parent other values where a primitive value will not. Put another way, a reference value may be considered "complex" where a primitive value may be considered "simple". 

Above we saw the three identifiers `toggleImageOpacity`, `imageToToggle`, and `currentOpacity`. Based on the values assigned to each, the first became a function identifier while the other two became variable identifiers. If a function expected any number of argument values, that function's signature would define the same amount of argument identifiers. An argument identifier is just a shortcut name to the passed in value, be it a function or variable.

Here is an example function named `setImageOpacity` with an argument identifier named `newOpacityValue`. The value passed at run-time is automatically assigned to it for use inside the function.

```
function setImageOpacity(newOpacityValue) {
  var imageToToggle = document.getElementById('image-to-toggle');
  imageToToggle.style.opacity = newOpacityValue;
}
```
