
import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import HomePage from './screens/HomePage';
import Cart from './pages/Cart';
import Register from './pages/Register';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Admin from './pages/Admin';
import Adddress from './pages/Adddress';
import Userslist from './pages/Userslist';
import Orderslist from './pages/Orderslist';
import Dresseslist from './pages/Dresseslist';
import Editdress from './pages/Editdress';
import Navbars from './components/Navbar';


function App() {
  return (
    <div className="App">
    <Navbars/>
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<HomePage/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/orders" element={<Orders/>}/>
      <Route path="/admin" element={<Admin/>}/>
      <Route path="/admin" exact element={<Userslist/>}/>
      <Route path="/admin/userlist" exact element={<Userslist/>}/>
      <Route path="/admin/orderslist" exact element={<Orderslist/>}/>
      <Route path="/admin/dresseslist" exact element={<Dresseslist/>}/>
      <Route path="/admin/adddress" exact element={<Adddress/>}/>
      <Route
        path="/admin/editdress/:dressid"
        exact element={<Editdress/>}
      />
      

    </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
