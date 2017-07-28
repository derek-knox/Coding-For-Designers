# Event Loop

An interactive application or game is simply the manifestation of a target 60+ rendered images, shown in sequence, per second. The only reason this frame rate is important is so the user(s) experience is perceptually fluid and responsive. If fluidity and responsiveness were not a perceptual goal, our application or game could leverage the aformentioned 10fps, 5fps, or a lower target frame rate. More often than not however we desire the interactive content we create to be extremely fluid and responsive. 60+fps? Yes please.

A non-interactive animation hitting 60fps undoubtedly looks smooth, but it is just that, *non-interactive*. How do we account for this desired interactive quality?

The answer is quite simple actually. Depending on the runtime, or more specifically, the program that is responsible for taking our static authored code through the compilation process to the realtime interactive result. 


Each programming language has its specific approach, but JavaScript within a web browser has a common and specific one.

Thankfully, the programming language we are programming in has us covered, namely JavaScript. 

- host environment
- stack > web api (async thread work) > task queue > event loop > stack
