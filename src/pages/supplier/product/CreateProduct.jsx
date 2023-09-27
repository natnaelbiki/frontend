import React, { useState } from "react";
import CreateProductForm from "../../../components/dashboard/product/CreateProductForm";
import { getUser } from "../../../hooks/user.actions";
import { Dropdown, Row, Col, Modal } from "react-bootstrap";

function CreateProduct({ shop }) {
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

   return (
    <>
    <Dropdown.Item onClick={handleShow}>Create Product for  { shop.name }</Dropdown.Item>
    <Modal show={show} onHide={handleClose}>
    <CreateProductForm shop={shop} handleClose={handleClose}/>
 </Modal>
        
    </>
 );
}
export default CreateProduct;