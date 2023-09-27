import React from "react";
import CreateShopForm from "../../../components/dashboard/shop/CreateShopForm";
import { getUser } from "../../../hooks/user.actions";

function CreateShop() {
    const user = getUser();
   return (
    <>
        <center><h1>Create Shop: { user.username }</h1></center>
        <CreateShopForm />
    </>
 );
}
export default CreateShop;