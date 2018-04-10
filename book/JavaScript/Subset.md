## Subset

Just like natural languages have many words, rules, and exceptions, so too do programming languages. As we all know from experience, we only use a small fraction to communicate. JavaScript—and programming languages in general—are no different. 

The question is, why do extra words in a language even exist? If it isn't obvious, extra words are useful to those more experienced with a given language or topic. They enable concise communication for those in-the-know. They enable communicating more with less. The tradeoff is a risk of increased complexity as others may be unfamiliar with the words and their meaning. The subset approach mitigates this risk.

The JavaScript subset we will cover is broken down into four groups:
1. Identifiers
2. Expressions
3. Operators
4. Statements

These four groupings make a program useful by enabling it to do work during execution time. Think of the respective groupings as:
1. Named shortcuts to values
2. Values
3. Characters for changing values
4. Pattern groups of keywords

Identifiers are named shortcuts to values. They enable us to use a natural-language-like approach for *identifying* a value, something meaningful. Expressions are values. They unsurprisingly can be represented with identifers, but also as literals (like the number `23`) or *to-be expressed* evaluations (like a `function` expression). Without values, we would not be able to translate our ideas to a computer. Operators are characters for manipulating values. Operators enable values to be *operated on*, to be changed. Lastly, statements are pattern groups of keywords. Statements enable us to group and reason about the various identifiers, values, and operators in a particular portion of code.

Identifiers
- reserved keywords (non-assignable)
  - using ~12/44
- non-reserved keywords (built-in but re-assignable - language flaw)
  - using ~13/61
- custom (assignable)
  - using ∞/∞

*resume breakdown plan at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

Statements
- reserved keywords used for control flow and custom identifier declarations
  - using ~6/27

Expressions
- reserved keywords and character sequences for defining values
  - using ~6/17

Operators
- special characters for working with values
  - using ~14/51

## Subset Total
 - using ~51/200
