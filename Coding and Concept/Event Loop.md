# Event Loop

An interactive application or game is simply the manifestation of a target 60+ rendered images, shown in sequence, per second. The only reason this frame rate is important is so the user(s) experience is perceptually fluid and responsive. If fluidity and responsiveness were not a perceptual goal, our application or game could leverage 10fps, 5fps, or an even lower target frame rate. More often than not however we desire the interactive content we create to be extremely fluid and responsive. 60fps? Yes please.

A non-interactive animation hitting 60fps undoubtedly looks smooth, but it is just that, *non-interactive*. How do we account for this desired interactive quality?

Thankfully, the program responsible for *executing* compiled code helps us out. This program is called the *engine*. A parent program called the *runtime* hosts the engine. Together they provide an interactive system that executes code in realtime. The below example code isn't real, but if I were to code the relationship in HTML, it would look like this:

```
<runtime>
    <engine></engine>
</runtime>
```

To take advantage of the runtime and engine, we just need to get an idea of how they work together. This allows us to author code that reacts interactively as the engine executes it in realtime.

The JavaScript runtime in a web browser is composed of four core components where the engine has only one:
1. *engine*
    - *stack*
2. *runtime APIs*
3. *event queue*
4. *event loop*

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

During compilation time, just before execution time, the *engine* quickly takes three steps on our code:
1. reads
2. reorganizes
3. optimizes

Combined, these steps prepare the *engine* so execution time is super fast. During execution time, the *runtime* and *engine* have two main goals:
1. clear the *stack*
2. clear the *event queue*

Once these two goals are met, the *engine* can relax. It relaxes until new work is added to its *stack*. How does it get new work though? Do you remember the input triggers we covered in the *Behavior* section? Bingo. As a reminder, these input triggers, often called *events*, are:
1. user interaction (tap, click, hit, hover, etc.)
2. environment (layout resizing, operating system, device sensor, etc.)
3. time (delays, schedules, etc.)

When one or more of these events occur, the *runtime APIs* update the *event queue*. Since the *event loop* has been cycling while the *engine* was relaxing, it now notices the updated *event queue*. Consequently, it takes one item from the queue and puts it on the *stack*. You guessed it, now the *engine* has more work to do. The *event loop* is the foundational piece that helps us make our coded creations interactive. Thanks *event loop*.

Let's review the process one more time, in small discreet steps:
- the *engine* enters "scan" mode
- the *engine* scans our code looking for units of work
- when a unit of work is found, the *engine* adds it to the *stack*
- when work is on the stack, the *engine* enters "execute" mode
- the *engine* executes the top-most unit of work on the *stack*
- *runtime APIs* specialize in certain work and do it for the *engine* instead
- the *event queue* is updated when specialized work completes
- the *event loop* cycles in an effort to move any queued work to the *engine*'s *stack*
- once the *event queue* is empty *event loop* is freed and it resumes its cycle
- a single item from the *event queue* (if present) is then added it to the *stack*
