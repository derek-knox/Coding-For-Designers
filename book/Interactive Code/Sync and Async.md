## Sync and Async

Though we didn't explicitly state it, the nature of how the event loop works gives rise to the notion of *sync* and *async* work. Synchronous and asynchronous are the full terms, but we will use the shortcuts sync and async instead.

Sync work is referred to as *blocking* where async work is *non-blocking*. Using your new knowledge of the event loop, how would you categorize the engine's stack work? How about the runtime APIs work? I'll give you a clue, they are different. Take a moment before continuing.

Answer time:

![TODO - Replace](../assets/img/visual-todo-placeholder.jpg "TODO - Replace")

<table>
  <tr>
    <td>sync</td>
    <td>blocking</td>
    <td>stack work</td>
  </tr>
  <tr>
    <td>async</td>
    <td>non-blocking</td>
    <td>runtime APIs work</td>
  </tr>
</table>

The Event Loop Machine 3D visualization from the *Event Loop* section should be popping into your head. The event loop cannot cycle when work is on the stack. The loop is blocked. The event queue does not prevent the event loop from cycling. The loop is not blocked.

Let's look at code examples of both work types to see this in action. We haven't specifically covered JavaScript outside the brief introduction in the *Elements and Elements* section, but I am confident you'll get the gist. At the very least use this time to test your assumptions.

Sync work:
```javascript
function makeBackgroundBlack() {
  document.body.style.backgroundColor = '#000000';
}

makeBackgroundBlack();
```

There are likely some details you don't understand, but that is to be expected. Let's look at the same code with some added explanations. Take note that the words following the `//` are plain English, not code. These plain English *comments* are useful for us humans when we read and share our code for others to read (including our future self). Comments are for humans not computers. The engine essentially ignores them.

```javascript
// 1. We declare a function statement (stack work) for the engine
// 2. We name the function whatever we want, 'makeBackgroundBlack' in this case
// 3. The engine doesn't do the work yet (code statement between the '{' and '}')
function makeBackgroundBlack() {

  // We set the document's background color to black (remember the Coding Color section?)
  document.body.style.backgroundColor = '#000000';
}

// 1. We tell the engine to do work, the code sequence `()` is the trigger
// 2. Since we named the function, the engine knows the exact work to put on its stack
makeBackgroundBlack();
```

Without comments, there are naturally a lot less lines for us humans to read. As far as the engine is concerned however, these are the same program. As you gain more experience you will understand when and when not to use comments. When in doubt use them to help other coders, including your future self, understand your original intention. It's worth mentioning that the  descriptive function names used in this book are intentional. From the engine's perspective function nameed "X" would suffice, but a descriptive alternative helps all coders more quickly understand the intention of the code.

Admittedly, the code above does not do a whole lot. The work inside of the `makeBackgroundBlack` function will happen really fast too. The event loop will technically be blocked for less than 1ms, but from a user's perspective the work will happen instantly and then the event loop will become unblocked. If the function instead counted to a million before changing the background color, then the user would percieve the program as slower (and rightly so).

The takeaway here is that you should try to do small and efficient work in your functions. As you author code over time, you will develop an intuitive understanding of what that really means. For now, put this idea in the back of your mind. Remember, the faster the stack and event queue are cleared, the greater the chance you will hit your target frame rate. 60fps? Yes please.

Let's now look at an async example. We will make it similar to the sync example for comparison. In fact, we will make the program identical except for a single statement and its comments.

Async work:
```javascript
function makeBackgroundBlack() {
  document.body.style.backgroundColor = '#000000';
}

// 1. We tell the engine to do work, the code sequence `(makeBackgroundBlack, 1000)` is the trigger
// 2. 'setTimeout' is a named built-in function that the 'runtime APIs' provide, thank you runtime
// 3. The 'setTimeout' function expects two argument values
setTimeout(makeBackgroundBlack, 1000);
```

Before reading on, try to guess what `setTimeout` does. How do you think it uses the argument values?

This async program is identical to the sync program except for one code statement. If we look up how the `setTimeout` function uses its arguments to do work, we can learn what work it does. I want to stress again that professional coders, just like beginners, use references to learn and remind themselves what certain functions do. Even the best cannot remember everything.

I will just tell you what arguments, in order, `setTimeout` expects:
1. a function
2. a time in milliseconds

The work `setTimout` actually does, in English, is:
1. create a timer
2. run the timer for the time in milliseconds provided
3. wait for the timer to complete
4. upon completion, update the event queue with the function provided

What is cool about many functions, `setTimeout` included, is that they can be designed with an amount of flexibility built-in. As you may have guessed, as long as we give `setTimeout` valid arguments, it will always do the work we want (via the function provided) after a delay (via the time provided). Pretty damn cool. You can design your own functions with flexibility as well.

As a quick example, let's design a new function named `changeBackgroundColor`.
```javascript
function changeBackgroundColor(newColor) {
  document.body.style.backgroundColor = newColor;
}
```

Here are a few examples of how we could use it:
```javascript
changeBackgroundColor('#FF0000');
```

or

```javascript
changeBackgroundColor('Green');
```

or

```javascript
changeBackgroundColor('Blue');
```

You get the idea.

We explored some JavaScript a little bit in this section, but the main takeaway is the difference between sync and async. If you understand how to keep your stack work small and fast, you'll be running 60fps with no problem.

As you learn more about runtime APIs you will discover that the runtime will do a lot of really cool non-blocking work for you. If you haven't already noticed, the runtime APIs provide a simple *interface* for you as a code author to work with. Let's dig deeper into what that means.
