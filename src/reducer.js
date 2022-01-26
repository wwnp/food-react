export const reducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, test: 'test' }
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload }
    case 'LOADING_FALSE':
      return { ...state, loading: false }
    case 'LOADING_TRUE':
      return { ...state, loading: true }
    case 'SET_SINGLE_FOOD':
      return { ...state, single: action.payload }
    case 'SET_FOOD_DETAILS':
      return { ...state, foodDetails: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.payload }
    case 'SET_CAT_NAMES':
      return { ...state, catNames: action.payload }
    case 'SET_RANDOM_MEAL':
      return { ...state, randomMeal: action.payload }
    case 'SET_SEARCH':
      return { ...state, search: action.payload }
    case 'SET_MEAL':
      return { ...state, searchMeal: action.payload }
    case 'SET_MODE':
      return { ...state, homeMode: action.payload }
    case 'SET_FILTERED_CATEGORIES':
      return { ...state, filteredCategories: action.payload }
    default:
      return state
  }
}