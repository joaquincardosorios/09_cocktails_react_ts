import { z } from "zod";
import { CategoriesAPIResponseSchema } from "../utils/repices-schema";

export type Categories= z.infer<typeof CategoriesAPIResponseSchema>