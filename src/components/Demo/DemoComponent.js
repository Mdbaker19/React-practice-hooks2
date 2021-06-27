import React from 'react';
import Para from "../para";

const DemoComponent = props => {
    console.log("Demo running, props show is hard coded false, state does not change so we do not want to re render this so we use React.memo")
    return <Para>{props.show ? "This is new" : ""}</Para>
}
// export default DemoComponent;
// component execution is only redone if the props have changed
export default React.memo(DemoComponent);

//React memo optimizes components, the checking of the prop values for if they changed has a performance cost, the re eval of the prior state to the new state
// Good for a large component tree to avoid a branch of components from being re rendered, cost savings