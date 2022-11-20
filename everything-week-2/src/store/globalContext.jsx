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
            case "CHANGEUSERNAME":
            return {...state, username: action.payload}
            case "ADDPRODUCT":
                console.log(action.payload)
                const newList = [...state.products, action.payload]
                const newTotal = newList.reduce((accVal, item) => {
                    return accVal + +item.price

                }, 0)
                return {...state, products: newList, total: newTotal}
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
