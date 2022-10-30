Context provides a way to pass data through the component tree without having to pass props down manually at every level.

In a typical React application, data is passed top-down (parent to child) via props, but this can be cumbersome for certain types of props 
(e.g. locale preference, UI theme) that are required by many components within an application.
 Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

 When to Use Context
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or 
preferred language. For example, in the code below we manually thread through a “theme” prop in order to style the Button component:

If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.
component composition : passing component as a prop.


 the same data needs to be accessible by many components in the tree, and at different nesting levels. Context lets you “broadcast” such data, and 
 changes to it, to all components below. Common examples where using context might be simpler than the alternatives include managing the current locale, 
 theme, or a data cache.

 const MyContext = React.createContext(defaultValue);

 Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the 
 closest matching Provider above it in the tree.

The defaultValue argument is only used when a component does not have a matching Provider above it in the tree. This can be helpful for 
testing components in isolation without wrapping them. Note: passing undefined as a Provider value does not cause consuming components to use
 defaultValue.

<MyContext.Provider value={/* some value */}>
Every Context object comes with a Provider React component that allows consuming components to subscribe to context changes.

The Provider component accepts a value prop to be passed to consuming components that are descendants of this Provider. One Provider 
can be connected to many consumers. Providers can be nested to override values deeper within the tree