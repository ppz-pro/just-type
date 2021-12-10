import React from 'react'
import {
  Routes,
  Route
} from 'react-router-dom'
import Head from './head'
import Yeah from '../page/yeah'

export default function() {
  return <div>
    <Head />
    <Routes>
      <Route path="/" element={<Yeah />} />
    </Routes>
  </div>
}