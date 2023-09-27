import React from "react";
import { Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import { getUser } from "../../hooks/user.actions";

function DeliveryHome() {
    const user = getUser();

   return (
    <Layout>
        <h1>Delivery { user.username }</h1>
    </Layout>
 );
}
export default DeliveryHome;