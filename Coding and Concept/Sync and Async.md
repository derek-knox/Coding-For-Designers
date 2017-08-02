# Sync and Async

Though we didn't explicitly state it, the nature of how the event loop works gives rise to the notion of *sync* and *async* work. Synchronous and asynchronous are the full terms, but we will use the shortcuts sync and async instead.

Sync work is referred to as *blocking* where async work is *non-blocking*. Using your new knowledge of the event loop, how would you categorize the engine's stack work? How about the runtime APIs work? I'll give you a clue, they are different. Take a moment before continuing.

Answer time:
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

The 3D visualization from the Event Loop section should be popping into your head. The event loop cannot cycle when work is on the stack. The loop is blocked. The event queue does not prevent the event loop from cycling. The loop is not blocked.

![alt text](../assets/visual-todo-placeholder.jpg "The Event Loop Machine")

*^ The Event Loop Machine ^*

Let's look at code examples of both work types to see this in action. We haven't specifically covered JavaScript code yet, but I am confident you'll get the gist.

Sync work:
```
function makeBackgroundBlack() {
  document.body.style.backgroundColor = '#000000';
}

makeBackgroundBlack();
```

There are likely some details you don't understand, but that is to be expected. Let's look at the same code with some added explanations. Take note that the words following the `//` are plain English, not code. These plain English *comments* are useful for us humans when we read and share our code for others to read. Comments are for humans not computers. The engine ignores them.

```
// 1. We declare a function statement (stack work) for the engine to read
// 2. We name the function whatever we want, 'makeBackgroundBlack' in this case
// 3. The engine doesn't do the work yet (code statement between the '{' and '}')

function makeBackgroundBlack function is declared here() {

  // Remember the Coding Color section ;)
  document.body.style.backgroundColor = '#000000';
}

// 1. We tell the engine to do work, the code sequence `();` is the trigger
// 2. Since we named the function, the engine knows the exact work to put on its stack

makeBackgroundBlack();
```

Without comments, there are naturally a lot less lines for us humans to read. As far as the engine is concerned however, these are the same program. As you gain more experience you will understand when and when not to use comments.

Admittedly, the code above does not do a whole lot. The work inside of the `makeBackgroundBlack` function will happen really fast too. The event loop will be blocked, but from a user perspective, the work will happen instantly and then the event loop will become unblocked. If the function instead counted to a trillion before changing the background color, then the user would percieve the program as slower (and rightly so).

The takeaway here is that you should try to do small and efficient work in your functions. As you author code over time, you will develop an intuitive understanding of what that really means. Just put this idea in the back of your mind. Remember, the faster the stack and event queue are cleared, the greater the chance you will hit your target frame rate. 60fps? Yes please.

Let's now look at an async example. We will make it similar to the sync example for comparison. In fact, we will make the program identical except for a single statement and its comments.

Async work:
```
function makeBackgroundBlack() {
  document.body.style.backgroundColor = '#000000';
}

// 1. We tell the engine to do work using the code sequence `(makeBackgroundBlack, 1000);`
// 2. 'setTimeout' is a built-in named function that the 'runtime APIs' provide, thank you runtime
// 3. The 'setTimeout' function expects two argument values

setTimeout(makeBackgroundBlack, 1000);
```

Before reading on, try to guess what `setTimeout` does. How do you think it uses the argument values?

This async program is identical to the sync program except for one statement of code. If we look up how the `setTimeout` function uses its arguments to do work, we can learn to reuse it in the future without looking it up. I want to stress again, that professional coders, just like beginners, use references to learn and remind themselves what certain functions do. Even the best cannot remember everything.

I will just tell you what arguments `setTimeout` expects:
1. a function
2. a time in milliseconds

The work `setTimout` actually does, in English, is:
1. create a timer
2. run the timer for the time in milliseconds provided
3. wait for the timer to complete
4. upon completion, run the function provided

What is cool about many functions, `setTimeout` included, is that they are flexible in what work they do. As you may have guessed, as long as we give `setTimeout` valid arguments, it will always do the work we want (via the function we give it) after a delay (via the amount of time we give it). Pretty cool.

...
