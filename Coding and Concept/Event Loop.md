# Event Loop

An interactive application or game is simply the manifestation of a target 60+ rendered images, shown in sequence, per second. The only reason this frame rate is important is so the user(s) experience is perceptually fluid and responsive. If fluidity and responsiveness were not a perceptual goal, our application or game could leverage 10fps, 5fps, or an even lower target frame rate. More often than not however we desire the interactive content we create to be extremely fluid and responsive. More frames per second please!

A non-interactive animation hitting 60fps undoubtedly looks smooth, but it is just that, *non-interactive*. How do we account for this desired interactive quality?

Thankfully, the program responsible for *executing* compiled code helps us out. This program is called the *engine*. It gets help from its parent program, the *runtime*. Together they provide an interactive system that executes code in realtime. The below example code isn't real, but if I were to code the relationship in HTML, it would look like this:

```
<runtime>
    <engine></engine>
</runtime>
```

To take advantage of the runtime and engine, we just need to get an idea of how they work together. This allows us to author code that reacts interactively as the engine executes it in realtime.

The JavaScript runtime in a web browser has four core components where the engine has only one:
1. engine - does work
    - *stack* - organizes the engine's work
2. *runtime APIs* - does special work the engine cannot
3. *event queue* - organizes the results of special work as packages of main work
4. *event loop* - gives the engine queued packages

We can update our example HTML from before:

```
<runtime>
    <engine>
        <stack></stack>
    </engine>
    <apis></apis>
    <queue></queue>
    <loop></loop>
</runtime>
```

Here is a 3D representation of the relationship between the runtime and engine components:

![alt text](../assets/visual-todo-placeholder.jpg "The Event Loop Machine")

*^ The Event Loop Machine ^*

During compilation time, just before execution time, the engine quickly does three things with our code:
1. reads
2. reorganizes
3. optimizes

These steps enable the engine to run fast and effeciently during execution time. This is when the runtime and engine work together to achieve two main goals:
1. clear the stack
2. clear the event queue

Once these two goals are met, the engine can relax. It relaxes until new work is added to its stack. How does it get new work though? Do you remember the input triggers we covered in the Behavior section? Bingo. As a reminder, these input triggers, often called *events*, are:
1. user interaction (tap, click, hit, hover, etc.)
2. environment (layout resizing, operating system, device sensor, etc.)
3. time (delays, schedules, etc.)

When one or more of these events occur, the runtime APIs do their special work and then update the event queue. Since the event loop has been cycling while the engine was relaxing, it now notices the updated event queue. Consequently, it takes one item from the queue and puts it on the stack. You guessed it, now the engine has more work to do. The event loop is the foundational piece that helps us make our coded creations interactive. Thanks event loop.
