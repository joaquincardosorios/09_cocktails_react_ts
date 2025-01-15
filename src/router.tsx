import { BrowserRouter, Routes, Route} from 'react-router-dom'
import IndexPage from './views/IndexPage'
import FavoritePages from './views/FavoritePages'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<IndexPage/>} />
        <Route path='/favoritos' element={<FavoritePages/>} />
      </Routes>
    </BrowserRouter>
  )
}
