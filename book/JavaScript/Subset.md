## Subset

Just like natural languages have many words, rules, and exceptions, so too do programming languages. As we all know from experience, we only use a small fraction of English to communicate. JavaScript—and programming languages in general—are no different. 

The question is then, why do extra words in a language even exist? Extra words are useful to those more experienced with a given language. They enable concise communication between those in-the-know. They are intended as a shortcut to shared meaning and understanding. The tradeoff of using these words is a risk of increased misunderstanding for those unfamiliar with them. The subset approach mitigates this risk.

The JavaScript subset—and the language itself—is organized in four groups:
1. Keywords
2. Expressions
3. Operators
4. Statements

These four groupings make a program useful by enabling it to do work during execution time. Think of the respective groupings as:
1. Named shortcuts to values
2. Values
3. Special characters for changing values
4. Patterns of special characters and keywords

Keywords are named shortcuts to values. They enable us to use a natural-language-like *key* for identifying something as meaningful.

Expressions are values. They unsurprisingly can be represented with keywords, but also with literals (like the number `360`) or to-be-*expressed* evaluations (which we'll cover later). Without values, we would not be able to translate meaningful ideas to a computer.

Operators are special characters for changing values. Operators enable values to be *operated on* and changed. You already know about the arithmetic operators `+, -, *, and /` from math class.

Statements are patterns of special characters and keywords. They enable us to group and reason about the various special characters, keywords, values, and operators in a particular portion of code using a small pattern. Put another way, we *state* something meaningful using a small pattern.

Combined, all four groups enable us to author code that a JavaScript engine understands. When this happens in the browser, it works with other programs on the computer to ensure we see our animated and interactive creations on screen. Let's dig into each group one-by-one.
