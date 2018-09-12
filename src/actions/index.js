export const SET_RECIPES = 'SET_RECIPES';
export const FAVORITE_DRINK = 'FAVORITE_DRINK';
export const IS_FAVORITE = 'IS_FAVORITE';

export function setRecipes(items) {
    return {
        type: SET_RECIPES,
        items 
    }
}

export function favoriteDrink(drink) {
  return {
    type: FAVORITE_DRINK,
    isFavorite: true,
    drink
  }
}