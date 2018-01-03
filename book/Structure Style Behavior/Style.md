## Style

Style, as previously mentioned, is where the building blocks of a structure are adorned with materials and objects that have aesthetic and/or functional value. An adornment allows a specific building block or a group of building blocks to look and/or function identically. An adornment may also ensure a building block is truly unique in its look and/or function. Each platform may have default styles for its building blocks but ultimately the creative power is in your hands as the coder and designer.

These building block adornments are contextual. In the context of 2D with the web platform, these adornments are applied via CSS styles (Cascading Style Sheets). In the context of 3D and Unity, these adornments are Materials.

The adornments are different depending on the context, but their underlying purpose is identical. Their purpose is to provide aesthetic and/or functional value to one or more building blocks. There is a wildly large gamut of creative output that can result in both 2D and 3D by combining various adornments. Your knowledge and creativity are the only limiting factors.

In either the 2D or 3D context, it is not important to know all the possible adornments. Professional coders simply know the purpose of style and its distinction from structure and behavior. A professional’s level of experience simply makes him or her quicker in their application of it. Professional coders, just like beginners, still need to reference resources. For this reason, we will use only a very small subset in the examples below. You can reference resources to expand your understanding of what is possible.

We will build off the structural examples from before when applying style examples. In the 2D CSS context, this is done by adorning an HTML element with a specific *class*. The class has a unique name that you as the coder create. Within the class definition, you list one or more property-value pairs. Each pair simply defines a style property and a value for it. Really straightforward. Let’s see this in action.

![TODO - Image 1 node 2D (parent only with class and class definition of background-color and then background image then opacity)](../assets/img/visual-todo-placeholder.jpg "TODO - Image 1 node 2D (parent only with class and class definition of background-color and then background image then opacity)")

If valid properties and values are set, the browser does your bidding and renders your design. If any are invalid, the browser ignores your invalid code.

To review the example above, we first defined our structure. Then, we adorned a specific building block of the structure with style. Simple as that. We do the exact same thing in 3D with Unity.

In the 3D Unity context, we adorn a GameObject with a material. A material in Unity, like a CSS class, has a set of properties that can be assigned certain values. In Unity you can set these property values via code or through the UI of the Unity editor. It’s worth noting that 2D CSS and 3D materials don’t always have the same properties, but they often do under a similar name.

![TODO - Image 1 node 3D (parent only with material color and then texture then opacity)](../assets/img/visual-todo-placeholder.jpg "TODO - Image 1 node 3D (parent only with material color and then texture then opacity)")

As you’ll notice in the 2D and 3D examples above, what differs between them is only the property names and values. The concept of adornment for applying style remains constant. This is the takeaway.

The computer program, the web browser for our 2D examples and the Unity Engine for our 3D examples, knows how to read valid properties and values. Each program can then output a stylized 2D or 3D rendering respectively.

As style is respected and reliably applied by each platform, we begin to truly differentiate the visual representation of potentially identical structures. This is a super powerful concept to grasp so etch this in your brain.

> As style is respected and reliably applied by each platform, we begin to truly differentiate the visual representation of potentially identical structures.

Here are a few more examples to drive home the difference between structure and style.

![TODO - Image showcase 1 structure, 3 2D and 3 3D styled examples](../assets/img/visual-todo-placeholder.jpg "TODO - Image showcase 1 structure, 3 2D and 3 3D styled examples")

Traditional visual design ends after the application of structure and style. The examples showcased thus far, when rendered, are static by default. Though there is nothing inherently wrong with this fact, we can do more as designers. We can add behavior to a design and quite literally bring it to life. This is an exciting aspect and a powerful ability to attain. Welcome to coding behavior.
