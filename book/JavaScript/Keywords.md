## Keywords

So we now know keywords are named shortcuts to values. Each keyword is a *key* used to access a value using a natural-language-like word. Keywords are not always full words as you would expect in English. They are sometimes abbreviations (like `var` is for variable) or aggregations (like `makeBackgroundBlack` is for `make background black`).

Now is a good time to detail the simple rules for quickly identifying a keyword in code.


Here are some examples:

- `function`
- `var`
- `true`
- `false`
- `makeBackgroundBlack`



The next step before exploring the types of values is to explore the types of keywords. These are:

1. Reserved keywords
2. Identifier keywords

Reserved keywords






  - JavaScript non-reserved
  - Environment non-reserved
  - Custom



In fact we've seen various identifiers already in this book. Remember the function snippet below?
```javascript
function makeBackgroundBlack() {
  document.body.style.backgroundColor = '#000000';
}

makeBackgroundBlack();
```

There are six keywords in the snippet:

1. `function`
2. `makeBackgroundBlack`
3. `document`
4. `body`
5. `style`
6. `backgroundColor`

...

Keywords
- ECMAScript reserved keywords
- ECMAScript non-reserved keywords
- Environment keywords
- Identifier keywords

...


- case sensitive
  - a-z
  - A-Z
  _ _
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
