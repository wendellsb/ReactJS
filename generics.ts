// S => state
// T => type
// K => Key
// V => Value
// E => Element

type numOrStr = number | string

// function useState<S extends number | string = string>() {
    function useState<S extends numOrStr = string>() {
    let state: S;

    function getState() {
        return state;
    }

    function setState(newState: S) {
        state = newState;
    }

    return { getState, setState};
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
