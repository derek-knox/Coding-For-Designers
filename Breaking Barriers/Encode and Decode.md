# Encode and Decode

Code is a system for converting meaning between forms. One form is considered *encoded* and the other *decoded*. To *encode*, is to convert *into* coded form. To *decode* is to convert *from* coded form. A few forms have been encoded and decoded already.

<table>
  <tr>
    <td></td>
    <td>Encoded</td>
    <td>Decoded</td>
  </tr>
  <tr>
    <td>Electricity</td>
    <td>Presence and Absence</td>
    <td>1 and 0</td>
  </tr>
  <tr>
    <td>Pencil and Paper Questions</td>
    <td>1 and 0</td>
    <td>Yes and No</td>
  </tr>
  <tr>
    <td>Binary Switch</td>
    <td>1 and 0</td>
    <td>On and Off</td>
  </tr>
  <tr>
    <td>Example English Code</td>
    <td>1 Byte</td>
    <td>1 of 256 Unique Symbols</td>
  </tr>
  <tr>
    <td>2x2 Black and White Image</td>
    <td>4-Bits</td>
    <td>1 of 16 Unique Images</td>
  </tr>
  <tr>
    <td>RGB and HEX Color</td>
    <td>3 Bytes</td>
    <td>1 of 16,777,216 Color Values</td>
  </tr>
</table>

A decoded form can be another code’s encoded form. The opposite is also possible. Remember this. Different environments, systems, and software sometimes only work with a specific form. The internet, browsers, and design software for example, in addition to the operating systems they run on, all need to encode and decode to do the cool things they do. Having the capability to convert forms enables better communication with each other. Each software system may expand its own capabilities by having this conversion power too. Conversion through encoding and decoding is power.

Imagine a code where a bit’s two states encoded for two RGB colors. The bit’s 1 would represent white. The bit’s 0 would represent black.

<table>
  <tr>
    <td></td>
    <td>Encoded</td>
    <td>Decoded</td>
  </tr>
  <tr>
    <td>White</td>
    <td>1</td>
    <td>11111111 11111111 11111111</td>
  </tr>
  <tr>
    <td>Black</td>
    <td>0</td>
    <td>00000000 00000000 00000000</td>
  </tr>
</table>

What if we had to send this coded data over the internet from one side of the world to the other. Remember that a decoded form may be another code’s encoded form. Remember the opposite is also possible. Armed with this knowledge, which form would you send over the internet?

Math is not my strong suit, but a single bit is twenty-four times smaller than twenty-four bits. In principle, the single bit will be delivered twenty-four times faster. Winning. This illustrates that the single bit is better for sending across the internet. However, once the bit arrives, it will not be understood as white or black until decoding occurs.

What if I told you that the decoding process took one hour? This is just a thought experiment, but if that was the case, then I would take my chances sending the twenty-four bits instead. 

The takeaway here is that encoded and decoded forms are valuable in different scenarios. As illustrated above, the desire for fast internet often means encoding data before sending and then decoding upon arrival.
