import { useMemo } from "react"
import DrinkCard from "../components/DrinkCard"
import { useAppStore } from "../store/useAppStore"

export default function FavoritePages() {

  const favorites = useAppStore(state => state.favorites)
  const hasFavorites = useMemo(() => favorites.length, [favorites])
  return (
    <div className="px-16">
    <div
      className="text-6xl font-extrabold">Favoritos</div>
      {hasFavorites ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-10">
          {favorites.map(drink => (
            <DrinkCard key={drink.idDrink} drink={drink} />
          ))}
        </div>

      ) : (
        <p className="my-10 text-center text-2xl">No hay favoritos aun.</p>
      )}
    </div>
  )
}
