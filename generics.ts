// S => state
// T => type
// K => Key
// V => Value
// E => Element

function useState<S>() {
    let state: S;

    function getState() {
        return state;
    }

    function setState(newState: S) {
        state = newState;
    }

    return { getState, setState};
}
const newState = useState<boolean>();

newState.setState(false);
console.log(newState.getState());

/*
newState.setState(123);
console.log(newState.getState());

newState.setState("bla");
console.log(newState.getState());
*/