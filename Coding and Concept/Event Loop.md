# Event Loop

An interactive application or game is simply the manifestation of a target 60+ rendered images, shown in sequence, per second. The only reason this frame rate is important is so the user(s) experience is perceptually fluid and responsive. If fluidity and responsiveness were not a perceptual goal, our application or game could leverage 10fps, 5fps, or an even lower target frame rate. More often than not however we desire the interactive content we create to be extremely fluid and responsive. 60+fps? Yes please.

A non-interactive animation hitting 60fps undoubtedly looks smooth, but it is just that, *non-interactive*. How do we account for this desired interactive quality?

Thankfully, the program responsible for *executing* compiled code to a realtime interactive interface, does it for us. This program is usually referred to as "the runtime". We just need to grasp how the runtime works so we can have our code execute in realtime to provide interactivity. The JavaScript runtime in a web browser uses an *event loop*.



- host environment
- stack > web api (async thread work) > task queue > event loop > stack
