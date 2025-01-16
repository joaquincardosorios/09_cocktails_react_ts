import { StateCreator } from "zustand"
import { Recipe } from "../types"
import { createNotificationsSlice, NotificationsSliceType } from "./notificationsSlice"
import { RecipeSliceType } from "./recipeSlice"

export type FavoritesliceType = {
    favorites : Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExist: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}

export const createFavoritesSlice : StateCreator<FavoritesliceType & RecipeSliceType & NotificationsSliceType, [], [], FavoritesliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if(get().favoriteExist(recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
            createNotificationsSlice(set,get, api).showNotification({
                text: 'Se eliminó de Favoritos', 
                error: false
            })
        } else {
            // set({
            //     favorites: [ ...get().favorites, recipe]
            // })
            set( (state) => ({
                favorites: [ ...state.favorites, recipe]
            }))
            createNotificationsSlice(set, get, api).showNotification({
                text: 'Se agregó de Favoritos', 
                error: false
            })
        }
        localStorage.setItem('favoritos', JSON.stringify(get().favorites))
    },
    favoriteExist: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromStorage: () => {
        const storedFavorites = localStorage.getItem('favoritos')
        if(storedFavorites){
            set({
                favorites: JSON.parse(storedFavorites)
            })
        }
    }
})