What is the diff algorithm?

As evident from its name, the main work of a diff algorithm is to find a heuristic to change anything from a state to another. Let’s say there is a text A 
and with the minimal number of steps, it has to be changed to text B. The basic idea is to find a ‘modification script’ that will turn Text A into Text B.
 The scripts includes insertion and deletion. Usually, the minimal number of changes is required, but some application might also have to weigh the 
 operations depending on how much text each one affects, or other factors.

 Why is it needed to React?

The first time we render a react component, a tree of all the elements is made(point A). On the next update of any state or prop element,  the render() 
function is called again to update a different set of react elements(point B), what react needs is to identify the fattest/ minimal utilization of 
resources to react from point A to point B. The general solution to this problem has a complexity in the order of O(n3), where n is the number of 
elements in the tree.

How React approached this problem?

If we used the above approach in React, displaying 1000 elements would require in the order of one billion comparisons. This is far too exhausting and 
time taking. Instead, React implements a heuristic O(n) algorithm based on two assumptions:

Two elements of different types will produce different trees.
The developer can hint at which child elements may be stable across different renders with a key prop.

Different root element
If the root element is different , it completely tears down the old tree and begins from the root of the new tree

Point A							Point B
<p><MyComponent></p>	<span><MyComponent></span>
 

In the above case, it will unmount(componentWillUnmount) point A and mount (componentWillMount followed by componentDidMount) point B.