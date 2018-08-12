## Expressions

Expressions are values. More precisely an expression is a piece of code that results in a value. The term expression is used to denote the fact that the engine may need to do some work to get the value—the expressed result. If this was not the case then the official term could be value instead of expression.

In both examples below the value is the number `360`. The latter of the two requires work where the former does not:

- `360` (literal value expression)
- `300 + 60` (arithmetic expression)

Both examples are not really useful on their own however. An expression—the resulting value—becomes useful when used in the context of a code statement. A statement always consists of at least one expression. We will explore statements in greater detail in the *Statements* section but here are a few examples so you may begin to intuit how values are useful:

- `var maximumRotation = 360;`
- `if(currentRotation > maximumRotation) { currentRotation = maximumRotation; }`
- `function getMaximumRotation() { return maximumRotation; }`

The relationship of words to a sentence in natural languages is similar to the relationship of expressions to a statement in programming languages. A word is a basic unit of meaning just like an expression is. These units in aggregate provide greater meaning as a sentence in natural language or a statement in a programming language. In the *Statements* section, and in time, you'll begin to grasp what constitutes a valid statement.

### Types & Forms

We've talked a lot about values, but we have not explicitly explored the built-in *types* of values in JavaScript. We only care about six of the seven types due to our subset approach. The types are organized in two groups:

1. Primitive Values
    - null (`null`)
    - undefined (`undefined`)
    - Boolean (`true` & `false`)
    - Number (`360`)
    - String (`"one or more characters wrapped in double quotes"` or `'single quotes'`)
2. Complex Values
    - Object (`{}` & `[]`)

The examples within parenthesis above are all examples of the *literal form* of the respective value type. This form is most common and preferred. It is important to know that JavaScript has another way to create values however. This other way is called the *constructor form*. The constructor form leverages the `new` operator keyword in addition to an environment keyword. This environment keyword denotes the value's specific Object type. Here is the same list using `new` and the respective type's environment keyword (which is a named shortcut to a function):

1. Primitive Values
    - null (only literal form)
    - undefined (only literal form)
    - Boolean (`new Boolean(true)` & `new Boolean(false)`)
    - Number (`new Number(360)`)
    - String (`new String("one or more characters wrapped in double quotes")` or `new String('single quotes')`)
2. Complex Values
    - Object (`new Object()` & `new Array()`)

The literal form is best for built-in types where the constructor form is best for non-built-in types. Programmers like shortcuts, so this is why the literal form is preferred. The constructor form is useful—required really—for specific types of environment Objects like the aforementioned `Date` and `Error` among others. Custom types also require the constructor form.

### Primitive Values

Since primitive values are so fundamental to JavaScript, let's explore each of them in a little more detail. Below is a small program that will be further referenced as an example use of each primitive. Comments are intentionally absent so you can practice the *thinking in three zoom levels* technique. Pretend that the code is running in a browser whose HTML structure:

1. can display multiple artboards on a surface
2. has a "Create Artboard" button (`<button id='create'>Create Artboard</button>`)
3. has a "Delete Artboard" button (`<button id='delete'>Delete Artboard</button>`)
4. has downloaded, compiled, and is executing our program (`<script src='assets/js/artboards.js'></script>`)

```javascript
var createArtboardButton = document.getElementById('create');
var deleteArtboardButton = document.getElementById('delete');
var artboards = [];
var artboardInFocus;

function setupEventListeners() {
    createArtboardButton.addEventListener('click', onCreateArtboardButtonClick);
    deleteArtboardButton.addEventListener('click', onDeleteArtboardButtonClick);
}

function updateArtboardInFocus(artboard) {
    artboardInFocus = artboard;
}

function deleteArtboardInFocus() {
    var artboardInFocusIndex = artboards.indexOf(artboardInFocus);
    artboards.splice(artboardInFocusIndex, 1);
    artboardInFocus.removeSelfFromSurface();
    artboardInFocus = null;
}

function onCreateArtboardButtonClick() {
    var artboard = new Artboard();
    artboards.push(artboard);
    artboard.addSelfToSurface();
    updateArtboardInFocus(artboard);
}

function onDeleteArtboardButtonClick() {
    if (artboardInFocus === undefined) {
        alert('No artboard to delete. Try creating one first.');
    } else if (artboardInFocus === null) {
        alert('No artboard to delete. None of the ' + new String(artboards.length) + ' artboards are in focus.');
    } else {
        deleteArtboardInFocus();
    }
}

setupEventListeners();
```

#### Null

The special `null` value denotes the *intentional* absence of a value. This special value *is not* automatically assigned in JavaScript. It must intentionally be assigned to a keyword by a coder. Though `null` represents the absence of a value, it is technically a value itself. A little weird I know. This is what makes it "special".

In the `artboards.js` code above we use `null` in the `deleteArtboardInFocus` function:

```javascript
artboardInFocus = null;
```

and in the `onDeleteArtboardButtonClick` function:

```javascript
else if (artboardInFocus === null) {
    alert('No artboard to delete. None of the ' + new String(artboards.length) + ' artboards are in focus.');
}
```

By using `null` we can provide a more intentional path (code flow) for the engine to execute code when the program is being interacted with.

#### Undefined

The special `undefined` value denotes the *unintentional* absence of a value. This special value *is* automatically assigned in JavaScript. It is the default value for `var`iable declarations. Additionally, it is the value returned when a nonexistent keyword is accessed. These two aspects make it "special".

In the `artboards.js` code above `undefined` is automatically used in the `var`iable declarations section:

```javascript
var artboardInFocus;
```

and additionally in the `onDeleteArtboardButtonClick` function:

```javascript
if (artboardInFocus === undefined) {
    alert('No artboard to delete. Try creating one first.');
}
```

If the first interaction with the program is to click the "Delete Canvas" button then the above `alert` code would run. If we did not check for `undefined` and `null` prior to executing `deleteArtboardInFocus()` we'd get an `Error`. This would happen because we can't delete an artboard that does not exist. The above examples illustrate why the `undefined` and `null` values are useful.

The observant designer will wonder why the "Delete Artboard" button is interactive if there is not a valid artboard to delete. A better design would leverage the interaction design principle *progressive disclosure* and only show or enable the "Delete Artboard" button when an artboard became focused. I highlight this idea to illustrate the importance of designers and developers working together. Remember, design is the accumulation of decisions and these decisions impact designers and developers just as they do end-users.

#### Boolean

The Boolean type denotes one of two values: `true` or `false`. Remember the bit? This is JavaScript's formal approach to the same goal of defining one of two states. The bit's `0` is the Boolean's `false`. Its `1` is the Boolean's `true`.

In the `artboards.js` code above the `onDeleteArtboardButtonClick` function *implies* the use of a Boolean value in two places. Can you spot them before reading on?

Here is a more *explicit* version of the same functionality using the constructor form:

```javascript
function onDeleteArtboardButtonClick() {
    var isArtboardInFocusUndefined = new Boolean(artboardInFocus === undefined);
    var isArtboardInFocusNull = new Boolean(artboardInFocus === null);

    if (isArtboardInFocusUndefined) {
        alert('No artboard to delete. Try creating one first.');
    } else if (isArtboardInFocusNull) {
        alert('No artboard to delete. None of the ' + new String(artboards.length) + ' artboards are in focus.');
    } else {
        deleteArtboardInFocus();
    }
}
```

Both the implicit (literal form) and the explicit (constructor form) versions result in the same code flow. Since programmers like shortcuts you will almost always see the *implicit* version when working with `if`, `else if`, and `else`. Admittedly the implicit version falls in the right and better categories. Feel free to use whichever version makes more sense to you.

The takeaway is that Boolean values—in either literal or constructor form—are fundamental to controlling code flow.

#### Number

The Number type denotes numbers. Impressive I know. These numbers can be whole (`-360`, `0`, and `360`) or fractions (`-.36`, `.36`, and `3.6`). They can be negative or positive. There are technically limits to a number value in JavaScript, but for our subset approach we can ignore them. If you ever need to work with extreme whole numbers (positives or negatives in the quadrillions) or similarly extreme fractions then feel free to dig deeper. Thought so.

In the `artboards.js` code above we use a Number twice in the `deleteArtboardInFocus` function:

```javascript
var artboardInFocusIndex = artboards.indexOf(artboardInFocus);
artboards.splice(artboardInFocusIndex, 1);
```

and once in the `onDeleteArtboardButtonClick` function:

```javascript
alert('No artboard to delete. None of the ' + new String(artboards.length) + ' artboards are in focus.');
```

The first snippet uses an evaluated number assigned to `artboardInFocusIndex` in addition to the literal `1` value. The two lines of code work together to:

1. find *where* in the `artboards` array the `artboardInFocus` is
2. use the Array's built-in `splice` function to remove that artboard (the `artboardInFocus`)

The second snippet uses the evaluated `artboards.length` value to get the number of total artboards that exist. This allows us to display an up-to-date message using the correct artboards count number as a String value.

#### String

The String type denotes `"one or more characters wrapped in double quotes"` or `'single quotes'`. There are seven examples of String values being used in the `artboard.js` code above.

Strings are useful for defining names, event types, and messages among other things. Concrete examples of this are the use of `create` and `delete`, `click`, and the `alert` strings respectively. It is worth noting that double quoted and single quoted strings are valuable in different scenarios:

- `"The artboard's size is too small."`
- `'"The artboard is too small," she said.'`

There is one specific example from the `onDeleteArtboardButtonClick` function I'd like to call out:

```javascript
alert('No artboard to delete. None of the ' + new String(artboards.length) + ' artboards are in focus.');
```

Since `artboards.length` is a number, we explicitly use the constructor form of String to convert the Number to a String. We additionally use the `+` (concatenation operator) twice to make one large string from three smaller strings. This latter fact will soon be explored more in the *Operators* section.

The takeaway is that the String type prevents the engine from processing its characters as keywords or other value types. For example, 'null', 'undefined', 'true', 'false', and '360' are all String values because they are wrapped in quotes. If we removed the quotes they would instead be examples of the `null`, `undefined`, Boolean, Boolean, and Number types respectively.

### Complex Values

Any value that isn't one of the five primitive values is a complex value. The only complex value type in JavaScript is the `Object`. Through its properties, it can contain references to primitive values in addition to complex values. In contrast, a primitive can contain only one primitive value of the five potential types (`null`, `undefined`, `true`, `360`, `'360'`).

#### Object

`Object`s in JavaScript are what enable coders a massive amount of creative freedom. Because we can create custom identifiers and assign them primitive or other complex values, we can represent virtually anything. We can model real-world concepts just as easily as fantasy concepts. We can mix and match to our desire. This range of freedom is what enables the wide variety of interactive games, tools, and software we love, to exist. 

Do you remember the first two of four ideas I wanted to instill way back in the *Bits and Bytes* section of the *Breaking Barriers* chapter? Here is a refresher:

1. Computers, these complex machines, rely solely on extremely basic concepts
2. There is no magic in coding, just simple ideas stacked atop each other

These same two ideas that applied to bits manifest in `Object`s too. Instead of the binary nature of bits were working with six value types contained in an `Object`. Admittedly this is a little more complex, but basic concepts and ideas stacked atop each other are still at the core.

An object is considered either basic or specific where the disinction is simple. A specific object is one that isn't basic...

#### Array

...

### Copy vs. Reference

Custom keywords—declared with the help of the reserved `var` and `function` keywords—are how we declare our own named shortcuts to values. These values are one of the six types above where `function` is a specific type of `Object`. Additionally, the aforementioned `Date`, `Error`, and `Math` are also specific types of `Object`s. Any value that isn't a primitive value is either a basic or specific `Object` value.

When a primitive value is assigned to a keyword, the keyword holds a *copy* of the value. A complex value assigned or associated to a keyword is instead a *reference* to the value. So primitive values are always copies and complex values are always references. This distinction is important because references, unlike copies, enable the sharing of:

- functionality
- structured data

We already know that sharing functionality—sharing `function`s and the `Object`'s that contain them—provides us a simple and reusable way to do work. This shared functionality is what gives us APIs. Code would not be able to talk to other code otherwise. Data and specifically structured data have not been explicitly covered yet however.

Data is simply any primitive or complex value. Structured data is always a complex value. It parents other values as either an:

- `Object`
- `Array`

Each allows the organization of data—primitive or complex values—using a particular structure. These structures are:

- `Object` as Tree
- `Array` as List

The literal form of each is `{}` and `[]` respectively. An object literal uses *braces* and an array literal uses *brackets*. Braces are curved and brackets are straight. These visual differences are clues reminding you which structure belongs to which literal form:

- `Object`/curves/braces/`{}`
- `Array`/straight/brackets/`[]`

For reference, here is a visualization of the anatomy of each structure:

![Object and Array Anatomy](../assets/img/visual-todo-placeholder.jpg "Object and Array Anatomy")

Let's explore some examples of code to really drive home `Object`s and `Array`s. First, here is an example of a few custom `Object`s in literal form. They are each assigned to a keyword—using `var`—for easier understanding and later reuse:

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
    thickness: 16 
};
```

Now here is an example of a custom `Array` in literal form. The list is assigned to a keyword too—again using `var`—for easier understanding and later reuse:

```javascript
var drawingTools = [pen, highlighter, paintbrush];
```

The code for each drawing tool type makes the most sense when structured as a tree—an `Object`. When organizing all the drawing tools, it makes the most sense to structure them as a list—an `Array`. Over time you will learn to intuit when to use which type, but this distinction should help immensely.

On their own, all four `var`iable declarations above are not all that useful. An `Object` is most useful when code can *access* its nested keywords and thus its nested values. Likewise, an `Array` is most useful when code can *iterate* its values. We'll cover what it means to iterate an `Array`'s values in the *Functions* section. Accessing an object's nested keywords however transitions us right into learning about operators.
