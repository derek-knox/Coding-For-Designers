Have you ever heard of the Pareto principle? It states that roughly 80% of the output come from 20% of the input in a system. Though this is not a hard and fast rule for all systems, it appears often enough to be a respected truth.

The aim of this chapter is to introduce JavaScript with this 80/20 notion in mind. Though both numbers are rough, the takeaway is that you can be productive in JavaScript by knowing and using a small and specific subset of the language. This approach is in contrast to knowing all its keywords and various subsystems. I recommend learning them later if you are interested, but you don't need them all to be productive.

The subset we'll focus on will help you author code that works. As you saw in *Work. Right. Better.*, this focus does not mean the code is not right. The Work. Right. Better. mantra simply provides a path for improving code authoring over time.

Prior to introducing this subset and detailing its parts we'll cover a *mindset* to adopt. This mindset will further prime and reinforce the mental model you've developed thus far.

## Mindset

This section covers a mindset, a way of thinking, for improved reading and authoring of JavaScript. These five ideas below will influence your way of thinking throughout the rest of this book and beyond:

1. Thinking in three zoom levels
2. Functions are your friend
3. Don't repeat yourself
4. Refactor early and often
5. Prototype to learn

The first, *thinking in three zoom levels* will help you determine what to focus on at a given time. *Functions are your friend* will highlight why functions are so paramount. *Don't repeat yourself*, *refactor early and often*, and *prototype to learn* are programming mantras found in *The Pragmatic Programmer* by Andrew Hunt and David Thomas. In order they encourage you to author reusable code, agressively refine it, and experiment. Combined, the five ideas will influence your action (reading and authoring) as your mental model will influence high-level understanding.

*Note about editors and authoring environments - pool your 5-7 local devs and online in search of diverse opinions. new and better tools are released so pick the one that's best for you based on opinions you trust. remember however that you can use the most basic text or file editor to read and author code, but certain editors will make your life much less painful in comparison*

### Thinking in Three Zoom Levels

There are three zoom levels you should consider when reading and authoring code:

1. Scope tree
2. Statement pattern
3. Value resolution

Whenever you are starting to read or author code, place yourself at zoom level 1x. Take note that your editor or authoring environment may help you here.

When reading, the goal is to scan for functions. You are looking at both their names and their nesting structure. JavaScript programs are simply a tree of functions and thus a tree of scopes. Identifying the names and nesting of functions helps you understand the structural shape of the program. Grasping the program shape (or a subset of the program) helps you understand where you want to zoom in next.

When authoring, the goal is also to grasp the program shape. If starting with no code you'll lack program shape, so this is only important when adding new code. When code already exists, this same scanning effort helps you understand where to zoom in next. As you might guess, being organized is extremely valueable when programming. Being organized helps ensure everyone wins. When adding code it's important to try to do so in the most logical place. It's almost impossible to get it right the first time and that's why we'll explore the *refactor early and often* mantra soon.

...

### Functions are your Friend - (Reusability)
### Don't Repeat Yourself - (Pragmatic Programmer)
### Refactor Early and Often - (Pragmatic Programmer, tie in to distinct Services, Views, Models, etc) 
### Prototype to Learn - (Pragmatic Programmer, cheap but valueable, speed, iteration)

- look at the code through three zoom levels
	- focus on patterns then details (this takes time where each zoom level is more detailed than the first)
		- zoom 1x - tree of functions, tree of scopes
			- trees can be huge and its valuable for you (and any developer) to focus on a specific scope or small subset of function scopes as its really difficult to understand them all, especially during execution time!
			- pros even have a hard time and its a limitation of being human (our short term memory...). As a result
				1) flatter trees/hierarchys
				2) small specific functions are desireable.
					These two aspects, though I can't prove it, likely inspired many advanced/senior programmer claims that functional programming is a programming style worth pursuing. Again the computer doesn't care, but we as humans do and that's why these ideas mean more to us.
		- zoom 2x - statement pattern (80/20 the most common/important statement patterns for doing work)
		- zoom 3x - values 
			- literals
			- identifier
				- Built-in
					- Language
					- Environment
				- Third-party
				- Custom
	- take an example of some code used in a popular library and break it down in these three zoom levels (3 examples as expectation of this chapter - here's a thing and how it works and now here are three examples)
- may or may not be worth mentioning, but 'task' as statement and 'work' as function (usually one or more tasks)
- don't mention this explicitly, but use the term 'function' vs 'method' everywhere (KISS - ensure entire book respects this)
- loopless programming (find clever way to not talk about 'loops' but loop/iteration behavior (maybe conditional processing of each item in a collection?) and using JS built-in functions to accomplish the work)
	- *maybe make a grid/graph/chart showcasing this
	- map (conversion aka convert each thing to this other thing, processes entire collection)
	- reduce (reduction aka convert all the things into this one thing, processes entire collection)
	- filter (filtration aka select specific things, processes entire collection)
	- find (selection aka select a specific thing, processes collection until target found or search exhausted)
	- * use these functions with examples of software design/tools to showcase what they're (likely) doing under the hood - this will help communicate the value of using them within a common function of the tooling/software they likely use
- find Kyle Simpson quote on "80/90% of my code doesn't use 'this'..."
- worth mentioning that files are simply another way for us humans to group code in more understandable and digestable units
	- if computers and the networks on which they rely didn't help the code get transmitted quicker, we wouldn't even have to worry about ensuring our code was encoded in a way that is beneficial to network transmission of bits and bytes. Thankfully, just like coders who created the compilation programs, certain coders created tools that *minify* (an encoding) code for better transmission across networks like the internet.
	- humans first, computers second (we have tools that automate improvement for computers, the focus is for us first)
- abstraction... neocortex already does it and is one of the fundamental things that makes us human. Stretches our brain a bit, but it is built for abstraction. The act of focusing on reuse, recycling, efficiency, and clean-up will influence you to take a right/better approach as you try to make code work. Eventually you'll start to get the best of all possibilities.
- *random idea, for all the books that I mention, maybe have a psuedo shelf where the one(s) recently mentioned are in focus so I can have a visual to show off all the books


