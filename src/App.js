import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './Pages/Inicio';
import { InicioCategory } from './Pages/InicioCategory';
import { Produto } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/produtos' element={<InicioCategory category='produto' />}/>
        <Route path='/servicos' element={<InicioCategory category='servico' />}/>
        <Route path='/product' element={<Produto/>}>
          <Route path='ProductId' element={<Produto/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
