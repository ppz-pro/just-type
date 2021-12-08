import React from 'react'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

import TypeWord from '../../page/type-word'
import Test from '../../page/test'

export default function() {
  return <HashRouter>
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/" element={<TypeWord />} />
    </Routes>
  </HashRouter>
}