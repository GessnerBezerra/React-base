import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import { Hooks } from '../pages/Hooks'

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Hooks />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
