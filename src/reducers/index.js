import { combineReducers } from 'redux';
import { SET_RECIPES, FAVORITE_DRINK, REMOVE_INDEX, SHOW_HEART, HIDE_HEART } from '../actions';


function recipes(state = [], action) {
  switch(action.type) {
    case SET_RECIPES:
    return action.items;
    default: 
    return state;
  }
}

function showHeart(state = [], action) {
  switch(action.type) {
    case SHOW_HEART:
    return [...state,{showHeart: action.showHeart, id: action.id}];
    case HIDE_HEART:
    return state.filter((obj, i) => action.id !== obj.id);
    default:
    return state;
  }
}

function favoriteDrinks(state = [], action) {
  switch(action.type) {

    case FAVORITE_DRINK:
     state = [...state, action.drink]
     return state;
     case REMOVE_INDEX:
     state = state.filter((obj,id) => {
      return action.id !== obj.idDrink})
     return state;
    default:
    return state;
  }
  console.log('s', state)
}

const rootReducer = combineReducers({recipes, favoriteDrinks, showHeart});

export default rootReducer;