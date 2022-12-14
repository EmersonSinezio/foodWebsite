import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import About from './pages/About'
import Products from './pages/Products'
function PageRoutes() {
  return (
  <>
  {/* Gerenciamento de rotas com react router dom*/}
      <Router>
        <Routes>
            <Route path='/about' exact element={<About/>}/>
            <Route path='/' exact element={<Products/>}/>
        </Routes>
    </Router>
  </>
  )
}

export default PageRoutes