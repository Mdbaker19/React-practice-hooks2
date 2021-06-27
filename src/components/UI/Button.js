import React from 'react';
const Button = props => {
    console.log("Button rendered")
    return <button
        onClick={props.onClick}
    >{props.children}</button>
}
export default React.memo(Button);
// at first this is still being re rendered as the onClick function being passed down is different in terms of memory as it is an object type over primitive type
// with useCallback on the function passed to this button in App.js, the button is using the "same" function