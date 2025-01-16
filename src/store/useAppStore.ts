import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipeSliceType } from './recipeSlice'
import { createFavoritesSlice, FavoritesliceType } from './favoriteSlice'
import { createNotificationsSlice, NotificationsSliceType } from './notificationsSlice'

export const useAppStore = create<RecipeSliceType & FavoritesliceType & NotificationsSliceType>()(devtools((...a) => ({
    ...createRecipesSlice(...a),
    ...createFavoritesSlice(...a),
    ...createNotificationsSlice(...a)
})))