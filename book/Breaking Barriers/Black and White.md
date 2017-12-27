## Black and White

Get out your sketchbook and try to come up with your own code that *represents* a 2x2 black and white image. Seriously, try it. Feel free to use the visual output states below as a guide.

![alt text](../assets/img/visual-todo-placeholder.jpg "Grid of 2x2 examples")

*^ Grid of 2x2 examples ^*

Your solution may differ from mine. This is totally fine. The goal here is simply to demonstrate how we can *visualize a code*. This is a primitive example with admittedly uninteresting output. Regardless, it provides one example of how to visualize a code.

![alt text](../assets/img/visual-todo-placeholder.jpg "Grid of 2x2 examples with 4-bit code")

*^ Grid of 2x2 examples with 4-bit code ^*

The visual above illustrates a core aspect of computer graphics. If you author digital content you will have made the connection. Welcome to the *pixel*.

Pixel is another shortcut word. A pixel is a *picture element*. Do not ask me where the "x" came from. Simply put, to visualize a code on a computer screen, pixels are used. Naturally, the more pixels you have, the larger the image. Makes sense.

The sixteen variants above each represent a 2x2 four pixel image. They are represented in code using a 4-bit code (half a byte). If we used a full byte, then we could represent an eight pixel image that has two hundred fifty six variants. Technically speaking our image's dimensions, using the two hundred fifty six state variants, could be either:
- 1x8
- 2x4
- 4x2
- 8x1

Similarly, our 4-bit code could represent the image dimensions:
- 1x4
- 2x2
- 4x1

In either case, the underlying bits are simply a sequence of ones and zeros. The pixel count remains constant where the converted meaning of the bit sequence determines the image's dimensions. Generally speaking, the greater the pixel count, the more bits and thus bytes are required to represent it.

The above approach only allows for black and white images. As designers however, we greatly value the use of color to communicate within our creations. Take a moment before continuing and consider *how might you code color*?
