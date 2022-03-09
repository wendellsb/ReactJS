"use strict";
// S => state
// T => type
// K => Key
// V => Value
// E => Element
// function useState<S extends number | string = string>() {
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
/*
newState.setState(false);
console.log(newState.getState());


newState.setState(123); //numero
console.log(newState.getState());
*/
newState.setState("bla"); //string
console.log(newState.getState());
