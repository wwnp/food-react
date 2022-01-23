import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const FoodContex = createContext()
const initialState = {
  categories: [],
  loading: true
}
export const ContexProvider = (props) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  value.fetchTest = () => {
    dispatch({ type: 'TEST' })
  }
  value.setCats = (cats) => {
    dispatch({ type: 'SET_CATEGORIES', payload: cats })
  }
  value.stopLoading = () => {
    dispatch({ type: 'LOADING_FALSE' })
  }
  return (
    <FoodContex.Provider value={value}>
      {props.children}
    </FoodContex.Provider>
  )
}