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

During the compilation process, the *engine* quickly reads our code, optimizes it, and reorganizes it in preperation for faster execution time. During execution time, there are two main goals:
1. The *engine* tries to clear its *stack*
2. The *event loop* tries to clear its *event queue*

Once these two goals are met, the *runtime* and *engine* just chill. They simply wait for input triggers to occur. Remember the input triggers we covered in the *Behavior* section? Same ones. Again, these input triggers, often called *events*, are user interaction, environment, and/or time.

Here is the process:
1. Units of work are read by the *engine*
2. The *engine* adds this work to its *stack* to organize its execution
2. *Runtime APIs* specialize in certain work and do it for the *engine* instead
3. The *event queue* is updated when specialized work completes
4. The *event loop* cycles in an effort to move any queued work to the *engine*'s *stack*
5. Once the *event queue* is empty *event loop* is freed and it resumes its cycle
6. A single item from the *event queue* (if present) is then added it to the *stack*


The process is sequential and cyclical.

- host environment
- stack > web api (async thread work) > task queue > event loop > stack
