these are the js functions that can optionally receve object of properties and return html code(JSX) that desciber the UI.

PURE COMPONENTS :

we can create a component by extending a PuneComponent class.
a pure component implements the shouldComponentUpdate lifecycle method by performing a shallow comparasion on props and state of components.
If there is no difference, the component is not re-rendered -- Performance boost.

it is good idea to ensure that all the children components are pure component to avoid unexpected behavious.
never mutate the state. always return new object that reflect he new state.

pure components always work with class components.

MEMO COMPONENTS:
what pure components to class based components is memo components to functional components.

Refs :
Refs in Reactjs ia a way to access or manupulate dom elements.



---------------
React Components (5 Part Series) :

1. -Layout Component and why we use it in React
2.  -Functional Component in React
3.  -Class-Based Component in React
4.  Presentational and Container Components in React
5.  High-Order Component (HOC) in React

LayOUT : 
This component does exactly what its name says - it defines the layout of the application. It simply accepts children as props and render them to the DOM 
together or without other child components.

Presentational and Container Components in React:
These 2 types does NOT extend React.Component base class. There is NO such type as PresentationalComponent or Container. It's more like a convention 
or pattern, which developers use while building applications with React.
the devision to Presentational and Container components is a development pattern, used by developers to distinct components by their purpose:
presentational components takes care of how things look
container component takes care of how things work

Main features of Presentational Component
their main function is to display the data;
they usually contain just render() method or just JSX;
they can have their own styles;
they rarely have their own state (when they do, it’s UI state rather than data);
they don't know how to change/mutate data;
they receive data via props from container component;
they usually are written as stateless function components (though this is not a rule)
Lists are also examples of presentational component since all what they really do is to define how to display list of components and to pass data via props
 to those components.

 Main features of Container Component
their main function is organise the behaviour of data
they contain more elements together with render() function (other presentational components, lifecycle methods or hooks);
they don't have their own styles;
they have state and manage it;
they provide data and behaviour to children components;
they usually are written as class-based stateful components (even though nowadays its a tendency to use hooks, so most often they are written as 
	functional stateful components)

HEIGHER ORDER COMPONENTS : 
High-Order Component is NOT a part of React API, it means that there is NO such type as HighOrderComonent. This is a pattern that emerged 
from React’s compositional nature. Basically, HOCs are functions that return a component(s). They are used to share logic with other components.

Main Features of HOC
it receives a component as parameter
it returns a component with extended functionalities
it doesn't modify or mutate component but creates a new one
it creates re-usable logic which can be used multiple times (incorporate the don’t-repeat-yourself (DRY) principle of programming)
it is mostly used in class-based components

Display a loader while a component waits for data
2.Conditional rendering 