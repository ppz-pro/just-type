import React from 'react'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

import JustType from '../page/just-type/entry'
import Test from '../page/test'

export default function() {
  return <HashRouter>
    <Routes>
      <Route path="/test" element={<Test />} />
      <Route path="/*" element={<JustType />} />
    </Routes>
  </HashRouter>
}