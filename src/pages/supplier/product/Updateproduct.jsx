import React, { useState } from "react";
import { Modal, Dropdown } from "react-bootstrap";
import UpdateProductForm from "../../../components/dashboard/product/UpdateProductForm";

function UpdateProduct(props) {
 const { product, refresh } = props;
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return (
 <>
 <Dropdown.Item onClick={handleShow}>Modify
 </Dropdown.Item>
 <Modal show={show} onHide={handleClose}>
 	<UpdateProductForm product={product} refresh={refresh} handleClose={handleClose}/>
 </Modal>
 </>
 );
}
export default UpdateProduct;