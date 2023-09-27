import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from './Product';
import useSWR from "swr";
import { fetcher } from "../../../helpers/axios";
import axiosService from "../../../helpers/axios";

function ListProduct({shop}) {
    const products = useSWR("/dashboard/product/?shop_name="+shop.id, fetcher, { refreshInterval: 10000, });
   return (
    <>
        <center><h4>List of Products from {shop.name} </h4></center>
        <Row>
        <Col>Shop</Col>
        <Col>Product Name</Col>
        <Col>Type</Col>
        <Col>Description</Col>
        <Col>Price</Col>
        <Col>Image</Col>
        <Col>Image1</Col>
        <Col>Image2</Col>
        <Col>Actions</Col>
        </Row>
            <Row className="my-4">
            {products.data?.results.map((product, index) => (
                <Product product={product} index={index} refresh={products.mutate}/>
            ))}
            </Row>
    </>
 );
}
export default ListProduct;