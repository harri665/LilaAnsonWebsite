import { Routes, Route } from 'react-router-dom'
import './App.css'
import Portfolio from './pages/Portfolio.jsx'
import TEDxCU from './pages/TEDxCU.jsx'
import ColoradoSymphony from './pages/ColoradoSymphony.jsx'
import Zine from './pages/Zine.jsx'
import Bluebird from './pages/Bluebird.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="/work/tedxcu" element={<TEDxCU />} />
      <Route path="/work/colorado-symphony" element={<ColoradoSymphony />} />
      <Route path="/work/zine" element={<Zine />} />
      <Route path="/work/bluebird" element={<Bluebird />} />
    </Routes>
  )
}
