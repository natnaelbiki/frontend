import React from "react";
import { Dropdown, Row, Col } from "react-bootstrap";
import axiosService from "../../../helpers/axios";
import UpdateShop from "./UpdateShop";
import CreateProduct from '../product/CreateProduct';

function Shop({ shop, index, refresh }) {
    const handleDelete = () => {
 axiosService
 .delete(`/dashboard/shop/${shop.id}/`)
 .then(() => {
 refresh();
 })
 .catch((err) => {
    console.error(err);
    alert(err.message);
})

 };
   return (
    <>
        <Row>
        <Col>{ shop.owner.username }</Col>
        <Col>{ shop.name }</Col>
        <Col>{ shop.shop_type }</Col>
        <Col>{ shop.description }</Col>
        <Col>{ shop.location }</Col>
        <Col>
            <Dropdown>
                <Dropdown.Toggle>
                    { index }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <UpdateShop shop={shop} refresh={refresh} />
                <CreateProduct shop={shop}/>
                <Dropdown.Item onClick={handleDelete} className="text-danger" >
                    Delete
                </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col>
        </Row>
    </>
 );
}
export default Shop;