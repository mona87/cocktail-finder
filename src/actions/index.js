export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_DRINK = 'FAVORITE_DRINK';
export const REMOVE_INDEX = 'REMOVE_INDEX';
export const SHOW_HEART = 'SHOW_HEART';
export const HIDE_HEART = 'HIDE_HEART';

export function setRecipes(items) {
    return {
        type: SET_RECIPES,
        items 
    }
}

export function showHeart(id, showHeart){
  return {
    type: SHOW_HEART,
    id,
    showHeart
  }
}

export function hideHeart(id, hideHeart){
  return {
    type: HIDE_HEART,
    id,
    hideHeart
  }
}


export function favoriteDrink(drink) {
  return {
    type: FAVORITE_DRINK,
    isFavorite: true,
    drink
  }
}

export function removeDrink(id) {
  return {
    type: REMOVE_INDEX,
    id
  }
}