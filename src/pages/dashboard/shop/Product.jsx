import React from "react";
import { Card, Dropdown, Row, Col, Image, Button } from "react-bootstrap";
import axiosService from "../../../helpers/axios";

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
    <Col>
   <Card className="rounded-3 my-4">
   <Card.Body>
       <Card.Title className="d-flex flex-row justify-content-between">
       <div className="d-flex flex-row">
       <Image src={product.img} roundedCircle width={48} height={48} className="me-2 border border-primary border-2" />
       <Image src={product.img1} roundedCircle width={48} height={48} className="me-2 border border-primary border-2" />
       <Image src={product.img2} roundedCircle width={48} height={48} className="me-2 border border-primary border-2" />
       <div className="d-flex flex-column justify-content-start align-self-center mt-2">
       <p className="fs-6 m-0">{product.name}</p>
       <p className="fs-6 m-0">{product.shop}</p>
       <p className="fs-6 m-0">{product.price}</p>
       </div>
       </div>
       </Card.Title>
       <Card.Text>{product.description}</Card.Text>
   </Card.Body>
   <Card.Footer className="d-flex bg-white w-50 justify-content-between border-0">
       <div className="d-flex flex-row">
           <Button>+cart</Button>
       </div>
       <div className="d-flex flex-row">
       <Button>Order</Button>
       </div>
       {/* Add comment icon here*/}
   </Card.Footer>
   </Card>
    </Col>
 );
}
export default Product;