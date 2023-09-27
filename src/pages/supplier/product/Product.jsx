import React from "react";
import { Dropdown, Row, Col, Image } from "react-bootstrap";
import axiosService from "../../../helpers/axios";
import UpdateProduct from "./Updateproduct";

function Product({ product, index, refresh }) {
    const handleDelete = () => {
 axiosService
 .delete(`/dashboard/product/${product.id}/`)
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
        <Col>{ product.shop }</Col>
        <Col>{ product.name }</Col>
        <Col>{ product.product_type }</Col>
        <Col>{ product.description }</Col>
        <Col><Image roundedCircle width={160} src={product.img} alt={product.name} /></Col>
        <Col><Image width={160} src={product.img1} alt={product.name} /></Col>
        <Col><Image width={160} src={product.img2} alt={product.name} /></Col>
        <Col>{ product.price }</Col>

        <Col>
            <Dropdown>
                <Dropdown.Toggle>
                    { index }
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <UpdateProduct product={product}  />
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
export default Product;