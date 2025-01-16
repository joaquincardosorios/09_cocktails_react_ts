import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipeSliceType } from './recipeSlice'
import { createFavoritesSlice, FavoritesliceType } from './favoriteSlice'

export const useAppStore = create<RecipeSliceType & FavoritesliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a)
})))