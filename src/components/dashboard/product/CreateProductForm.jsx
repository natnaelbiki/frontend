import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axiosService from "../../../helpers/axios";
import { useNavigate } from "react-router-dom";


function CreateProductForm({shop}){
	const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const registrationForm = event.currentTarget;
    if (registrationForm.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    const data = {
      shop: shop.name,
      name: form.name,
      description: form.description,
      price: form.price,
      stock: form.stock,
      product_type: form.type,
      Img: form.Img,
      Img1: form.Img1,
      Img2: form.Img2,
    };
    axiosService.post("/dashboard/product/", data).then((res) => {
      alert(res.data.name);
      navigate('/supplier')
    }).catch((error) => {
      console.log(error);
      setError(error.message);
    })
  };

  return (
    <Form id="registration-form" className="border p-4 rounded" noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name of the Product at {shop.name}</Form.Label>
        <Form.Control value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required type="text" placeholder="Enter name"/>
        <Form.Control.Feedback type="invalid"> This file is required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required type="text" placeholder="Enter description"/>
        <Form.Control.Feedback type="invalid">This file is required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Stock</Form.Label>
        <Form.Control value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} required type="number" placeholder="Enter Stock on Hand"/>
        <Form.Control.Feedback type="invalid">This file is required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required type="number" placeholder="Enter Price"/>
        <Form.Control.Feedback type="invalid">This file is required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control value={form.Img} onChange={(e) => setForm({ ...form, Img: e.target.value })} required type="file" />
        <Form.Control.Feedback type="invalid">This file is required.</Form.Control.Feedback>
      </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Image 1</Form.Label>
        <Form.Control value={form.Img1} onChange={(e) => setForm({ ...form, Img1: e.target.value })} required type="file" />
        <Form.Control.Feedback type="invalid">This file is required.</Form.Control.Feedback>
      </Form.Group>
       <Form.Group className="mb-3">
        <Form.Label>Image 2</Form.Label>
        <Form.Control value={form.Img2} onChange={(e) => setForm({ ...form, Img2: e.target.value })} required type="file" />
        <Form.Control.Feedback type="invalid">This file is required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Control.Feedback type="invalid">This file is required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Type</Form.Label>
        <Form.Control as='select' value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option value="">---- choose type ----</option>
          <option value="food">Food</option>
          <option value="beverage">beverage</option>
          <option value="traditional">Traditional</option>
          <option value="hot">hot drink</option>
        </Form.Control>
        <Form.Control.Feedback type="invalid">This file is required.</Form.Control.Feedback>
      </Form.Group>
      <div className="text-content text-danger">
        {error && <p>{error}</p>}
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    );
}

export default CreateProductForm;