import './App.css';
import { BrowserRouter,  Routes , Route } from "react-router-dom";
import MainLayout from './Layouts/MainLayout';
import Products from './Pages/Products';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>} >
        <Route path="/" element={<Products/>} />
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
