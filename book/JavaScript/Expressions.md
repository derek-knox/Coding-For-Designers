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
    - String (`"one or more characters wrapped in double quotes"` or `'single quotes'`)
2. Complex Values
    - Object (`{}` & `[]`)

The examples within parenthesis above are all examples of the *literal form* of the respective value type. This form is most common and preferred. It is important to know that JavaScript has another way to create values however. This other way is called the *constructor form*. The constructor form leverages the `new` operator keyword in addition to an environment keyword denoting the value's specific Object type. Here is the same list using `new` and the respective type's environment keyword:

1. Primitive Values
    - null (only literal form)
    - undefined (only literal form)
    - Boolean (`new Boolean(true)` & `new Boolean(false)`)
    - Number (`new Number(360)`)
    - String (`new String("one or more characters wrapped in double quotes")` or `new String('single quotes')`)
2. Complex Values
    - Object (`new Object()` & `new Array()`)

The literal form is best for built-in types where the constructor form is best for custom types. Programmers like shortcuts, so this is why the literal form is preferred. The constructor form is useful for specific types of environment Objects like the aforementioned `Date` and `Error` among others.

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

The literal form of each is `{}` and `[]` respectively. An Object literal uses *braces* and an Array literal uses *brackets*. Braces are curved and brackets are straight. These visual differences are clues reminding you which structure belongs to which literal form:

- Object/curves/braces/`{}`
- Array/straight/brackets/`[]`

For reference, here is a visualization of the anatomy of each structure:

![Object and Array Anatomy](../assets/img/visual-todo-placeholder.jpg "Object and Array Anatomy")

Let's explore some examples of code to really drive home Objects and Arrays. First, here is an example of a few custom Objects in literal form. They are each assigned to a keyword—using `var`—for easier understanding and later reuse:

```javascript
var pen = {
    name: 'Pen',
    color: '#000000',
    thickness: 1 
};
var highlighter = {
    name: 'Highlighter',
    color: '#FFFF00',
    thickness: 3
};
var paintbrush = {
    name: 'Paintbrush',
    color: '#0000FF',
    thickness: 8 
};
```

Now here is an example of a custom Array in literal form. The list is assigned to a keyword too—again using `var`—for easier understanding and later reuse:

```javascript
var drawingTools = [pen, highlighter, paintbrush];
```

The code for each drawing tool type makes the most sense when structured as a tree—an Object. When organizing all the drawing tools, it makes the most sense to structure them as a list—an Array. Over time you will learn to intuit when to use which type.

On their own, all four variable declarations above are not all that useful. An Object is most useful when code can *access* its nested keywords and thus its nested values. Likewise, an Array is most useful when code can *iterate* its values. We'll cover what it means to iterate an array's values in the Functions section. Accessing an object's nested keywords however transitions us into right into the Operators section.
