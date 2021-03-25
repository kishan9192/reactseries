const createStore = (reducer) => {
    let state;
    let listeners = [];

    // getState method returns the current state
    const getState = () => state

    const dispatch = action => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    // Subscribe methods takes a listener, which is a callback function. So when we subscribe,
    // it calls the listener everytime
    // store.subscribe(()=>console.log(store.getState()))  here listener is = console.log(store.getState())
    // and this callback function is called, any time an action has been dispatched, and the state tree is changed


    // dispatch(action) => reducer (state, action) => newState, => listener called => repeat 
    const subscribe = listener => {
        listeners.push(listener)
        
        // on Unsubscribe it returns an object with unsubscribing to that listener
        return () => {
            listeners = listeners.filter(l => l !== listener);
        };
    };

    return {getState, dispatch, subscribe};
};