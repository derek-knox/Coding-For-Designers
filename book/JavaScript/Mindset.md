## Mindset

The five notions below will influence your way of thinking about JavaScript throughout the rest of this book and beyond. They will simultaneously explain useful tactics for reading and authoring code. For brevity, I will use the term coding to encapsulate reading and authoring moving forward. The five notions are:

1. Thinking in three zoom levels
2. Functions are your friend
3. Prototype to learn
4. Don't repeat yourself
5. Refactor early and often

The first, *thinking in three zoom levels* will help you determine what to focus on at a given time. *Functions are your friend* will highlight why functions are so paramount. *Prototype to learn*, *Don't repeat yourself*, and *refactor early and often* are programming mantras found in *The Pragmatic Programmer* by Andrew Hunt and David Thomas. They encourage you to experiment, author reusable code, and aggressively refine it. Combined, the five notions will influence your actions when coding.

### 1. Thinking in Three Zoom Levels

There are three zoom levels you should consider when coding:

1. Scope tree
2. Statement pattern
3. Value resolution

These zoom levels are useful at authoring time (within code files) and execution time (within the program). This three zoom level approach is a tactic for navigating and understanding code more quickly.

*It is worth noting that any text editor is usable for coding. Dedicated code editors however are designed specifically to make our coding efforts less painful and much more efficient. Ask online or local programmers that you trust to determine which code editor is best for you. SublimeText, Visual Studio Code, and WebStorm (among many others) are all great editors currently.*

#### Zoom Level 1 - Scope Tree

Whenever you are starting to read or author code, place yourself at zoom level 1. Take note that your editor, authoring environment, and debugger (we'll cover this guy later) may each be of help at this step.

When reading, the goal is to scan for functions. You are looking at both their names and their nested structure. JavaScript programs are simply a tree of functions and thus a tree of scopes. Identifying the names and nesting of functions helps you understand the structural shape of the program. Grasping the program shape (or a subset of the program shape) helps you understand where you want to zoom in next.

When authoring, the goal is the same. If starting with no code you'll lack program shape, so this is only important when adding new code. When code already exists, this effort determines the target location for the code you plan to add. It can be difficult to select the location correctly the first time so don't stress. This fact is why we'll explore the *refactor early and often* mantra soon.

Grasping the function names and their nested structure (program shape) is vital. We will cover their three fundamental use cases in the *Functions* section that soon follows. Once a particular function is of enough interest, you enter zoom level 2.

#### Zoom Level 2 - Statement Pattern

Zoom level 2 is all about prepping yourself to get answers in zoom level 3. Answers in this context are synonymous with values. Once you have values, they can be understood and operated on. Values ensure a function can actually do work.

We will cover the specific statement patterns to look out for in the *Statements* section that soon follows.

#### Zoom Level 3 - Value Resolution

At zoom level 3 we have determined the statement pattern for a given code statement. Once determined, this informs the steps we take in resolving the values of it. Again, functions can't do work unless values exist. Since a program is a dynamic and living thing, these values can be different at different times. We take the three zoom level approach to help us determine the exact values at a given time.

The takeaway is that the three zoom levels help you navigate and understand code more quickly.

### 2. Functions are your Friend

We will continue to reinforce the importance of functions throughout this book. They enable interactive code and the respective manifestation of the amazing games, tools, and software we love, to exist. It is in your best interest to make functions your friend.

Each function has one of three fundamental use cases in JavaScript. Remember that a function still encapsulates its own scope regardless of use case. Each use case provides a means to a desired end. These use cases are:

- Function as organizational unit
- Function as instantiatable unit
- Function as reusable work unit

The takeaway is that functions are paramount to a program. Without them, a program is of no use. We'll cover these three use cases in great detail in the *Functions* section below.

### 3. Prototype to Learn

Code is virtual not physical. We must use this reality to our advantage. Authoring code and throwing it away is cheap and easy. We can undo and redo in an instant. This quality enables us to iterate quickly toward a solution or desired result with minimal consequence. Cheap and easy is not to be confused with being invaluable however. Prototyping is extremely valuable as you can explore a solution space quickly and learn. Learning through quick iteration eventually manifests as a clear path to follow. Following this path either leads to a solution or surfaces a new idea to prototype against.

The takeaway is that prototyping is how we experiment when coding. Taking shortcuts and ignoring best practices is OK here. Only after we have a working prototype are we concerned with not taking shortcuts and following best practices. Prototypes require minimal effort but result in great value. Completing a prototype ensures we have something that works. Right and better are for later.

### 4. Don't Repeat Yourself

Programming enables us to break the restrictions of the physical world. Every single day we do work to get results. Often times we've done this work thousands of times before. A few things I do everyday that fit this description include eating, drinking water, and reading. In each example I use energy to accomplish work in an effort to get a result. The work takes some amount of time before I get the result. The result is not instantaneous. Regardless of how good or fast I get at the tasks that comprise the work, the result is never be instantaneous.

We lack this restriction in the virtual world. We can get results instantly. In software we can codify the work. Once codified we can simply execute a particular function to do work and to get a desired result. The same effort that was initially required no longer exists. It is codified. We get the result in a fraction of the time.

The takeaway is that we strive to create functions that are reusable. We briefly covered this idea earlier in the *Elements and Elements* section. Additionally, we provided a concrete example in the *Sync and Async* section with the `changeBackgroundColor(newColor)` function. We will further explore this idea and more concrete examples in the *Functions* section.

### 5. Refactor Early and Often

As previously mentioned, it can be difficult to select the correct location the first time you add code. Additionally, it can be difficult enough to get code to work through prototyping. It can even be difficult to name identifiers well. Thankfully the code is not set in stone. It is easy to move and rename. We are working in the virtual not physical world after all. Use this to your advantage. Our editors help us accomplish this faster while minimizing error.

The core benefit of refactoring is that it enables us to improve code readability. Remember the three zoom levels? Refactoring helps us here. Code complexity can also be reduced which makes it more understandable to us, other coders, and our future self.

Take note that refactoring requires that the correct work still gets done. In other words, the functional behavior remains where the implementation of that behavior may differ. This idea parallels the *Work. Right. Better.* mantra in that refactoring leads to right and better. It is worth noting however that refactoring is a susceptible step in that it can lead to bugs. A bug is code that unintentionally prevents work or that does work incorrectly. We'll cover this more and explore concrete examples in the *Errors* and *Debugging* sections.

The takeaway is that code is a living thing. It can be molded into a more perfect shape. Code can be made more understandable during authoring time while becoming more efficient during execution time. By refactoring early and often we author more readable, less complex, and more efficient code.