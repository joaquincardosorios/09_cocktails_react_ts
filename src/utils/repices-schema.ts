import {z} from 'zod'

export const CategoriesAPIResponseSchema = z.object({
    drinks: z.array(
        z.object({
            strCategory: z.string()
        })
    )
})

export const SearchFilterSchema = z.object({
    ingredient: z.string(),
    category: z.string()
})

export const DrinkAPIResponseSchema = z.object({
    strDrink: z.string(),
    idDrink: z.string(),
    strDrinkThumb: z.string()
})

export const DrinksAPIResponseSchema = z.object({
    drinks: z.array(
        DrinkAPIResponseSchema
    )
})