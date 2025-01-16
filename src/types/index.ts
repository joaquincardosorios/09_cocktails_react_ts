import { z } from "zod";
import { CategoriesAPIResponseSchema, DrinksAPIResponseSchema, SearchFilterSchema } from "../utils/repices-schema";

export type Categories= z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilters = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksAPIResponseSchema>