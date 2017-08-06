# Client and Server

Clients and servers communicate and work together over a network. The internet is one such network that facilitates communication between computers. Some of these computers are clients and some are servers. Sometimes a computer is both a client and a server. The distinction is simple. A client asks for something and the server provides it. The network between them provides the path for communicating.

The details of how a network facilitates this communication isn't a focus of this book. If you want to dig deeper, then I highly recommend Introduction to Networking by Charles Severance. Just know that APIs enable a client computer and a server computer to talk.

Let's look at two example programs: a web browser and a mobile internet-connected game. Each example will run on a smartphone. The browser and the game are on the client, the smartphone. Each leverage an API to request information from a remote computer, the server.

![alt text](../assets/visual-todo-placeholder.jpg "Client and Server")

*^ client and server graphic ^*

You already know that a web browser may be used to access a particular website or web app. While the site or web app is running, its code can make *additional requests* so the server provides more info. For example, when a sport statistics app is starting up, it could use an API to get the most up-to-date scores and stats. An updated version of the app is not required to get up-to-date information. Instead, an API interaction provides updated results.

A game works the same way. When it starts up, it makes an API request to get current world-wide rankings for the game. Additionally, if the designers and code authors designed the game in such a way, they could make API request for new world, levels, characters, etc. No update required. Pretty cool.
