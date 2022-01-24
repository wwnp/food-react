export const reducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, test: 'test' }
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload }
    case 'LOADING_FALSE':
      return { ...state, loading: false }
    case 'SET_SINGLE_FOOD':
      return { ...state, single: action.payload }
    case 'SET_FOOD_DETAILS':
      return { ...state, foodDetails: action.payload }
    default:
      return state
  }
}