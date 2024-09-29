import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Authentication from './pages/Authentication'
import Dashboard from './pages/Dashboard'
import About from './pages/About'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Authentication />} /> 
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<About />} />

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
