## Expressions

Expressions are values. More precisely an expression is a piece of code that results in a value. The term expression is used to denote the fact that the engine may need to do some work to get the value—the expressed result. In both examples below the value is the number `360`. The latter of the two examples however requires work where the former does not:

- `360` (literal value expression)
- `300 + 60` (arithmetic expression)

Both examples are not really useful on their own however. An expression—the resulting value—becomes useful when used in the context of a code statement. A statement always consists of at least one expression. We will explore statements in greater detail in the next section, but here are a few examples so you may begin to intuit how values are useful:

- `var maximumRotation = 360;`
- `if(currentRotation > 360) { currentRotation = 360; }`
- `function getMaximumRotation() { return 360; }`

### Types & Forms

We've talked a lot about values, but we have not explicitly explored the built-in *types* of values in JavaScript. We only care about six of the seven types and they are organized in two groups:

1. Primitive Values
    - null (`null`)
    - undefined (`undefined`)
    - Boolean (`true` & `false`)
    - Number (`360`)
    - String (`"one or more characters—including numbers—wrapped in quotes"`)
2. Complex Values
    - Object (`{}` & `[]`)

The examples within parenthesis above are all examples of the *literal form* of the respective value type. This form is most common and preferred, but it is important to know that JavaScript has another way to create values. This other way is called the *constructor form*. The constructor form leverages the `new` operator keyword in addition to an environment keyword denoting the value's specific Object type. Here is the same list using `new` and the respective type's environment keyword:

1. Primitive Values
    - null (only literal form)
    - undefined (only literal form)
    - Boolean (`new Boolean(true)` & `new Boolean(false)`)
    - Number (`new Number(360)`)
    - String (`new String("one or more characters—including numbers—wrapped in quotes")`)
2. Complex Values
    - Object (`new Object()` & `new Array()`)

The literal form is best for built-in types where the constructor form is best for custom types. Additionally, the constructor form is useful for specific types of environment Objects like the aforementioned `Date` and `Error`.

### Copy vs. Reference

Custom keywords—declared with the help of `var` and `function`—are how we declare our own named shortcuts to values. These values are one of the six types above where `function` is a specific type of Object. When a primitive value is assigned to a keyword, the keyword holds a *copy* of the value. A complex value assigned or associated to a keyword is instead a *reference* to the value. So primitive values are always copies and complex values are always references. This distinction is important because references, unlike copies, enable the sharing of:

- functionality
- data

We already know that sharing functionality—sharing `function`s—provides us a simple and reusable way to do work. This shared functionality is what gives us APIs. Code would not be able to talk to other code otherwise. Data is not something we've explicitly covered yet however.

Data in JavaScript is structured using two complex types:

- Object
- Array

Each type allows the organization of data—information and code—using two structures:

- Object as Tree
- Array as List



The literal form of each is `{}` and `[]` respectively. An Object literal uses *braces* and an Array literal uses *brackets*.

... data as container for values (primitive or complex) and that leads us to the dot operator so we can access nested values :)
