# Authoring Time, Compile Time, and Runtime

As mentioned previously there are three distinct timeframes when code exists. In order, these are:
1. authoring time
2. compile time
3. runtime

These distinct timeframes are useful in understanding how the static code in a text file gets transformed to enable a dynamic and interactive creation to live. We will also touch on why this transformation even needs to occur.

*Authoring time* is pretty self-explanatory right? It is the time when we are authoring code. That's it. We have a text editor program of some kind open, and we are typing or pasting into it. Simple as that. Some programs even exist, like Unity for example, that enable a more visual programming approach. This simply means that the program has some amount of UI interaction that enables you as the author to *generate* code in a non-text based way. Admittedly, this is often more fun than text-based programming... but there is a catch.

Inevitably, these visual tools will be limitied and not allow you to pull off exactly what you want. This is why we're concentrating on authoring custom code in a text editor. We get *ultimate control* as to how something works because *we get to write the code*.

After we have authored the code, we need to "run it". Running it helps us confirm that it actually does what we want in realtime aka *runtime*. Before we can do this however, a step needs to be taken that transforms our static code into runtime code. Welcome to *compile time*.

Compile time is how we get from our authored *static* code to *dynamic* interactive code that manifests as an interactive application or game. We won't go into the details of this step as it is complex. Feel free to research deeper. All you need to know is that this step exists so *we* can use words *we* understand instead of coding in binary, the only thing computers fundamentally understand. A prime example is how we use English words within the programming language JavaScript.

In essence, some smart and nerdy authors wrote a *compiler program* that compiles and converts a high-level programming language like JavaScript (easier for us humans to use) to lower-level languages (easier for computers to use).

![alt text](../assets/visual-todo-placeholder.jpg "Author > Compile > Run")

The output of this compilation process results in *runtime* code that works the way we programmed it to (unless we made mistakes). For our purposes, this process manifests as an interactive user interface within an application or game.

To recap, we write in a high-level language using its reserved keywords and English. This is author time. Then a compiler program converts the code we humans can understand into code the computer understands. This is compile time. Finally, if the conversion process has no errors, the result is an application or game that is interactive. This is runtime.

How is runtime actually interactive though? One or more users could take any number of actions within our application at any given moment. We can't possibly handle all these potential scenarios in our code, can we? Thankfully, it is much simpler than that. We just need to understand the *frame rate* and the runtime *event loop*.
