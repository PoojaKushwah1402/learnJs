It is js open source javascript library not a framework.
It is used to build user interfaces.
React is declarative().
it has rich ecosystem and place well with other libraries.
It is component based architechture. so easy to maintain, and easy to make complex UI by breaking it to small encapsulated part.
easy to reuse code.

Create React APP :
it is a command line interface that allows you to create and run react app with no configuration.

we can create react app by 2 methods :
npm and npx-
with npx we can directly create react app by entering command - npx create-react-app folder-name;
with npm we need to install react first then we can use it.
npm create-react-app -g
create-react-app foldername

Comment :
component represent the part of user UI.
all the components come together to make entire application.
componetes are reusable.
components are js code.
type :
stateless functional componets. -(simple js functions)
ctateful class components.(class that extends components from react library | must conatin render() mathod)




To fix it, use a second form of setState() that accepts a function rather than an object. That function will receive the previous state as the first argument, and the props at the time the update is applied as the second argument:

// Correct
this.setState((state, props) => ({
  counter: state.counter + props.increment
}));