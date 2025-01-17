import axios from "axios"
// import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema, RecipeAPIResponseSchema } from "../utils/repices-schema"
import { DrinksAPIResponseSchema, RecipeAPIResponseSchema } from "../utils/repices-schema"
import { Drink, SearchFilters } from "../types"


// export async function getCategories() {
//     const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
//     const {data} = await axios(url)
//     const result = CategoriesAPIResponseSchema.safeParse(data)
//     if(result.success){
//         return result.data
//     }
// }

export async function getRecipes(filters: SearchFilters){
    const ingredient = filters.ingredient.replace(' ', '_')
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
    const {data} = await axios(url)
    const result = DrinksAPIResponseSchema.safeParse(data)
    if(result.success){
        return result.data
    }
    return {drinks: []}
}

export async function getRecipe(id: Drink['idDrink']){
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const {data} = await axios(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if(result.success){
        return result.data
    }
}
