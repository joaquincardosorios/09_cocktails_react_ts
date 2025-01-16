import { StateCreator } from "zustand"
// import { getCategories, getRecipe, getRecipes } from "../services/RecipeServices"
import {  getRecipe, getRecipes } from "../services/RecipeServices"
import { Categories, Drink, Drinks, SearchFilters } from "../types"



export type RecipeSliceType = {
    categories: Categories,
    drinks: Drinks,
    // fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilters: SearchFilters) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
}


export const createRecipesSlice : StateCreator<RecipeSliceType> = (set) => ({
    categories: {
        drinks:[]
    },
    drinks: {
        drinks:[]
    },
    // fetchCategories: async() => {
    //     const categories = await getCategories()
    //     set({
    //         categories
    //     })
    // },
    searchRecipes: async (filters) => {
        const drinks = await getRecipes(filters)
        set({drinks})
    },
    selectRecipe: async (id) => {
        const recipe = await getRecipe(id)
    }
})

