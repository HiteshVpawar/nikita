import React from 'react'

import download from "../photo/download.png";
    import ReactDOM from "react-dom/client";
    import { BrowserRouter, Routes, Route } from "react-router-dom";
    import Layout from "./pages/Layout";
    import Home from "./pages/Home";
    import Blogs from "./pages/Blogs";
    // import Contact from "./pages/Contact";
    import NoPage from "./pages/NoPage";
import Product from './Product';
import Mproductlist from "../Product/Mproductlist";
import Productcard from '.../pages/Productcard';

    
    export default function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="blogs" element={<Blogs />} />
               <Route path="Productcard" element={<Productcard />} />
              <Route path="Mproductlist" element={<Mproductlist />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      );
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
    
  


    