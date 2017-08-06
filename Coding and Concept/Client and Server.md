# Client and Server

Clients and servers are computers that communicate and work together over a network. The internet is one such network that facilitates this communication. Some of these computers are clients and some are servers. Sometimes a computer is both a client and a server. The distinction is simple. A client asks for data and the server provides it. The network between them is the communication channel.

The details of how the internet facilitates this communication is elegant and impressive, but not a focus of this book. That said, I highly recommend Introduction to Networking by Charles Severance if you want to dig deeper. Reading it is not required to move forward. Just know that the internet enables a client computer and a server computer to talk.

Let's look at two example programs that utilize the internet to help solidify your understanding. One program will be a web browser and the other an internet-connected mobile game. Let's just say that each example runs on a smartphone. Both the browser and the game are on the client, the smartphone. Each leverage distinct APIs to request information from distinct and remote computers, the servers. Pretty simple relationship really.

![alt text](../assets/visual-todo-placeholder.jpg "Client and Server")

*^ client and server graphic ^*

You already know that a web browser may be used to access a particular website or web app. While the site or web app is running, its code can make *additional requests* so the server provides more info. For example, when a sport statistics app is starting up (or a button is hit), it could use an API to get the most up-to-date scores and stats. An updated version of the app is not required. Instead, an API interaction provides updated information.

An internet-connected game works exactly the same way. When it starts up (or a button is hit), it could make an API request to get current world-wide rankings for the game. Additionally, if the designers and code authors designed the game in such a way, they could make a different API request for new worlds, levels, characters, etc. No update is required to get updated content. Pretty cool.

Later when you use JavaScript you will take advatage of this.
