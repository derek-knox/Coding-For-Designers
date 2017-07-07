# Coding Color

Thus far we have made our own example codes. One to represent the symbols in the English language and another to represent black and white images. We could continue this trend. Instead we will transition toward codes that already exist. The advantage is twofold:

1. Less work for us, we don’t need to reinvent the wheel
2. Using established codes empowers us to achieve more, faster

In the context of color we will explore the common codes RGB and HEX. The former is *red green blue* and the latter is *hexadecimal*. We will start with RGB.

RGB is composed of three values (color channels). A red value, a green value, and a blue value. Combined they represent a specific color value. The color represented by a specific color value has already been decided. No work on our end. Nice. We simply rely on the various design applications we use to consistently represent colors in our digital designs. Photoshop, Illustrator, Lightroom, and Sketch are a few examples of the hundreds, if not thousands, of applications we depend on to consistently represent color.

RGB is represented in a few flavors too. For illustration purposes, let’s briefly represent our own custom RGB code using a *bit* for each red value, blue value, and green value.

![alt text](../assets/visual-todo-placeholder.jpg "Custom RGB = 8 different colors")

*^ Custom RGB = 8 different colors ^*

Eight colors is a pretty limiting palette. What happens if we swap out the bits for bytes? Holy shit. RGB gets us *over 16 million* color values. That palette is enormous. This is an actual flavor of RGB called RGB24. Another is called RGB32 or RGBA, where "A" is an *alpha* (transparency) value. Just call them by their normal names RGB and RGBA.

![alt text](../assets/visual-todo-placeholder.jpg "RGB and RGBA")

*^

1 byte + 1 byte + 1 byte = 8 bits + 8 bits + 8 bits = RGB24 = RGB

1 byte + 1 byte + 1 byte + 1 byte = 8 bits + 8 bits + 8 bits + 8 bits = RGB32 = RGBA

R(255) + G(0) + B(0) = Red

R(255) + G(255) + B(0) = Yellow

R(0) + G(255) + B(0) = Green

R(0) + G(255) + B(255) = Cyan

R(0) + G(0) + B(255) = Blue

R(255) + G(255) + B(255) = White

R(0) + G(0) + B(0) = Black

^*

You will notice the sample RGB colors above range from 0-255 for each byte’s value. If I invented the RGB code, 1-256 would be used instead. I did not invent it and instead we must use 0-255. Sorry, I take the blame on this one. 

Counting starting at zero instead of one is a recurring pattern you will see in coding. This is one of the fundamental aspects that throws non-coders off when first learning more about coding. We have started counting from *one not zero our entire lives*. This is admittedly a difficult pill to swallow. It will become second nature in time.

Hexadecimal is another common color code. It represents the same color range as RGB, just differently. Instead of a range between *0-255* for each R, G, and B value, HEX uses *00-FF* for each. The letters A-F replace the numbers 10-15. Additionally, the *#* symbol often precedes the value. Example time.

<table>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>10</td>
    <td>11</td>
    <td>12</td>
    <td>13</td>
    <td>14</td>
    <td>15</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
    <td>2</td>
    <td>3</td>
    <td>4</td>
    <td>5</td>
    <td>6</td>
    <td>7</td>
    <td>8</td>
    <td>9</td>
    <td>A</td>
    <td>B</td>
    <td>C</td>
    <td>D</td>
    <td>E</td>
    <td>F</td>
  </tr>
</table>

*^

1 byte + 1 byte + 1 byte = 8 bits + 8 bits + 8 bits = HEX

FF + 00 + 00 = #FF0000= Red

FF + FF + 00 = #FFFF00 = Yellow

00 + FF + 00 = #00FF00 Green

00 + FF + FF = #00FFFF = Cyan

00 + 00 + FF = #0000FF = Blue

FF + FF + FF = #FFFFFF = White

00 + 00 + 00 = #000000 = Black

^*

Feel free to continue to use color pickers, swatches, generated palettes, or any other tooling you use for color when designing. Moving forward you will simply be armed with a deeper understanding of how the color is coded. Or more precisely *encoded*.
