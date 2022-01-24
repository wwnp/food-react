import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const FoodContex = createContext()
const initialState = {
  categories: [],
  loading: true,
  single: [],
  foodDetails: []
}
export const ContexProvider = (props) => {
  const [value, dispatch] = useReducer(reducer, initialState);
  value.fetchTest = () => {
    dispatch({ type: 'TEST' })
  }
  value.setCategories = (cats) => {
    dispatch({ type: 'SET_CATEGORIES', payload: cats })
  }
  value.stopLoading = () => {
    dispatch({ type: 'LOADING_FALSE' })
  }
  value.setSingle = (food) => {
    dispatch({ type: 'SET_SINGLE_FOOD', payload: food })
  }
  value.setFoodDetails = (foodDetails) => {
    dispatch({ type: 'SET_FOOD_DETAILS', payload: foodDetails })
  }
  return (
    <FoodContex.Provider value={value}>
      {props.children}
    </FoodContex.Provider>
  )
}