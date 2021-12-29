import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Options from './options'
import Yeah from '../page/yeah'

export default function() {
  return <div>
    <Options />
    <Routes>
      <Route path="/" element={<Yeah />} />
    </Routes>
  </div>
}