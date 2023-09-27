import React from "react";
import { Row, Col } from "react-bootstrap";
import Shop from './Shop';
import ListProduct from "../product/ListProduct";

function ListShop({ shops }) {
   return (
    <>
        <center><h4>List of Shop</h4></center>
        <Row>
        <Col>Owner</Col>
        <Col>Name</Col>
        <Col>Type</Col>
        <Col>Description</Col>
        <Col>Location</Col>
        <Col>Actions</Col>
        </Row>
            <Row className="my-4">
            {shops.data?.results.map((shop, index) => (
                <>
                <Shop index={index} shop={shop} refresh={shops.mutate} />
                <ListProduct shop={shop} />
                </>
            ))}
            </Row>
    </>
 );
}
export default ListShop;