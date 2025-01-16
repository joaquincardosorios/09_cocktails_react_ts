import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import {  NavLink, useLocation } from "react-router-dom";
import { useAppStore } from "../store/useAppStore";
import { SearchFilters } from "../types";



export default function Header() {
  
  const [searchFilters, setSearchFilters] = useState<SearchFilters>({
    ingredient: '',
    // category: ''
  })
  
  const {pathname} = useLocation()
  const isHome = useMemo( () => pathname === '/' ,[pathname])
  
  // const fetchCategories = useAppStore( state => state.fetchCategories)
  const searchRecipes = useAppStore( state => state.searchRecipes)
  // const categories = useAppStore( state => state.categories)
  
  // useEffect( () => {
  //   fetchCategories()
  // },[])

  const handleChange = (e: ChangeEvent<HTMLInputElement> |ChangeEvent<HTMLSelectElement> ) => {
    setSearchFilters({
      ...searchFilters,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // TODO: Validar
    if(Object.values(searchFilters).some( value => value == '')){
      console.log('Todos los campos son obligatorios')
      return
    }

    // Consultar recetas
    searchRecipes(searchFilters)
  }



  return (
    <header className={isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'}>
        <div className="mx-auto container px-5 py-16">
            <div className="flex justify-between items-center">
                <div>
                    <img className="w-32" src="/logo.svg" alt="logo" />
                </div>
                <nav className="flex gap-4">
                  <NavLink 
                    to='/'
                    className={({isActive}) => 
                      isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                    }
                  >Inicio</NavLink>
                  <NavLink 
                    to='/favoritos'
                    className={({isActive}) => 
                      isActive ? 'text-orange-500 uppercase font-bold' : 'text-white uppercase font-bold'
                    }
                  >Favoritos</NavLink>
                </nav>
            </div>
            { isHome && (
              <form 
                onSubmit={handleSubmit}
                className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-16 p-10 rounded-lg shadow space-y-6" >
                <div className="space-y-4">
                  <label 
                    htmlFor="ingredient"
                    className="block text-white uppercase font-extrabold text-lg"
                  >Nombre o Ingredientes</label>
                  <input 
                    type="text" 
                    id="ingredient"
                    name="ingredient"
                    className="w-full p-3 rounded-lg focus:outline-none"
                    placeholder="Nombre o Ingrediente. Ej: Vodka, Tequila, Ron"
                    onChange={handleChange}
                    value={searchFilters.ingredient}
                  />
                </div>
                {/*<div className="space-y-4">
                  <label 
                    htmlFor="category"
                    className="block text-white uppercase font-extrabold text-lg"
                  >Categoria</label>
                   <select 
                    id="category"
                    name="category"
                    className="w-full p-3 rounded-lg focus:outline-none"
                    onChange={handleChange}
                    value={searchFilters.category}
                  >
                    <option value="">-- Seleccione categoria --</option>
                    {categories.drinks.map( category => (
                      <option 
                        key={category.strCategory} 
                        value={category.strCategory}
            
                      >{category.strCategory}</option>
                    ))}
                  </select> 
                </div>*/}
                <input type="submit" value="Buscar Recetas" 
                  className="cursor-pointer bg-orange-800 hover:bg-orange-900 text-white font-extrabold w-full p-2 rounded-lg uppercase"
                />
              </form>
            )}
        </div>
    </header>
  )
}
