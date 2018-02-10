## Interfacing

It wasn't important until now to tell you what the aforementioned *API* of runtime APIs stands for. Now is the time. Welcome to *Application Programming Interface*. Yea, that is a mouthful. Coders instead just say API (each letter pronounced individually).

An API is just an interface. The doorknob of a door is an interface. The steering wheel of a vehicle is an interface. The keys of a virtual keyboard are too. Interfaces provide a way to interact. The doorknob and steering wheel are physical interfaces designed for humans. A virtual keyboard is a digital interface also designed for humans. An API is a programming interface designed for code. An API allows code to interact with other code, this is the takeaway.

As a code author, you get ease-of-use while the underlying complexity is the code designer's responsibility. Think about it. As a driver of a vehicle, you do not need to know all the details of how the engine works to use it. The designers take that responsibility. Similarly with code, you just use the API provided to gain benefit. This is a pretty solid trade.

In the last section we saw one API in action, the built-in `setTimeout` function. We wrote our code to interact with that API by giving it two argument values. Behind the scenes, the runtime wired up and provided the functionality we expected. Both you and I don't really care how the work is done as long as it gets done. This is the trade-off an API provides, a simpler way to do work. APIs rock!

Earlier in the *Constructs and Components* section we covered built-in, third-party, and custom components. Naturally, they each provide various APIs. As previously mentioned, we can create useful code for others to use too. Another author using our code APIs doesn't have to care about how the work actually gets done. They get the same trade-off as us, a simpler way to do work.

As you gain coding and programming experience, you'll memorize certain built-in and third-party APIs. This translates to improving your authoring speed. Don't worry about being slow when you start out, you'll get better in time.

This might sound weird at first, but some APIs exist on a different computer than the one your program runs on. Whoa. Have you ever wondered how a particular app or game can provide new content without actually updating? Welcome to the *client-server model*.
