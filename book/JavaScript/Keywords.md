## Keywords

So we now know keywords are named shortcuts to values. Each keyword is a *key* used to access a value using a natural-language-like word. Keywords are not always full words as you would expect in English. They are sometimes abbreviations (like `var` is for variable) or aggregations (like `makeBackgroundBlack` is for `make background black`). The former is a *reserved keyword* where the latter is a *non-reserved keyword*. These are the two keyword types in JavaScript:

1. Reserved keywords
2. Non-reserved keywords

Put another way, reserved keywords are those that cannot be reassigned a value. They have a predefined value assigned by JavaScript. The value cannot be changed. Non-reserved keywords can be reassigned a value. They also have a predefined value by default, but they can be changed.

Non-reserved keywords are also known as *identifiers*. An identifier is simply any keyword that isn't already reserved. Non-reserved keywords are organized in three groups:

1. JavaScript identifiers
2. Environment identifiers
3. Custom identifiers

A JavaScript identifier is a keyword with a predetermined value. This value is useful to your code as it can help facilitate language-specific work. An environment identifier is a keyword with a predetermined value also. Its value is useful to your code as it can help facilitate environment-specific work. Custom identifiers have the special JavaScript value known as `undefined` until the identifier is reassigned a value. So JavaScript identifiers and environment identifiers each have predetermined values. These values are set by the language and environment respectively. Custom identifiers have the predetermined value `undefined` until we reassign them a value (this is the *assignment statement* pattern we'll learn about later).

Let's explore what we just learned relative to a familiar code snippet:

```javascript
function makeBackgroundBlack() {
  document.body.style.backgroundColor = '#000000';
}

makeBackgroundBlack();
```

Before reading on, test yourself by listing out what you think the keywords are. Then try to guess each keyword's reserved or non-reserved identifier status (this will be challenging I know).

Answer time:

1. `function` - reserved
2. `makeBackgroundBlack` - custom identifier
3. `document` - environment identifier
4. `body` - environment identifier
5. `style` - environment identifier
6. `backgroundColor` - environment identifier

You may have thought `'#000000'` was a keyword, but it is a literal value. We'll cover the distinction between literal values and keywords in the next section.

The takeaway is that any portion of code that resembles a natural-language-like word (abbreviations and aggregations included) is a keyword. Everything else is either a literal value, an operator, or a statement's special character(s).

### Reserved Keywords

There is one reserved keyword in the snippet above. There are over forty in JavaScript. With our subset approach there are 10 that we care about. Listed alphabetically the are:

1. `debugger`
1. `else`
1. `false` - (also a literal value)
1. `function`
1. `if`
1. `new`
1. `null` - (also a literal value)
1. `return`
1. `true` - (also a literal value)
1. `var`

These are the reserved keywords to get really familiar with. We'll explore them in more detail in the remaining sections of this chapter in addition to the Deconstructing Designs chapter. This way we'll explore them in the context of when they are useful.

Listing the words alphabetically works, but it is more useful to group them. Below are the groupings in addition to a concise description of how they help us code:

Custom Keyword Declaration Helpers
- `var` - helper for declaring a custom reusable value
- `function` - helper for declaring a custom reusable function

Instance Keyword Helper
- `new` - helper for creating a specific Object instance

Code Flow Keywords
- `if` - helper for guiding the engine to read certain code
- `else` - helper for guiding the engine to read certain other code
- `return` - helper for a function to provide the result of its work

Literal Value Keywords
- `true` - helper for validating code flow
- `false` - helper for validating code flow
- `null` - helper for the absence of a value

Debugging Keyword Helper
- `debugger` -  helper for debugging

### Non-Reserved Keywords - JavaScript
### Non-Reserved Keywords - Environment
### Non-Reserved Keywords - Custom

- case sensitive
  - a-z
  - A-Z
  - _
  - $
  - 0-9 (not first character though)
- case style
  - upper camel
  - lower camel
  - underscore
- remember comments

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
  - talk about "data" vs "code"

Operators
- special characters for working with values
  - using ~14/51

## Subset Total
 - using ~51/200
