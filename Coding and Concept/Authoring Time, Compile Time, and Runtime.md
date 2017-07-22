# Authoring Time, Compile Time, and Runtime

As mentioned previously there are three fundamental timeframes in which code lives. In order, these are:
1. authoring time
2. compile time
3. runtime

These distinct timeframes are useful in understanding how the static code in a text file gets transformed to enable a dynamic and interactive creation to live. We will also touch on why this transformation even needs to occur.

*Authoring time* is pretty self-explanatory right? It is the time when we are authoring code. That's it. We have a text editor program of some kind open, and we are typing or pasting into it. Simple as that. Some programs even exist, like Unity for example, that enable a more visual programming approach. This simply means that the program has some amount of UI interaction that enables you as the author to *generate* code and/or wire behavior in a non-text based way. Admittedly, this is often more fun than text-based programming... but there is a catch.

Inevitably, these visual tools will be limitied and not allow you to pull off exactly what you want. This is why we're concentrating on authoring custom code in a text editor. We get *ultimate control* as to how something works, because *we get to write the code*.

After we have authored the code to do what we are trying to do, we need to "run it". Running it helps us confirm if it actually does what we want in *realtime*, or more specifically during *runtime*. Before we can do this however, a step needs to be taken that transforms our static code into runtime code. Welcome to compile time.

Compile time is how we get from our authored *static* code to *dynamic* interactive code. We won't go into the details of this step as it is complex. Feel free to research deeper. All you need to know is that this step exists so *we* can use words we understand (English words within the programming language JavaScript for example) instead of coding in binary, the only thing computers fundamentally understand. In essence, some smart and nerdy authors wrote a *compiler program* that can compiles and converts a high level programming language like JavaScript (easier for us humans to use) to lower-level languages (easier for computers to use).

![alt text](../assets/visual-todo-placeholder.jpg "Author > Compile > Run")

The output of this compilation process results in *runtime* code that works the way we programmed it to (unless we made mistakes). For our purposes, this manifests into an interactive user interface within a computer screen.

