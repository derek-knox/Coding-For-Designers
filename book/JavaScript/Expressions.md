## Expressions

Expressions are values. More precisely an expression is any amount of code that resolves to a value. The term expression is used to denote the fact that the engine may need to do some work to get the value. With respect to the briefly aforementioned arithmetic operators (`+, -, *, and /`) the value in both examples below is the number `23`:

- `23` (literal value)
- `20 + 3` (an evaluated expression value)

Each 

In JavaScript values are organized in two overarching groups:

1. Literal values
2. Reference values



false (reserved word)
null (reserved word)
true (reserved word)
0, 1, 2, 3.9 ... (numbers)
'some string'
[]
{}



* Primary expressions
this
function
class
function*
yield
yield*
 async function*
 await
[]
{}
/ab+c/i
( )

* Left-hand-side expressions
Property accessors (dot and bracket notation)
new
new.target
super
...obj



 They unsurprisingly can be represented with keywords, but also with literals (like the number 23) or to-be-expressed evaluations (which we'll cover later). Without values, we would not be able to translate meaningful ideas to a computer.

nested keyword access - dot operator transition?

Keywords
- reserved keywords (non-assignable)
  - using ~12/44
- non-reserved keywords (built-in but re-assignable - language flaw)
  - using ~13/61
- custom (assignable)
  - using ∞/∞

Expressions
- reserved keywords and character sequences for defining values
  - using ~6/17
  - talk about "data" vs "code"

Operators
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
- special characters for working with values
  - using ~14/51

Statements
- reserved keywords used for control flow and custom identifier declarations
  - using ~6/27

## Subset Total
 - using ~51/200
