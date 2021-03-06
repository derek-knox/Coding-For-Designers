## Principles and Patterns

With the elements of visual design as primitives, the principles are the *organization of those primitives*. There are generally considered to be eight though names and count are debatable. I will use the list below.

![TODO - Table Replace](../assets/img/visual-todo-placeholder.jpg?v1.11 "TODO - Table Replace")

<table>
  <tr>
    <td>Balance</td>
  </tr>
  <tr>
    <td>Scale</td>
  </tr>
  <tr>
    <td>Rhythm</td>
  </tr>
  <tr>
    <td>Contrast</td>
  </tr>
  <tr>
    <td>Pattern</td>
  </tr>
  <tr>
    <td>Unity</td>
  </tr>
  <tr>
    <td>Emphasis</td>
  </tr>
  <tr>
    <td>Variety</td>
  </tr>
</table>

The core takeaway is that these are recognized approaches for organizing visual design elements for consistent effect. Humans perceptually and often unconsciously absorb specific meaning when the principles in a visual design are applied. Being intentional and informed is to your advantage.

Programming’s equivalent to design principles are *design patterns*. Unlike the principles, there are many more than eight. Like the principles however, they are recognized approaches for organizing the elements.

Both the visual designer and the programmer leverage the principles and patterns respectively to achieve consistent effect. A visual designer applies the principles for the viewer’s benefit. The programmer applies design patterns for his or her benefit. This may sound selfish, but the reality is that the user of a software product benefits too. The benefits could be speed, reliability, consistency, and flexibility for example. Additionally, using design patterns allows other programmers to better understand a program’s code design.

Design patterns allow the programmer to take an approach that solves a common or general problem, one that has been solved before. Design patterns are not a beginner topic so we will not be going into detail. That said, I recommend two books for when you feel ready. *Learning JavaScript Design Patterns* by Addy Osmani and *Design Patterns: Elements of Reusable Object-Oriented Software* by the Gang of Four (GoF) are both amazing resources.

I will not leave you hanging though. Below are a few examples that illustrate some of the more common design patterns.

### Pattern Examples

Often times when programming, you only ever want to have a single instance of a type of object exist in your program. In a sports video game for example you usually only ever track a single game’s score. Depending on the sport you likely only ever want a single ball or puck. In a drawing application you may only ever want a single pen or brush to be selected at any given time. The *singleton* design pattern is a useful pattern for enforcing this oneness.

In forgiving sports video games or drawing applications, the software lets you undo and redo your actions. This is an extremely common desire in software, the ability to undo and redo actions. The *command* and *flux* design patterns are extremely handy for giving an application, and thus its users, this ability.

A sports video game will likely consist of two teams, each with a certain amount of players. Design applications may provide numerous tools like a pen, brush, or eraser with variations of each. A few flavors of the *factory* design pattern are useful in stamping out these products (team, player, or tool).

There are many other design patterns and all are useful in particular scenarios when programming. Sometimes as you are learning to code, you connect dots on your own and unknowingly use some of the design patterns. These experiences are rewarding as you figure out better ways to code on your own.

By leveraging the elements and principles in visual design you may construct more meaningful visuals. In programming, by leveraging the aforementioned elements and patterns you may construct more meaningful and useful code. Be intentional and informed.
