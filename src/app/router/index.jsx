import React from 'react'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

export default function() {
  return <HashRouter>
    <Routes>
      <Route path="/user" element={<div>user</div>} />
      <Route path="/" element={<div>home</div>} />
    </Routes>
  </HashRouter>
}