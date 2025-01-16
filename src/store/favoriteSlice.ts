import { StateCreator } from "zustand"
import { Recipe } from "../types"
import { createRecipesSlice } from "./recipeSlice"


export type FavoritesliceType = {
    favorites : Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
}

export const createFavoritesSlice : StateCreator<FavoritesliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExist(recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
        } else {
            // set({
            //     favorites: [ ...get().favorites, recipe]
            // })
            set( (state) => ({
                favorites: [ ...state.favorites, recipe]
            }))
        }
    },
    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    }
})