# Bits and Bytes

A code with only two states is kind of boring. Useful yes, but boring. I bet you are thinking we can make a more interesting code if we have more than one binary. You are correct. Coders never say *more than one binary* though. It sounds weird. It also takes too long to say and type. Coders prefer shortcuts. Welcome to the word *bit*.

A *bit* is a *binary digit*. We already know binary represents one of two states. We also know that those two states are agreed to mean *1* and *0*. So a bit is a binary digit. A bit can either be a *1* or a *0*. Simple.

 One bit is boring because it can only represent one of two states. The natural question is then, how many states can we represent with *two* bits?

<table>
  <tr>
    <td>Bit A</td>
  </tr>
  <tr>
    <table>
      <tr>
        <td>0</td>
        <td>1</td>
      </tr>
    </table>
  </tr>
</table>

<table>
  <tr>
    <td>Bit B</td>
  </tr>
  <tr>
    <td>0</td>
    <td>1</td>
  </tr>
</table>

That makes sense. One bit represents two states. Two bits represents four states. No brainer. Let’s look at all the output states for kicks.

<table>
  <tr>
    <td>Bit A</td>
    <td>Bit B and Bit C</td>
  </tr>
  <tr>
    <td>0 or 1</td>
    <td>00 or 01 or 10 or 11</td>
  </tr>
</table>

That *00 or 01 or 10 or 11* looks weird. It is. Thankfully, when we get to writing our own code, we don’t have to write in *1s* and *0s*. As a designer, I would not have became a coder otherwise.

Now is a good point in time to reflect on why we are even looking at *bits *if we don’t have to code with them. There are three ideas worth instilling:

1. Computers, these complex machines, rely solely on extremely basic concepts

2. There is no magic in coding, just simple ideas stacked atop each other

3. The *one-of-two-states concept* a bit represents is constantly reused in coding

How many states could we represent with three bits?

<table>
  <tr>
    <td>Bit D and Bit E and Bit F</td>
  </tr>
  <tr>
    <td>000 or 001 or 010 or 011 or 100 or 101 or 110 or 111</td>
  </tr>
</table>

Eight? I was expecting six. It makes sense though when we see the state values printed out. For every bit we add, we double the possible output as before. This is obvious when we write it out.

<table>
  <tr>
    <td>Number of Bits</td>
    <td>Number of States</td>
  </tr>
  <tr>
    <td>1</td>
    <td>2</td>
  </tr>
  <tr>
    <td>2</td>
    <td>4</td>
  </tr>
  <tr>
    <td>3</td>
    <td>8</td>
  </tr>
  <tr>
    <td>4</td>
    <td>16</td>
  </tr>
  <tr>
    <td>5</td>
    <td>32</td>
  </tr>
  <tr>
    <td>6</td>
    <td>64</td>
  </tr>
  <tr>
    <td>7</td>
    <td>128</td>
  </tr>
  <tr>
    <td>8</td>
    <td>256</td>
  </tr>
</table>

You will notice that I stop at eight bits in the table above. We could keep going and the same doubling rule would apply. Why eight? Random I know. Ultimately, *people simply agreed that eight is a good stopping point*. They *agreed* that being able to represent 256 unique states was *good enough*. Again, no inherent magic.

We know coders like shortcuts. Is there a shorter way to say and type *eight bits*? Yes, welcome to the word *byte*. A *byte* is *eight bits*. Naturally, a byte also represents 256 states.

Let’s use what we just learned to make an example code of our own. We will use a byte’s 256 states to represent the symbols of the English language. Twenty-six lowercase and twenty-six uppercase letters would use up fifty-two states. Ten numerals and all the punctuation marks, including a lot of obscure marks, could be represented in another fifty states. We could increase fifty to one-hundred and include even more obscure marks. One hundred four unused states would *still remain* (256 - 26 - 26 - 100 = 104). Good enough, for English at least.

![alt text](../assets/visual-todo-placeholder.jpg "Image Grid of English Symbols")

*^ TODO - Image Grid of English Symbols ^*

What if we wanted a code to represent *all the symbols of every single human language we have ever known*? A single byte would not cut it. Different amounts of bits, and thus bytes, are useful for different scenarios. Chew on that.

I want to reinforce the notion that the *converted meaning* represented by a certain number of states could be *anything we want*. This is why coding is such an expressive and creative craft. This foundation of binary, bit, and byte is simply about representing *states*. As the amount of states a computer controls increases, so too does the potential power of *the code we author*.

I mentioned previously that we don’t have to write code in 1s and 0s. Thank god. Coders have done that for us already. Then other coders created their own code on top of that. This stacking of code on top of code is what will allow us to write JavaScript later. We won’t care about any of the code underneath JavaScript. We will focus only on the *high-level language* of JavaScript. We will ignore the *low-level languages *beneath it. We will just know they are there.
