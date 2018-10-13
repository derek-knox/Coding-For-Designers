## Operators

Expressions are synonymous with values. Values by themselves are useful, but they're more so when they can be *operated* on. Put another way, being able to assign, combine, and access values is useful.

JavaScript provides certain reserved keywords and special characters that fall into this operator category. There are over 50 but with our subset approach we only care about 14. You know most of them already from math class. Bonus. Additionally, there is an extemely useful character that's not technically an operator but might as well be. We'll start there. Welcome to the *dot* (`.`).

### Dot Notation

The dot is not an operator, but a notation. This is just fancy talk. We'll consider it an operator.

The dot allows us to access an object's nested keywords and thus its nested values. You have already seen this in action through virtually all the code snippets up to this point. Refresher time:

```javascript
function makeBackgroundBlack() {
  document.body.style.backgroundColor = '#000000';
}

makeBackgroundBlack();
```

There are three uses of the dot in the familiar snippet above. In each subsequent use a specific keyword of a nested object is accessed. Accessing a specific keyword of an object—and thus its value—is exactly what the dot is for. Here is a visual representations:

![TODO - Dot Operator Nested Access](../assets/img/visual-todo-placeholder.jpg?v1.11 "TODO - Dot Operator Nested Access")

If you recall from the *Interactive Code* chapter, a JavaScript program at execution time is just a tree of functions and thus a tree of scopes. Since a function is also a certain type of `Object` (the `Function` Object) a JavaScript program is also a *tree of objects*.

A JavaScript program is a tree of:
- objects
- functions
- scopes

The dot character is powerful because it allows us to *navigate objects*. By navigating objects, we can search for and access specific and nested values we want to work with. At this point, the operators really come in handy.

### Assignment Operator

The most commonly used operator is the *assignment* operator, the equal (`=`) sign. You already know what it does. In JavaScript, you assign keyword identifiers specific values with it. These values can be primitive (like `360`, `'360'`, and `true`) or complex (like `{}` and `[]`). They can be literal expressions (like `360`) or evaluated expressions too (like `300 + 60`). In all cases, the engine works to provide a single value that is then assigned to a specific keyword identifier. Simple. Here we go again:

```javascript
function makeBackgroundBlack() {
  document.body.style.backgroundColor = '#000000';
}

makeBackgroundBlack();
```

In the above snippet, the engine's work is simple. The value of focus is the literal hex color String `'#000000'` and we're assigning it to the `backgroundColor` keyword of the `document.body.style` environment object. As an aside, we now know the `backgroundColor` keyword is on an object nested three levels deep in the program tree. Here is the sample before and after:

```
// before
window.document = {
  body: {
    style: {
      backgroundColor: ''
    }
  }
}

// after
window.document = {
  body: {
    style: {
      backgroundColor: '#000000'
    }
  }
}
```

Assignment is useful for one fundamental reason. What do you think it is?

Without assignment, we would never be able to *change or save values*. This would mean new values could be created during execution time, but no other code would be able to use them. That would make for lame games, tools, and software. Thank you `=`. 

### Arithmetic Operators

We won't spend much time on the arithmetic operators as you already know about them. They are:

- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division

These four operators in combination with the assignment operator give us coders a ton of power. For example, we gain the core ability to animate and otherwise move, resize, scale, and transform visual elements with ease. In fact, here is a primitive example using HTML (structure), CSS (style), and JavaScript (behavior):

HTML
```html
<div id='the-brick' class='brick'>I'm a brick</div>
```

CSS
```css
.brick {
  background-color: #FF0000;
  display: inline-block;
}
```

JavaScript
```javascript
var theBrick = document.getElementById('the-brick'),
    angle = 0;

function updateBrickRotation() {
  angle = angle + 1;
  theBrick.style.transform = 'rotate(' + angle + 'deg)';
}
  
setInterval(updateBrickRotation, 10);
```

Take a moment to envision what the combination of each snippet results in. Spoiler alert, it's a spinning brick. The example illustrates how we can use the arithmetic and assignment operators together to make changes over time.

### Comparison Operators

...

JavaScript
```
var theBrick = document.getElementById('the-brick'),
    isClockwise = true,
    angle = 0;

function toggleIsClockwise() {
  isClockwise = !isClockwise;
}

function updateBrickRotation() {
  if(isClockwise === true) {
    angle = angle + 1;  
  } else if (isClockwise === false) {
    angle = angle - 1;
  }
  
  theBrick.style.transform = 'rotate(' + angle + 'deg)';
}
  
setInterval(updateBrickRotation, 10);
setInterval(toggleIsClockwise, 2000);
```

### Unary Operators

- refresh makeBackgroundBlack assignment but use + strings to make the black hex val

### Comma Operator

- . Dot
- = Assignment
- + Arithmitic Add
- - Arithmitic Subtract
- * Arithmitic Multiply
- / Arithmitic Divide
- === Comparison Equality
- !== Comparison Inequality
- > Comparison Greater than
- >= Comparison Greater than or Equal to
- < Comparison Less than
- <= Comparison Less than or Equal to
- + Unary String
- ! Unary Not
- , Comma Operator

### TODO
- Regarding the "JavaScript program is a tree of functions/scopes/objects" where the `.` operator allows us to go deeper, using identifiers without a dot allows us to go shallower. This is how we can navigate up and down the program tree to access specific identifiers and thus thier values.

- Need to visualize the "global function". Without it the program can't startup and additionally allow the rest of the built-in, third-party, and custom code to be evaluated. Special section on this "startup" aspect. AKA `program()` which equates to the program scope.
