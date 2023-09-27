import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import Registration from "./pages/auth/Registration";
import Login from "./pages/auth/Login";

import AdminHome from "./pages/admin/AdminHome";
import AdminListShop from './pages/admin/AdminListShop';

import SupplierHome from "./pages/supplier/SupplierHome";
import CreateShop from "./pages/supplier/shop/CreateShop";
import ListShop from './pages/supplier/shop/Listshop';

import CreateProduct from "./pages/supplier/product/CreateProduct";
import ListProduct from './pages/supplier/product/ListProduct';
import Home from './pages/Index';

//Customer Pages
import MainHome from './pages/dashboard/MainHome';

import useSWR from "swr";
import { fetcher } from "./helpers/axios";


function App() {
  const shop = useSWR("/dashboard/shop/", fetcher, { refreshInterval: 10000, });
  return (
    <>
    <Routes> 
      <Route path="/admin/" element={<ProtectedRoute><AdminHome /></ProtectedRoute>} >
        <Route path="/admin/createshop/" element={<CreateShop />} />
        <Route path="/admin/listshop/" element={<AdminListShop shops={shop}/>} />
      </Route>
      <Route path="/dashboard" element={<ProtectedRoute><MainHome /></ProtectedRoute>}>
      </Route>
      <Route path="/supplier/" element={<ProtectedRoute><SupplierHome /></ProtectedRoute>} >
        <Route path="/supplier/createshop/" element={<CreateShop />} />
        <Route path="/supplier/listshop/" element={<ListShop shops={shop}/>} />
        <Route path="/supplier/createproduct/" element={<CreateProduct />} />
        <Route path="/supplier/listproduct/" element={<ListProduct shops={shop}/>} />
      </Route>
      <Route path="/login/" element={<Login />} />
      <Route path="/register/" element={<Registration />} />
   </Routes>
   </>
  );
}

export default App;
