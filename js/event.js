The standard DOM Events describes 3 phases of event propagation:

Capturing phase – the event goes down to the element.
Target phase – the event reached the target element.
Bubbling phase – the event bubbles up from the element.


That is: for a click on <td> the event first goes through the ancestors chain down to the element (capturing phase), then it reaches the target and 
triggers there (target phase), and then it goes up (bubbling phase), calling handlers on its way.

To catch an event on the capturing phase, we need to set the handler capture option to true:

elem.addEventListener(..., {capture: true})
// or, just "true" is an alias to {capture: true}
elem.addEventListener(..., true)

There are two possible values of the capture option:

If it’s false (default), then the handler is set on the bubbling phase.
If it’s true, then the handler is set on the capturing phase.

If we have multiple event handlers on the same phase, assigned to the same element with addEventListener, they run in the same order as they are created:

elem.addEventListener("click", e => alert(1)); // guaranteed to trigger first
elem.addEventListener("click", e => alert(2));

Any event handler can stop the event by calling event.stopPropagation(), but that’s not recommended, because we can’t really be sure we won’t need it above, maybe for completely different things.

The capturing phase is used very rarely, usually we handle events on bubbling. And there’s a logic behind that.

Event bubbling is when an event will traverse from the most inner nested HTML element and move up the DOM hierarchy until it arrives at the element which listens for the event. This move is also popularly
 known as Event Propagation or Event Delegation.

 Sometimes, you don't want events to trave in a direction, then you can use stopPropagation() of the event object. The event object
  is provided as a parameter in the callback function.

  You just learned target refers to the DOM that triggered the event. CurrentTarget will refer to the DOM that the event listener is listening on.

  If the parent element has an event listener but we stop event propagation in the child, the currentTarget refers to the DOM that stopped the propagation

  Listening carefully to user interactions and handling them correctly is the first step to make bug-free apps. Remember that bubbling literally bubbles up 
  from inside to outside and capturing is when the event falls down!

  if a single element has multiple eventhandlers then it will executes in the order it is written.

  	The stopImmediatePropagation() method of the Event interface prevents other listeners of the same event from being called.

If several listeners are attached to the same element for the same event type, they are called in the order in which they were added. If stopImmediatePropagation()
 is invoked during one such call, no remaining listeners will be called.