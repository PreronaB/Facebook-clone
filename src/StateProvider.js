import React, { createContext, useContext, useReducer } from 'react';

//preparing the data layer
export const StateContext = createContext();

//higher order function
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//useState hook
export const useStateValue = () => useContext(StateContext);