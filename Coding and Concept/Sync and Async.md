# Sync and Async

Though we didn't explicitly state it, the nature of how the event loop works gives rise to the notion of *sync* and *async* work. Synchronous and asynchronous are the full terms, but we like shortcut words.

Sync work is referred to as *blocking* where async work is *non-blocking*. Using your new knowledge of the event loop, how would you categorize the engine's stack work? How would you categorize the runtime APIs work? I'll give you a clue, they're different. Take a moment before continuing.

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

Remember the 3D representation? The event loop cannot cycle when work is on the stack. The loop is blocked. Work in the queue does not prevent the event loop from cycling. The loop is not blocked.

![alt text](../assets/visual-todo-placeholder.jpg "The Event Loop Machine")

*^ The Event Loop Machine ^*

Let's look at code examples of both work types. We haven't specifically covered JavaScript code yet, but I am confident you'll get the gist. Take note that the words following the `//` are plain English, not code. These plain English *comments* are useful for us humans when we read and share our code for others to read. Comments are for humans not computers. The engine ignores them.

Sync work:
```
// 1. We declare a function statement (stack work) for the engine to read
// 2. We name the function whatever we want, 'makeButtonBlack' in this case
// 3. The engine doesn't do the work yet (code statement between the '{' and '}')

function makeButtonBlack() {
  button.color = '#000000';
}

// 1. We tell the engine that we want work to be done by using the code sequence of `();` characters
// 2. This code sequence tells the engine that there is work we want it to do
// 3. Since we named the function, the engine knows the exact work to put on its stack

makeButtonBlack();
```

Async work:
```

```
