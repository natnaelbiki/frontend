import React, { useState } from "react";
import { Modal, Dropdown } from "react-bootstrap";
import UpdateShopForm from "../../../components/dashboard/shop/UpdateShopForm";

function UpdateShop(props) {
 const { shop, refresh } = props;
 const [show, setShow] = useState(false);
 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);

 return (
 <>
 <Dropdown.Item onClick={handleShow}>Modify
 </Dropdown.Item>
 <Modal show={show} onHide={handleClose}>
 	<UpdateShopForm shop={shop} refresh={refresh} handleClose={handleClose}/>
 </Modal>
 </>
 );
}
export default UpdateShop;