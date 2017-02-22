## Interfacing

How do all these components talk to each other if different people wrote them? In order for components to be useful by coders, other than the original author, they need to provide an *application programming interface*. Yea, that is lengthy. Coders instead just say API (each letter pronounced individually). An API simply defines how components, or code in general, may be used by another coder. An API is synonymous with *interface*. An API, an interface, allows components to talk to each other.

Think of driving a car. It also has an interface. The car's main interface, its gas pedal, brake pedal, and steering wheel, are physical. You touch them to make them work. A component's interface is virtual, so you code it to make it work. An interface is an awesome trade-off. You gets ease-of-use while the underlying complexity of making it work remains the author's responsibility.

Think about it. As a user of a car, you do not need to know all the details of how the engine works to use it. The "author(s)" take responsibility. Similarly with components, you just use the API provided to gain benefit. It is a pretty solid trade.
