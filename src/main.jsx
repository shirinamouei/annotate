import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HashRouter } from 'react-router-dom'
import './index.css'
import Login from './pages/Login'
import Annotate from './pages/Annotate'
import Admin from './pages/Admin'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <BrowserRouter> */}
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/annotate" element={<Annotate />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </HashRouter>
    {/* </BrowserRouter> */}
  </StrictMode>,
)
