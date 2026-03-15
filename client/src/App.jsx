import { Routes, Route } from 'react-router-dom'
import './App.css'
import Portfolio from './pages/Portfolio.jsx'
import TEDxCU from './pages/TEDxCU.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/work/tedxcu" element={<TEDxCU />} />
    </Routes>
  )
}
