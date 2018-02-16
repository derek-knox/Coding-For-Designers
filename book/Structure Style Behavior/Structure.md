## Structure

Structure, as previously mentioned, is a particular arrangement of a set of building blocks. In simpler terms, structure is organization. Structural designs are the organization of structural building blocks.

These building blocks are contextual. In the context of 2D with the web platform, these building blocks are HTML elements (HyperText Markup Language). In the context of 3D with Unity, these building blocks are GameObjects.

The building blocks are different depending on the context, but the underlying relationships between them are identical. Reusable knowledge is the win here. These relationships are referred to as *parent-child* relationships, a *tree*. In both a 2D and a 3D structure, a tree of parent-child relationships exists. The same parent-child relationships, the same tree structure, can have many layout variations in both 2D and 3D. Structure is not layout, it is simply the tree of parent-child relationships.

The *body* for an HTML document and the *scene* for Unity are each the root parent for their respective platforms. The simplest tree structure, in both 2D and 3D, consists of a single child node of the root parent. This is a one-node tree. 

![TODO - Image 1 node 2D and 1 node 3D (parent only)](../assets/img/visual-todo-placeholder.jpg "TODO - Image 1 node 2D and 1 node 3D (parent only)")

The second simplest structure has two variants:
1. two child nodes
2. a single child that is also a parent due to itself containing one child

These are both examples of two-node trees. 

![TODO - Image 2 node 2D and 2 node 3D (parent with child and two parents)](../assets/img/visual-todo-placeholder.jpg "TODO - Image 2 node 2D and 2 node 3D (parent with child and two parents)")

The structural variations building off these examples, as you can imagine, are infinite. Here are some visual examples for context:

![TODO - Image X nodes 2D and X nodes 3D (complex example of any variation of above examples)](../assets/img/visual-todo-placeholder.jpg "TODO - Image X nodes 2D and X nodes 3D (complex example of any variation of above examples)")

As you’ll notice in the 2D and 3D examples above, what differs between them is only the building block type. The variations of the parent-child relationships remain constant. What results is a tree structure. This is the takeaway.

The computer program, the web browser for our 2D examples and the Unity Engine for our 3D examples, knows how to read and decode a tree structure. Each program then outputs a 2D or 3D rendering respectively. It is important to understand that the tree structure simply defines the relationships between the building blocks. HTML elements for 2D with the web platform and GameObjects for 3D with the Unity platform.

As our custom defined structure is respected and properly reflected by each platform, we may begin to stylize each building block. This stylization process ensures particular aesthetic or functional effects are present for the viewer. As visual designers, this is usually the most fun and rewarding part. Style time.
