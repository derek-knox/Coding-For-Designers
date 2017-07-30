# Event Loop

An interactive application or game is simply the manifestation of a target 60+ rendered images, shown in sequence, per second. The only reason this frame rate is important is so the user(s) experience is perceptually fluid and responsive. If fluidity and responsiveness were not a perceptual goal, our application or game could leverage 10fps, 5fps, or an even lower target frame rate. More often than not however we desire the interactive content we create to be extremely fluid and responsive. 60fps? Yes please.

A non-interactive animation hitting 60fps undoubtedly looks smooth, but it is just that, *non-interactive*. How do we account for this desired interactive quality?

Thankfully, the program responsible for *executing* compiled code helps us out. This program is called the *engine*. A parent program called the *runtime* hosts the engine. The below example code isn't real, but if I were to code the relationship in HTML, it would look like this:

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

![alt text](../assets/visual-todo-placeholder.jpg "Event Loop")

*^ Stack, Queue, and Event Loop ^*

The process is sequential and cyclical.

- host environment
- stack > web api (async thread work) > task queue > event loop > stack
