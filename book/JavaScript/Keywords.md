## Keywords

So we now know keywords are named shortcuts to values. Each keyword is a *key* for accessessing a value using a natural-language-like word. Keywords are not always full words as you would expect in English. They are sometimes abbreviations (like `var` is for variable) or aggregations (like `makeBackgroundBlack` is for "make background black"). The former is a *reserved keyword* where the latter is a *non-reserved keyword*. These are the two keyword types in JavaScript:

1. Reserved keywords
2. Non-reserved keywords

Put another way, reserved keywords are those that cannot be reassigned a value. They have a predefined value assigned by JavaScript. This value cannot be changed. In contrast, non-reserved keywords *can* be reassigned a value. They also have a predefined value by default, but it can be changed.

Non-reserved keywords are also known as *identifiers*. An identifier is simply any keyword that isn't already reserved. Non-reserved keywords are organized in three groups:

1. JavaScript identifiers
2. Environment identifiers
3. Custom identifiers

A JavaScript identifier is a keyword with a predetermined value. This value is useful to your code as it can help facilitate *language*-specific work. An environment identifier is a keyword with a predetermined value also. Its value is useful to your code as it can help facilitate *environment*-specific work. Custom identifiers have the special JavaScript value `undefined` until the identifier is reassigned a value.

So JavaScript identifiers and environment identifiers each have predetermined non-`undefined` values. These values are set by the language and environment respectively. Custom identifiers have the predetermined value `undefined` until we reassign them a value (this is an example of the *assignment statement* pattern we'll learn about later).

Let's explore what we just learned relative to a familiar code snippet:

```javascript
function makeBackgroundBlack() {
  document.body.style.backgroundColor = '#000000';
}

makeBackgroundBlack();
```

Before reading on, test yourself by listing out what you think the keywords are. Then try to guess each keyword's reserved or non-reserved status (this will be challenging I know).

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

There is one reserved keyword in the snippet above. There are over forty in JavaScript. With our subset approach there are ten that we care about. Listed alphabetically they are:

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

These are the reserved keywords to get really familiar with. We'll explore them in more detail in the remaining sections of this chapter in addition to the *Deconstructing Designs* chapter. This way we'll explore them in the context of when they are most useful.

Listing the words alphabetically works, but it is more useful to group them. Below are the groupings in addition to a concise description of how they help us code:

Custom Keyword Helpers
- `var` - helper for declaring a reusable value by a custom name
- `function` - helper for declaring a reusable function by a custom name

Instance Helper
- `new` - helper for creating unique function instances

Code Flow Keywords
- `if` - helper for guiding the engine to read certain code
- `else` - helper for guiding the engine to read certain other code
- `return` - helper for a function to provide the result of its work

Literal Value Keywords
- `true` - helper for validating code flow
- `false` - helper for validating code flow
- `null` - helper for the special "absence of a value" value

Debugging Keyword Helper
- `debugger` -  helper for debugging

The concise description accompanying each keyword may not make complete sense at the moment. This is OK. The takeaway is that these are the ten reserved keywords of JavaScript that you want to focus on. We'll better understand what they do for us as we explore more code.

### Non-Reserved Keywords - JavaScript

In the snippet above, there is no example of a non-reserved JavaScript keyword. There are around seventy in JavaScript however. With our subset approach there are six that we care about. They each specialize in working with common types of values.

1. `Date` - helper for working with dates
1. `Error` - helper for working with errors
1. `JSON` - helper for reading and writing data
1. `Math` - helper for doing math
1. `Number` - helper for working with numbers
1. `String` - helper for working with strings

The `Date` helps us work with dates and time. Errors you understand generally, but we'll explore them in the context of code in the *Errors* section at the end of this chapter. `JSON`, pronounced "Jason", is likely foreign. `JSON` is useful for reading and writing in a data format of the same name. The format is really useful in communicating between clients and servers. `Math` provides a bunch of functions that help coders do complex work with numbers. It also allows us to do simple work with numbers like rounding. `Number` helps us do more generic work with numbers. Lastly, `String` helps us work with characters and natural language words that we don't want the engine to interpret as keywords, operators, or statements.

### Non-Reserved Keywords - Environment

There are four non-reserved environment keywords in the snippet above. They are `document`, `body`, `style`, and `backgroundColor`. Each is parented by the former. We'll explore how this keyword parenting is possible in the *Expressions* section that soon follows.

The `document` has a parent too. This parent is special and is known as the *host object*. The host object in a browser environment is the `window` object. The `window` object provides the runtime APIs we learned about in the *Event Loop* section of the *Interactive Code* chapter. As a result, the use of `document` and `window.document` are interchangeable. We'll see why this is the case in the *Functions* section. As an aside, the `document` provides APIs for us to update our HTML during execution time. This is exactly what we want–and do–in our `makeBackgroundBlack` function.

Now is a great time to reinforce that professional coders don't remember all the runtime APIs (there are 700+). They reference resources just like beginners. We will do the same and simply focus on knowing about the special `window` object. Over time we'll memorize the APIs that we use often.

I do however recommend exploring the list of all the web APIs sometime. The effort enables you to grasp the big picture of what is possible in the browser. You will be impressed and you'll likely find many that that give you cool ideas.

### Non-Reserved Keywords - Custom

In the snippet above, there is one non-reserved custom keyword. It is `makeBackgroundBlack`. There are naturally an infinite amount of custom keywords. Remember that the computer doesn't care what the keyword name is when it is custom. It just cares that it is unique to a scope while providing a reference to a specific value. We could have instead named our `makeBackgroundBlack` function `a` and the snippet would instead be:

```javascript
function a() {
  document.body.style.backgroundColor = '#000000';
}

a();
```
The functionality is the same even though there are fewer characters. As a result there is less code–a smaller payload–to send from a client to a server and vice versa. Remember however that we are coding for humans first. Naming keywords meaningfully is the primary goal. We can decrease the payload size later through the aforementioned minification process among other steps. The takeaway is that the engine only cares that custom keywords are unique to a scope. The name itself is useful for us coders.

You will notice that the `document`, `body`, `style`, and `backgroundColor` environment identifiers are left untouched. This is because they are not custom keywords, the runtime expects them to be associated with certain values. As such, they would not be shortened through minification.

It is worth noting that when naming custom keywords there are a set of rules. I will list them here for general familiarity, but there is a subset to instead focus on. Custom keywords can use the following characters:

- `a-z` (lowercase characters)
- `A-Z` (uppercase characters)
- `_` (underscore character)
- `$` (dollar sign character)
- `0-9` (number characters when not the first keyword's character)

There are three common case styles that are used as a result of the above rules:

1. upper camel (ex. UpperCamelCase)
1. lower camel (ex. lowerCamelCase)
1. underscore (ex. underscore_case aka snake_case)

I recommend using the `lowerCamelCase` just like we did with `makeBackgroundBlack`. We'll additionally use the `UpperCamelCase` style for certain functions, but we'll cover why in the *Functions* section later. The takeaway is that you can use all the rules above, but it is much simpler to stick to the `lowerCamelCase` and `UpperCamelCase` styles.

It is worth noting that these case styles exist for a reason. If blank spaces were allowed then our `makeBackgroundBlack` keyword would be `make Background Black`. The engine would instead see three keywords as opposed to one. The `lowerCamelCase` and `UpperCamelCase` styles exist to mitigate this issue while maintaining readability.

Now that we've explored the various keyword types, now is the best time to explore the types of expressions–or values–a keyword can represent.
