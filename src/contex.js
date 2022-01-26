import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
export const FoodContex = createContext()
export const CAT_MOD ='CAT_MODE'
export const SEARCH_MOD ='SEARCH_MOD'
const initialState = {
  categories: [],
  loading: true,
  single: [],
  foodDetails: [],
  error: '',
  catNames: [],
  randomMeal: {},
  search: '',
  searchMeal: {},
  homeMode: CAT_MOD
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
  value.startLoading = () => {
    dispatch({ type: 'LOADING_TRUE' })
  }
  value.setSingle = (food) => {
    dispatch({ type: 'SET_SINGLE_FOOD', payload: food })
  }
  value.setFoodDetails = (foodDetails) => {
    dispatch({ type: 'SET_FOOD_DETAILS', payload: foodDetails })
  }
  value.setError = (error) => {
    dispatch({ type: 'SET_ERROR', payload: error })
  }
  value.setRandomMeal = (randomMeal) => {
    dispatch({ type: 'SET_RANDOM_MEAL', payload: randomMeal })
  }
  value.setSearch = (search) => {
    dispatch({ type: 'SET_SEARCH', payload: search })
  }
  value.setMeal = (meal) => {
    dispatch({ type: 'SET_MEAL', payload: meal })
  }
  value.setHomeMode = (mode) => {
    dispatch({ type: 'SET_MODE', payload: mode })
  }
  return (
    <FoodContex.Provider value={value}>
      {props.children}
    </FoodContex.Provider>
  )
}