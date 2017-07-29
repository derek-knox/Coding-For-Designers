# Authoring, Compiling, and Executing

As mentioned previously there are three distinct timeframes when code exists. In order, these are:
1. authoring time
2. compile time
3. execution time

These distinct timeframes are useful in understanding how the static code in a text file gets transformed to enable a dynamic and interactive creation to exist in realtime. We will also touch on why this transformation even needs to occur.

*Authoring time* is pretty self-explanatory right? It is the time when we are authoring code. That's it. We have a text editor program of some kind open, and we are typing or pasting into it. Simple as that. Some programs even exist, like Unity for example, that enable a more visual programming approach. This simply means that the program has some amount of UI interaction that enables you as the author to *generate* code in a non-text based way. Admittedly, this is often more fun than text-based programming... but there is a catch.

Inevitably, these visual tools are limiting as they do not allow you to pull off exactly what you want. This is why we're concentrating on authoring custom code in a text editor. We get *ultimate control* as to how something works because *we get to write the code*.

After we have authored the code, we need to "run" or "execute" it. Executing it helps us confirm that it actually does what we want in realtime. Before we can do this however, a step needs to be taken that transforms our static authored code into code that can be executed. Welcome to *compile time*.

Compile time is how we get from our authored *static* code to *dynamic* code that manifests as an interactive application or game. We won't go into the details of this step as it is complex. Feel free to research deeper. All you need to know is that this step exists so *we* can use words *we* understand instead of coding in binary, the only thing computers fundamentally understand. A prime example is how we use English words (and English abbreviations) within the programming language JavaScript.

In essence, some smart and nerdy authors wrote a *compiler program* that compiles and converts a high-level programming language like JavaScript (easier for us humans to use) to lower-level languages (easier for super-nerdy humans to use) to binary (easier for super-super-nerdy humans and computers to use).

![alt text](../assets/visual-todo-placeholder.jpg "Author > Compile > Run")

The output of this compilation process results in code that the computer *executes* in realtime. This process manifests as an interactive user interface within an application or game.

With Unity, the process is:
1. *Author* code in a text editor and/or with Unity's built-in UI that generates code
2. Click the "Build" button to *compile* the authored code into a single packaged file
3. *Execute* this file's code on the target operating system in realtime
    - Remember file extensions? ;)

With JavaScript in a web browser, the process is:
1. *Author* code in a text editor and/or a tool that helps generate code
2. View a web page that hosts your authored JavaScript code, the browser *compiles* it on the fly
3. This just-in-time compiled code is automatically *executed* in realtime 

To recap, we write in a high-level language using English words and abbreviations. This is author time. Then a compiler program converts the code we humans can understand into code the computer understands. This is compile time. Finally, if the conversion process has no errors, the result is an application or game that is interactive. This is execution time.

How is execution time actually interactive though? One or more users could take any number of actions within our application or game at any given moment. We can't possibly handle all these potential scenarios in our code, can we? Thankfully, it is much simpler than that. We just need to understand the *frame rate* and the runtime *event loop*.