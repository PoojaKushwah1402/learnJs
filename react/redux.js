React state is stored locally within a component. When it needs to be shared with other components, it is passed down through props. ... 
When using Redux, state is stored globally in the Redux store. Any component that needs access to a value may subscribe to the store and gain 
access to that value.

it is a state-managmanet library.

Core Concept :

Store : Holds the state of your application (state should be a single object)
		->holds application state.
		-> allow access to state via getstate()
		->allow tate to be updated via dispatch(action)
		-> register listeners via subscriber(listeners).
		->handling unregistering of listeners via function returned by subscriber(listeners).
		
Action :  describe the changes in your application - (plan js objects, have type property of action being performed)
Reducer : actually carries out state transition depending on actions (specify how pp's state changes in response to actions sent to store)
          function that accepts state and action as an arguments and returns next state

js app cannot directly change redux store, it dispatches an action eg.: -

our js app subscriber the redux store.
js app dispatches an action.
reducer performs action and update redux stor.
changes reflected on js app as it has subscribed redux stor.
