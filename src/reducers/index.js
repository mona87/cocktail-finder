import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE_DRINK } from '../actions';


function recipes(state = [], action) {
  switch(action.type) {
    case SET_RECIPES:
    return action.items;
    default: 
    return state;
  }
}

function favoriteDrinks(state = [], action) {
  switch(action.type) {
    case FAVORITE_DRINK:
     state = [...state, action.drink]
     return state;
    default:
    return state
  }
}

const rootReducer = combineReducers({recipes, favoriteDrinks});

export default rootReducer;