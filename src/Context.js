import React from "react";
import { createContext,useReducer } from "react";

export const themecontext = createContext();

const initialState = {darkMode:true};

const themeReducer = (state, action) =>{
    switch(action.type){
        case 'toggle':
            return {darkMode:!state.darkMode};
        default:
            return state;
    }
}

export const ThemeProvider = (props) =>{
    const [state, dispatch] = useReducer(themeReducer, initialState)
    return (
        <themecontext.Provider value={{state,dispatch}}>
            {props.children}
        </themecontext.Provider>
    );
};