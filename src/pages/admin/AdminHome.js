import React from "react";
import { Outlet } from 'react-router-dom';
import Layout from "../../components/Layout";


function AdminHome() {
   return (
    <Layout>
    <h3>Welcome to Dicha Deli</h3>
         <Outlet />
    </Layout>
 );
}
export default AdminHome;