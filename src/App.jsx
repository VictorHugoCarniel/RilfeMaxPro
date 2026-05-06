import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDesc from './components/ProductDesc'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Carrinho from './pages/Carrinho'
import './App.css'

function App() {
  return (  
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productDesc/:id" element={<ProductDesc />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  );
}

export default App

