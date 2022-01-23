export const reducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      return { ...state, test: 'test' }
    case 'SET_CATEGORIES':
      return { ...state, categories: action.payload }
    case 'LOADING_FALSE':
      return { ...state, loading: false }
    default:
      return state
  }
}