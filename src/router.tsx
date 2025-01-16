import {lazy, Suspense} from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './layouts/Layout'

// import IndexPage from './views/IndexPage'
const IndexPage = lazy( () => import('./views/IndexPage'))
const FavoritePages = lazy( () => import('./views/FavoritePages'))

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path='/' element={
            <Suspense fallback='Cargando...'>
              <IndexPage/>
            </Suspense>
          } index />
          <Route path='/favoritos' element={
            <Suspense fallback='Cargando...'>
              <FavoritePages />
            </Suspense>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
