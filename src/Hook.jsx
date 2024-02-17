import { useState } from "react";

function Hook() {
    const [counter, setCounter] = useState(() => (15));
    // we used the hook for hold and update the value beacuse we state is updated then page re render and changes visiable in the DOM, if we used variable like const and let so state is update but page is not re -render and changes not visiable  
    function addValue() {
        if (counter < 30) {
            setCounter(() => (counter + 1))
        }
        else (
            alert("Limit exceed, please used removValue button ")
        )
    }
    function removeValue() {
        if (counter > 0) {
            setCounter(() => (counter - 1))
        }
        else (
            alert("Limit exceed, please used addValue button ")
        )
    }
    return (
        <>
            <h1>My React Hook code</h1>
            <div>counter Value :- {counter}</div>
            <br />
            <button onClick={addValue} /*we also give the function refernece because i want to execute this function on onClick event, if we give function with execution then function run without click event */>Add Value</button> {" "}
            <button onClick={removeValue}>Remove Value</button>
        </>
    )
}
export default Hook