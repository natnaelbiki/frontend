import React from "react";
import { Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getUser } from "../../hooks/user.actions";
import { Outlet } from 'react-router-dom';
import DashboardProduct from './shop/DashboardProduct';

function MainHome() {
    const user = getUser();

   return (
    <Layout>
        <DashboardProduct />
    </Layout>
 );
}
export default MainHome;