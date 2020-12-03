import React, {createContext, useContext, useReducer} from 'react';

//Create Context: Prepares data layer
export const StateContext = createContext();


//Declare StateProvider: which allows all child cmponents wrapped around StateProvider to access the updated data
export const StateProvider = ({reducer, initialState,children}) => {
    return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}
//Pull data from data layer
export const useStateValue = ()=> {return useContext(StateContext)};