import React from "react";
import { Row, Col } from "react-bootstrap";
import Shop from '../supplier/shop/Shop';

function AdminListShop({ shops }) {
   return (
    <>
        <center><h4>List of Shop</h4></center>
        <Row>
        <Col>Name</Col>
        <Col>Description</Col>
        <Col>Location</Col>
        <Col>Actions</Col>
        </Row>
            <Row className="my-4">
            {shops.data?.results.map((shop, index) => (
                <Shop index={index} shop={shop} refresh={shops.mutate} />
            ))}
            </Row>
    </>
 );
}
export default AdminListShop;