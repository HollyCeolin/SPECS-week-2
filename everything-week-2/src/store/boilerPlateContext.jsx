import { createContext, useReducer } from "react";

const initialState = {
    username: "Bruce",
    person: 1,
    total: 0,
    products: []
}

const GlobalContext = createContext()

const GlobalContextProvider = (props) => {

    const reducer = (state, action) => {
        switch(action.type) {
            default: 
            return state
        }
    }


    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <GlobalContext.Provider value={{state, dispatch}}>
            {props.children}
            </GlobalContext.Provider>
    )
}

export default GlobalContext
export {GlobalContextProvider}