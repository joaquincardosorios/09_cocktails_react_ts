import { StateCreator } from "zustand"
// import { getCategories, getRecipe, getRecipes } from "../services/RecipeServices"
import { getRecipe, getRecipes } from "../services/RecipeServices"
// import { Categories, Drink, Drinks, Recipe, SearchFilters } from "../types"
import { Drink, Drinks, Recipe, SearchFilters } from "../types"



export type RecipeSliceType = {
    // categories: Categories,
    drinks: Drinks,
    selectedRecipe: Recipe,
    modal: boolean
    // fetchCategories: () => Promise<void>,
    searchRecipes: (searchFilters: SearchFilters) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    closeModal: () => void
}


export const createRecipesSlice : StateCreator<RecipeSliceType> = (set) => ({
    // categories: {
    //     drinks:[]
    // },
    drinks: {
        drinks:[]
    },
    selectedRecipe: {} as Recipe,
    modal: false,
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
        const selectedRecipe = await getRecipe(id)
        set({
            selectedRecipe,
            modal: true
        })
    },
    closeModal: () =>{
        set({ modal: false });
        setTimeout(() => {
            set({ selectedRecipe: {} as Recipe });
        }, 300);
    }
})

