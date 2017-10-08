# Work. Right. Better.

In programming there is the axiom "make it right before you make it faster". This exact quote is found in The Elements of Programming Style by Brian W. Kernighan and P.J. Plauger and it is heavily respected by the programming community. Put another way, when authoring code you should make it:
1. work
2. right
3. better

In this section we will explore the notion of *right* and *better* in reference to the working `toggleImageOpacity` function that we recently looked at. This effort will introduce reusable code improvement tactics and the thought process behind them. The three step process will become second nature in time.

First and foremost you need the code to *work*. No shit. Making it *right* is less obvious though. Typically the goal is to achieve the same functionality with less and/or more efficient code. Making it *better* is much more subjective.

Is the code better for beginner and junior coders? Is it better for advanced and senior coders? Is it better for the computer? Sometimes the solution is ideal for all, but this is not always the case. For example an advantageous language feature may be common sense to an advanced coder, but confusing to a beginner coder. The code is better for one group and less so for the other. Similarly, when program performance is a bottleneck, better may mean sacrificing human readability. This should be avoided, but it is sometimes necessary. This latter example translates to an advantage during compilation time and/or execution time, but a disadvantage to authoring time.

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

Now that the numbered comments provide a bit more context to each associated line of code, let's take a step deeper into each snippet. I do not expect you to understand everything we cover in the rest of this section however. Do not be discouraged if some words or ideas make no sense yet as this is expected. The intention of this section is to plant seeds in your mind regarding the vocabulary, concepts, and considerations of advanced coders. Extract what you can.

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

The above four parts make up the anatomy of a function. First, the `function` keyword tells the JavaScript engine your intent to define a function. Second, a custom identifier is set to enable other code to properly reference and call the function by name. Third, the function's signature input defines what arguments the function expects to use when doing its work. No arguments are expected for `toggleImageOpacity` currently. Lastly, the `{` and `}` define the bounds of the function body. All functions return a value prior to closing the function body too, but this *function signature output* will be covered in the next chapter. 

With respect to making snippet one *right* there is nothing we can do. A case could be made for making it *better* by renaming `toggleImageOpacity` to a single character alternative. This change is better for computers because there is less information to read which also translates to a smaller payload to send over a network. We won't make this change as we want to keep the code better for us humans. Research the *minification* process to learn about attaining the best of both worlds.

In snippet two there are five parts comprising the line of code:
```
// 2. variable declaration and assignment using imageToToggle identifier
var imageToToggle = document.getElementById('image-to-toggle');
```
1. `var` - keyword reserved by JavaScript denoting a variable
2. `imageToToggle` - custom identifier for referencing a value by name
3. `=` - *assignment operator* that assigns the value on its right to the identifer on its left
4. `document.getElementById('image-to-toggle')` - browser API for referencing a specific HTML element's object
5. `;` - character reserved by JavaScript denoting the explicit end of a code statement

The above five parts make up the anatomy of a declaration and assignment statement. The parts work together to assign the resulting value from the `document.getElementById()` browser API call to the declared `imageToToggle` identifier. In subsequent code, the identifier can be used as a shortcut to reference the actual element object and then use its API. It is worth noting that every use of `imageToToggle` could be replaced with `document.getElementById('image-to-toggle')`. This approach would *work*, but it would be *less right* because we'd be doing the same work more times than needed.

Assigning an executed function's result to a variable identifier is an example of *caching*. Caching is a great approach for decreasing code volume and increasing execution time performance. The more expensive and time consuming the function call (blocking stack work), the more valuable caching is. Preventing repetitive work is the win with caching.

With respect to making snippet two *more right*, there is one other thing we could do. We could cache the `imageToToggle` lookup and assignment *outside* of the `toggleImageOpacity` function. In doing so, we would prevent the repetitive work that occurs each time `toggleImageOpacity` executes. This approach would require the identifier to never be reassigned to continue to work.

Additionally, an even *more right* approach could be made if `imageToToggle`'s value would be useful to other code within our program. If this was the case then the variable wouldn't exist in the scope just outside the `toggleImageOpacity`'s scope, but could instead exist in a higher level scope via the singleton design pattern. We mentioned this approach in the *Principles and Patterns* section, but the details are outside the scope of this book. Again, we're just planting seeds here so do not concern yourself with the details. We'll leave the snippet as is for simplicity and because there isn't anything *better* we can do.

In snippet three there are five parts comprising the line of code:
```
  // 3. variable declaration and assignment using currentOpacity identifier
  var currentOpacity = window.getComputedStyle(imageToToggle).opacity;
```
Each part reflects the same general description as snippet two with the exception of `window.getComputedStyle(imageToToggle).opacity`. This part accesses the nested and specific `opacity` property of the cached `imageToToggle` element object instead of the element object itself.

The suggestion to cache the identifier outside the `toggleImageOpacity` function is problematic in this snippet though. The difference is that `currentOpacity` is something we want to lookup *each time* the function executes. This is a requirement if we want an up-to-date opacity value. As a result, making this change would result in a *less right* and ultimately broken set of code. Caching the `getComputedStyle(imageToToggle)` lookup outside the function scope could be considered *more right* however. Nothing *better* is possible.

In snippet four there are seven parts comprising the line of code:
```
// 4. 'if' portion of an if/else conditional statement
if(currentOpacity == 1) {
```
1. `if` - keyword reserved by JavaScript denoting conditional code execution
2. `(` - opening paren for declaring the `if` condition beginning
3. `currentOpacity` - custom identifier for referencing a value by name
4. `==` - *loose equality* that coercively compares values on each side and produces a true or false value
5. `1` - a literal number value
6. `)` - closing paren for declaring the `if` condition end
7. `{` - opening curly brace for declaring the beginning of the *true*-condition code block

The above seven parts make up the anatomy of an `if` statement. First, the `if` keyword tells the JavaScript engine your intent to define a condition to control execution flow. When the condition is true, the code between its `{` and `}` will execute. If the condition is false, then the code block is skipped. The beginning `(` and ending `)` parens define the space where the condition in question resides. This condition is the comparison between the value in the `currentOpacity` identifier and the number value `1`. We will cover this again later, but `=` is used to *assign* where `==` is used to *compare*.

With respect to making snippet four *right* and *better*, we enter subjective changes. This subjectivity sources from a deeper understanding of JavaScript:
1. implicit coercion
2. optional braces

Implicit coercion is a nuanced sub-system of JavaScript. Coercion is a fancy word for interpreting a value in one form as another form. We'll leave the details to the next chapter, but just know that loose equality `==` allows coercion where *strict equality* `===` does not. Put another way, loose equality allows interpretation where strict equality does not. Optional braces are an authoring time convenience for more succinct code writing. The snippet will remain as-is for now as many sub-systems and their caveats do not need to be learned to make code *work*.

In snippet five there are four parts comprising the line of code:
```
// 5. nested property assignment using imageToToggle reference
imageToToggle.style.opacity = .5;
```
1. `imageToToggle.style.opacity` - nested identifier
2. `=` - assignment operator that assigns the value on its right to the identifer on its left
3. `.5` - a literal number value
4. `;` - character reserved by JavaScript denoting the explicit end of a code statement

The above four parts make up the anatomy of an assignment statement. This snippet has one small difference compared to snippet two. Where snippet two has a declaration and an assignment, this snippet only has the latter. The assumption made is that the nested identifiers `style` and `opacity` already exist. As a result, a simple assignment using `=` can be made.

Regarding *right* and *better*, we could cache the `imageToToggle.style` lookup. Technically speaking, each time the `imageToToggle.style.opacity` portion executes there is repetitive lookup work the engine has to do. We will not make this change as the performance benefit is negligible. This will be learned in time, but changes to increase performance should only be considered when the target framerate or user experience suffers. Put another way, "premature optimization is the root of all evil". This exact quote is from Donald Knuth, a heavilty respected and influential coder. We will take his advice.

In snippet six there is only one part comprising the line of code:
```
// 6. end of 'if'
}
```
1. `}` - closing curly brace for declaring the end of the *true*-condition code block

This closing curly brace simply defines the end of the `if` statement's code block. Nothing *right* or *better* is possible.

In snippet seven there are two parts comprising the line of code:
```
// 7. 'else' portion of an if/else conditional statement
else {
```
1. `else` - keyword reserved by JavaScript denoting conditional code execution
2. `{` - opening curly brace for declaring the beginning of the *else*-condition code block

The above two parts make up the anatomy of an `else` statement. The `else` is an optional execution flow that follows an `if` statement. When the corresponding `if` condition is false, the code between the `else`'s `{` and `}` will execute. The `if`/`else` allows a program to branch, to have conditional execution flow at execution time. Specifically in our `toggleImageOpacity` function, we use this tactic to ping-pong, or toggle, an image's opacity between the values `1` and `.5`. Put another way, the program toggles the image's opacity between fully opaque (100%) and half transparent (50%). There is nothing *right* or *better* to do with this snippet.

In snippet eight there are four parts comprising the line of code:
```
// 8. nested property assignment using imageToToggle reference
imageToToggle.style.opacity = 1;
```
1. `imageToToggle.style.opacity` - nested identifier
2. `=` - assignment operator that assigns the value on its right to the identifer on its left
3. `1` - a literal number value
4. `;` - character reserved by JavaScript denoting the explicit end of a code statement

Everything covered in snippet five can be said of this snippet. The only difference is the use of the literal value `1` in place of `.5`.

In snippet nine there is one part comprising the line of code:
```
// 9. end of 'else' 
}
```
1. `}` - closing curly brace for declaring the end of the *false*-condition code block

This closing curly brace simply defines the end of the `else` statement's code block. There are no *right* or *better* improvements that are possible with this particular snippet. There is an improved *better* change possible when considering the entire `if`/`else` as a whole however. Snippets four through nine can be encapsulated more succintly using the *ternary operator*. The ternary operator does the same work as an `if`/`else`, but does so in a single line of code:
```
// Ternary operator alternative to an if/else that encapsulates snippets four through nine
imageToToggle.style.opacity = currentOpacity == 1 ? .5 : 1;
```

This is admittedly an advanced code statement, but it is functionally identical to the `if`/`else`. We won't go into its anatomy, but you could probably guess how it works. It is better for advanced JavaScript coders and less so for beginner coders. Subjectivity is at play.

In snippet ten there is one part comprising the line of code:
```
// 10. end of toggleImageOpacity function
}
```
1. `}` - closing curly brace for declaring the end of the *function body*
    - `{` - an opening curly brace is expected before the *function body* for declaring its beginning
    - the `{` and `}` define the scope boundary of a function
    
This closing curly brace simply defines the end of the `toggleImageOpacity` function. There are no *right* or *better* improvement possibilities.

In this section we introduced some of the vocabulary, concepts, and considerations of advanced coders. Overwhelming I know. Hopefully a few things made sense though. Regardless, seeds should be planted that will bear fruit later in your learn-to-code journey. The next chapter, Coding and JavaScript, however will bypass much of this advanced material in favor of a simplified approach. As you progress as a coder, you can begin to make code *right* and *better*. Until then, the goal is to make code that works. Let's do this.
