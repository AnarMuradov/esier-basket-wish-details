import './App.css';
import { BrowserRouter,  Routes , Route } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Products from './Pages/Products';
import Basket from './Pages/Basket';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>} >
        <Route path="/" element={<Products/>} />
        <Route path="/Basket" element={<Basket/>} />
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
