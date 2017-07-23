# Frame Rate and the Event Loop

We know computers are dumb and fast, but some computers are dumber and slower than others. To ensure the code we author will run well on dumber and slower computers, we often author our code with a target *frame rate* in mind.

A frame rate is simply the amount of frames that are shown in a second. A frame is a single rendered image. Frames shown back to back over time create the illusion of motion. Common frame rates are:
- 30fps (movies)
- 60fps (games)
- 90fps (VR/AR/MR)

As you likely guessed, a high frame rate results in smoother motion where a slow frame rate results in less smooth motion. The human eye typically needs 24fps or more in order for a smooth perception of motion between frames. Within an interactive medium like applications or games, 60fps is a common target.

It is worth noting that if your application does not change much at all during runtime, you may be able to get away with something as small as 5fps or 10fps. The more motion and animation you have however, the more likely you'll want to target 60fps.

In an application or game that targets 60fps, this means the application or game must render a new image every 16.6 milliseconds. That's fast.

*^ 1 second = 1000 milliseconds so 1000ms/60fps = 16.6ms per frame ^*

This might sound scary if you don't work with milliseconds, but you'll get used to them quickly, especially when defining animation transition times. Remember however that computers are fast so you usually don't have to worry about this 16.6ms window. I present it here simply for you to keep this in the back of your mind. In the future, if your application's animation and motion seems to have hiccups or it looks janky, then you likely have one of two problems. Typically this means your code or a 3rd-party's code is: 
1. doing too much each frame
2. doing work inefficiently

We'll revisit these two problems later, but just be aware of them.

