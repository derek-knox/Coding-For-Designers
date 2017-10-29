# Saved Image

Let’s chain together everything we have covered thus far to save a color image.

Computers manage the presence and absence of electricity with circuits. These allow us to bridge the physical world (hardware) to the virtual (software). We agree that the presence of electricity is a 1 and the absence a 0. We refer to 1 and 0 as a binary code. Each 1 and 0 is a binary digit.

Saying and typing binary digit is annoying. Coders created the shortcut word bit to alleviate this annoyance. Naturally, a bit represents one of two states at any moment in time. Eight of these bits are a byte. A byte allows us to represent 256 states. The number eight is arbitrary. Representing 256 states was simply a good enough amount for coders. It was good enough because it could represent a wide range of codes. All the English characters and then some for example, can be represented within 256 states with ease. 

Using three bytes (24 bits) allows us to represent over 16 million different states. Colors in our examples thus far. For the image to be saved we will simply encode bytes and save to a file. When a design application loads our image file, it will be responsible for decoding it. Since RGB and HEX are agreed upon ways to represent color, we can rely on the application to display what we intended. This only works if we let the application know how to decode it. Cool, that makes sense.

For simplicity we will create a one pixel image. Understanding how one color pixel is encoded means we can simply repeat the same process until we have as many pixels as we want. Again, coding uses simple, basic, repetitive, and reusable concepts. Not magic.

A single color will fit in our pixel. The color will be a random one of the over 16 million possibilities. How might you accomplish this? Try to sketch an approach before moving forward.

I simply flipped a coin eight times. Heads was 1 and tails was 0, my own little code. This resulted in a byte of encoded data. I repeated this process two more times. You know where I am going with this. Decoded, the three bytes represent one color. RGB or HEX will do.

<table>
  <tr>
    <td>Random Color</td>
    <td>10010001 01110101 001010101</td>
  </tr>
</table>

Once encoded, we need to actually save it to a file. How do we do that? Well it is quite simple actually. The OS (Operating System) you run and use your design application(s) on (Windows, Mac, iOS, Android, etc.) has prewritten code giving you this power. Again, prewritten code stacked on prewritten code often gives us an easy way to accomplish tasks that would otherwise be more difficult.

Long story short, the encoded data needs to be inserted into an empty file. When saving the file, it needs to have a *file extension* appended to the file’s name. Think `.jpg`, `.png`, `.psd`, `.html`, `.css`, and `.js` for example. The sole reason for a file extension is so the OS and its applications can quickly identify the file’s type. Why is that important? If you didn’t already guess, the file extension helps identify the decoding approach. In turn, only certain applications know how to work with certain file types. Full circle.

Later, when we start to write our own JavaScript code, we will use the file extension `.js`. The code in the JavaScript file will not be in 1s and 0s though. Instead we will use the words that are part of the JavaScript language. We are not limited to just JavaScript words though, we get to use our own too. Much better than 1s and 0s. 

First however, we will look at the three distinct concepts used to display static, dynamic, and interactive designs on a computer screen. These concepts are structure, style, and behavior. We will visit each in the context of 2D and 3D to better shape your perspective (pun intended). Go time.
