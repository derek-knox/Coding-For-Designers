# Sync and Async

Though we didn't explicitly state it, the nature of how the event loop works gives rise to the notion of *sync* and *async* work. Synchronous and asynchronous are the full terms, but we'll use these shortcuts instead.

Sync work is referred to as *blocking* where async work is *non-blocking*. Regarding your new knowledge of the event loop, how would you categorize the engine's stack work? How would you categorize the runtime APIs work? I'll give you a clue, they're different.

Answer time:
<table>
  <tr>
    <td>Sync vs. Async</td>
  </tr>
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
