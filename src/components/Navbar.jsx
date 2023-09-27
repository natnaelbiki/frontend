import React from 'react';
import { useNavigate } from "react-router-dom";
import { getUser } from "../hooks/user.actions";
import AdminNavBar from "./navbar/AdminNavBar";
import SupplierNavBar from "./navbar/SupplierNavBar";
import DeliveryNavBar from "./navbar/DeliveryNavBar";
import MainNavBar from "./navbar/MainNavBar";

function Navigationbar() {
	const user = getUser();
    const navigate = useNavigate();
    const handleUnknownRole = () => {
        navigate("/login");
    }
   return user.role === "CUSTOMER"  ? (<MainNavBar />):(
    user.role === "ADMIN" || 'Admin' ? (<AdminNavBar />):(
        user.role === "SUPPLIER" || 'Supplier' ? (<SupplierNavBar />):(
            user.role === "DELIVERY" ? (<DeliveryNavBar />):(
                <div>user unknown</div>)))
    );
}
export default Navigationbar;