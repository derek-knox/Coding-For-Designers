## Expressions

Expressions are values. More precisely an expression is any amount of code that results in a value. The term expression is used to denote the fact that the engine may need to do some work to get the value—the expressed result. In both examples below the value is the number `360`. The latter of the two examples however requires work where the former does not:

- `360` (literal value expression)
- `300 + 60` (arithmetic expression)

Both examples are not really useful on their own however. An expression—the resulting value—becomes useful when used in the context of a code statement. A statement always consists of at least one expression. We will explore statements in greater detail in the next section, but here are a few examples so you may begin to intuit how values are useful:

- `var maximumRotation = 360;`
- `if(currentRotation > 360) { currentRotation = 360; }`
- `function getMaximumRotation() { return 360; }`

We've talked a lot about values, but we have not explicitly explored the *types* of values in JavaScript. We only care about six of the seven:

1. null (`null`)
1. undefined (`undefined`)
1. Boolean (`true` & `false`)
1. Number (`360`)
1. String (`"360... one or more characters—including numbers—wrapped in quotes"`)
1. Object (`{}`)

The examples within parenthesis above are all examples of the *literal form* of the respective value type. This form is very common, but it is important to know that most types in JavaScript can exist in two forms:

1. literal
2. reference 

The various snippets throughout the book thus far have had examples of one form, the other form, or both forms. Challenge yourself by looking back at snippets and try to identify some literal forms. Test yourself further and see if you can identify some reference forms.

Reference forms—if not already obvious—are those that use a keyword to *reference* a value. This fact is why the `var`, `function`, and `new` reserved keywords are our most valuable keywords to know.







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



 They unsurprisingly can be represented with keywords, but also with literals (like the number `360`) or to-be-expressed evaluations (which we'll cover later). Without values, we would not be able to translate meaningful ideas to a computer.

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
