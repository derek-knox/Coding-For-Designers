# Client and Server

Clients and servers are computers that communicate and work together over a network. The internet is one such network that facilitates this communication. Some of these computers are clients and some are servers. Sometimes a computer is both a client and a server. The distinction is simple. A client asks for data and the server provides it. The network between them is the communication channel.

The details of how the internet facilitates this communication is elegant and impressive, but not a focus of this book. I highly recommend Introduction to Networking by Charles Severance if you want to dig deeper, but it is not required reading to move forward. Just know that the internet enables a client computer and a server computer to talk.

Let's look at two example programs that utilize the internet to help solidify your understanding. One program will be a web browser and the other an internet-connected mobile game. Let's just say that each example runs on a smartphone. Both the browser and the game are on the client, the smartphone. Each leverage distinct APIs to request information from distinct and remote computers, the servers. Pretty simple relationship really.

![alt text](../assets/visual-todo-placeholder.jpg "Client and Server")

*^ client and server graphic ^*

You already know that a web browser may be used to access a particular website or web app. While the site or web app is running, its code can make *additional requests* so the server provides additional info. For example, when a sport statistics app is starting up (or a button is hit), the app could use an API to get the most up-to-date scores and stats. An updated version of the app is not required. Instead, an API interaction provides updated information. This is super useful.

An internet-connected game works exactly the same way. When it starts up (or a button is hit), it could make an API request to get current world-wide player rankings for the game. Additionally, if the designers and code authors designed the game in such a way, they could make different API requests for new worlds, levels, characters, etc. No update required. Pretty damn cool.

A server, if you didn't guess already, is also responsible for providing a client web browser the *initial* HTML, CSS, and JavaScript for a website or web app. If too many people try to access the same data at the same time, the server can crash. It is worth noting that each client is actually getting a copy of the data to reconstruct in its browser. Typically, a crash occurs because the server software can't properly provide the various clients the copies fast enough. I mention this simply because many don't grasp the fact that the client reconstructs what is on the server.

Having talked about HTML, CSS, and JavaScript at solely a high level thus far, now is a great time to venture. We'll do so by exploring the anatomy of each of these three file types.
