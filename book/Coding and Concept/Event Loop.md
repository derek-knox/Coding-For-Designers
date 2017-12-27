## Event Loop

An interactive application or game is simply the manifestation of a target sixty rendered images, shown in sequence, per second. The only reason this frame rate is important is so the user's experience is perceptually fluid and responsive. If fluidity and responsiveness were not a perceptual goal, our application or game could leverage 10fps, 5fps, or an even lower target frame rate. More often than not however we desire the interactive content we create to be extremely fluid and responsive. 60fps? Yes please.

A non-interactive animation hitting 60fps undoubtedly looks smooth, but it is just that, *non-interactive*. How do we account for this desired interactivity?

Thankfully, the program responsible for *executing* our compiled code helps us out. This program is called the *engine*. Additionally, the engine gets help from its parent program, the *runtime*. Together, the runtime and engine provide an interactive system that executes code in real-time. If we were to code the relationship in an HTML-like code, it would look like this:

```
<runtime>
    <engine></engine>
</runtime>
```

For us to take advantage of the runtime and engine, we just need to get an idea of how they work together. This allows us to author code that reacts interactively as the engine executes it in real-time.

The JavaScript runtime in a web browser has four core parts and the engine has two:
1. engine
    - *heap*
    - *stack*
2. *runtime APIs*
3. *event queue*
4. *event loop*

We can update our HTML-like example from before:

```
<runtime>
    <engine>
        <heap></heap>
        <stack></stack>
    </engine>
    <apis></apis>
    <queue></queue>
    <loop></loop>
</runtime>
```

So what do each of these runtime parts do anyway? Here is a succint breakdown where the use of *work* implies some amount of code reading and/or executing:
1. engine - does work
    - *heap* - memory for work
    - *stack* - organizes the engine's work
2. *runtime APIs* - does special work the engine cannot
3. *event queue* - organizes the results of special work as packages of engine work
4. *event loop* - gives the engine queued packages of work

Here is a 3D representation of the relationship between the runtime and engine parts:

![alt text](../assets/img/visual-todo-placeholder.jpg "The Event Loop Machine")

*^ The Event Loop Machine ^*

During compile time, just before execution time, the engine quickly does three things with our code:
1. reads
2. reorganizes
3. optimizes

These steps enable the engine to run fast and efficiently during execution time. Execution time is when the runtime and engine work together to achieve two goals:
1. clear the stack
2. clear the event queue

Once these two goals are met, the engine can relax. It relaxes until new work is added to its stack. How does it get new work though? Do you remember the input triggers we covered in the *Behavior* section? Bingo. As a reminder, these input triggers, often called *events*, are:
1. user interaction (tap, click, hover, gesture, voice, etc.)
2. environment (layout resizing, operating system, device sensors, etc.)
3. time (delays, schedules, etc.)

When an event occurs, the runtime APIs manage the special work required and then update the event queue when finished. Since the event loop has been cycling while the engine was relaxing, it now notices the updated event queue. Consequently, it takes one item from the queue and gives it to the engine. The engine then puts it on the stack. You guessed it, new work for the engine. This process cycles.

Though all of the runtime's parts are vital, the event loop most ensures our interactive creations come to life. Thanks event loop.
