// export default (default = null, action) => {
// return 123;
// return 'string';
// return [];
// return {};
// return null;
// undefined

// };


// Reducers must return any value besides undefined.

// Produces state or data to be used inside of your app using only previous state and the action object that has been
// dispatched.

// Dont forget initial call of reducer. Its called at build and cant be undefined. Have to assign and initial
// state value.

// reducers must not reach out of itself
// must not mutate its input state argument
// state.pop()  - bad
// state.push()  - bad


export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload;
        default:
            return state;
    }
};
