import  './logo.svg';
import './App.css';
import Login from './pages/Login';
import ReactDOM from "react-dom/client";
    import { BrowserRouter, Routes, Route } from "react-router-dom";
    import Layout from "./pages/Layout";
    import Home from "./pages/Home";
    import Blogs from "./pages/Blogs";
    import Contact from "./pages/Contact";
    import NoPage from "./pages/NoPage";
import Product from './Product/Product';
import Mproductlist from'./Product/Mproductlist';
import Productcard from './pages/Productcard';
    
// import ProductList from './Product/Productlist';




//  import Product from './pages/product';

//import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import Product from './Product/Product';
// import Mproductlist from './Product/Mproductlist';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
           <Route path="product" element={<Product />} /> 
          <Route path="*" element={<NoPage />} />
          <Route path="productcard" element={<Productcard />} /> 
          <Route path="Mproductlist" element={<Mproductlist/>}/>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
