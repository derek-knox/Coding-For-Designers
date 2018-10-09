## Operators

Expressions are synonymous with values. Values by themselves are useful, but they're more so when they can be *operated* on. Put another way, being able to assign, combine, and access values is useful.

JavaScript provides certain reserved keywords and special characters that fall into this operator category. There are over 50 but with our subset approach we only care about 14. You know most of them already from math class. Bonus. Additionally, there is an extemely useful character that's not technically an operator but might as well be. We'll start there. Welcome to the *dot* (`.`).

### Dot Notation

The dot is not an operator, but a notation. This is just fancy talk. We'll consider it an operator.

The dot allows us to access an object's nested keywords and thus its nested values. You have already seen this in action through virtually all the code snippets up to this point. Refresh time:

```javascript
function makeBackgroundBlack() {
  document.body.style.backgroundColor = '#000000';
}

makeBackgroundBlack();
```

There are three uses of the dot in the familiar snippet above. In each subsequent use an object's keyword is accessed. This is exactly what the dot is for, accessing nested keyword values.

If you recall from the *Interactive Code* chapter, a JavaScript program is just a tree of functions and thus a tree of scopes. Since a function is also certain type of `Object` (the `Function` Object) a JavaScript program is also a tree of objects.

A JavaScript program is a tree of:
- functions
- scopes
- objects

The dot character is powerful because it allows us to *navigate the tree*. By navigating the tree, we access the values we want to work with. This is where the operators come in handy.

### Assignment Operator

The most commonly used operator is the *assignment* operator, the equal (`=`) sign. You already know what it does. In JavaScript, you assign keyword identifiers specific values with it. These values can be primitive or complex. They can be literal expressions or evaluated expressions too. In either case, the engine works to produce a single value that is then assigned to a specific keyword identifier. Simple. Here we go again:

```javascript
function makeBackgroundBlack() {
  document.body.style.backgroundColor = '#000000';
}

makeBackgroundBlack();
```

In the above snippet, the engine's work is easy. The value of focus is the literal hex color String `'#000000'` and we're assigning it to the `backgroundColor` keyword of the `document.body.style` environment object. As an aside, we now know the `backgroundColor` keyword is on an object nested three levels deep in the program tree.

Assignment is useful for one fundamental reason. What do you think it is?

Without assignment, we would never be able to *save values for later use*. This would mean new values could be created during execution time, but no other code would be able to use them. That would make for lame games, tools, and software. Thank you `=`. 

### Arithmitic



### Comparison Operators

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







# Operators

* Increment and decrement
A++
A--
++A
--A

* Unary operators
delete
void
typeof
+
-
~
!

* Arithmetic operators
+
-
/
*
%
**

* Relational operators
in
instanceof
<
>
<=
>=

* Equality operators
==
!=
===
!==

* Bitwise shift operators
<<
>>
>>>

* Binary bitwise operators
&
|
^

* Binary logical operators
&&
||

* Conditional (ternary) operator
(condition ? ifTrue : ifFalse)

Assignment operators
=
*=
/=
%=
+=
-=
<<=
>>=
>>>=
&=
^=
|=
[a, b] = [1, 2]
{a, b} = {a:1, b:2}

* Comma operator
,

...

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

