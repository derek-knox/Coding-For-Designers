## Frame Rate

We know computers are dumb and fast. Some computers are faster than others however. How do we ensure the code we author will execute well on any given computer? To do so, we need to author our code with a target *frame rate* in mind.

A frame rate is simply the amount of frames that are shown in a second. A frame is a single rendered image. Frames shown back to back over time create the illusion of motion. Common target frame rates are:
- 30fps (video)
- 60fps (apps/games)
- 90fps (AR/VR)

As you likely guessed, a high frame rate results in the illusion of smooth motion. A slow frame rate results in an illusion of less smooth motion. The human eye typically needs 24fps or more for a smooth perception of motion to be recognized. Within an interactive medium like applications or games, 60fps is a common target.

It is worth noting that if your application or game does not change often or lacks animation, you will likely be able to get away with 10fps, 5fps, or lower. The more motion and animation you have however, the more likely you'll want to target 60fps. Generally, the richer and more fluid the experience, the greater the target frame rate.

An application or game that targets 60fps must render a new image every 16.6 milliseconds. Damn, that's fast.

![1 second = 1000 milliseconds so 1000ms/60fps = 16.6ms per frame](../assets/img/visual-todo-placeholder.jpg?v1.11 "1 second = 1000 milliseconds so 1000ms/60fps = 16.6ms per frame")

Milliseconds might be intimidating at first, but you'll get used to them quickly. In fact, you likely already have an intuitive understanding of milliseconds. Do you ever feel an  animation within an application or game is too slow or too fast? The milliseconds chosen as the animation time is the culprit.

You usually don't have to worry about the 16.6ms window however. I present it here simply for you to keep it in the back of your mind.

In the future, if your application's animation and motion seems to have hiccups or it looks janky, then you likely have a problem or two. Typically this means your code, or a third-party's code, is: 
1. doing too much work each frame
2. doing work inefficiently

We'll revisit these two problems later, but just be aware of them.

So a frame rate is vital for percieved motion, that's great. But how do we actually allow interactivity to be reflected in this motion? *Event loop* time.
