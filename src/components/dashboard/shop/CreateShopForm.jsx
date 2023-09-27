import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axiosService from "../../../helpers/axios";
import { useUserActions, getUser } from "../../../hooks/user.actions";
import { useNavigate } from "react-router-dom";


function CreateShopForm(){
	const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const [location, setLocation] = React.useState({});
  const userActions = useUserActions();
const user = getUser();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const registrationForm = event.currentTarget;
    if (registrationForm.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    const data = {
    	owner: user.id,
      name: form.name,
      description: form.description,
      shop_type: form.type,
      location: form.location,
    };
    
    axiosService
 .post("/dashboard/shop/", data)
 .then((res) => {
 	alert("Successfuly created shop:" + res.data.name);
  navigate('/supplier/listshop')
 })
 .catch((error) => {
 console.log(error);
 alert(error.message);
 })
  };

  return (
    <Form id="registration-form" className="border p-4 rounded" noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Name of the Shop</Form.Label>
        <Form.Control value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required type="text" placeholder="Enter name"/>
        <Form.Control.Feedback type="invalid"> This file is required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Location</Form.Label>
        <Form.Control value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} required type="text" placeholder="Enter location"/>
        <Form.Control.Feedback type="invalid">This file is required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required type="text" placeholder="Enter description"/>
        <Form.Control.Feedback type="invalid">This file is required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Shop Type</Form.Label>
        <Form.Control as='select' value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}>
          <option value="">---- choose type ----</option>
          <option value="Bar and Resturant">Bar and Resturant</option>
          <option value="Pizza and Burger">Pizza and Burger</option>
          <option value="Juice">Juice</option>
          <option value="Cafe">Cafe</option>
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

export default CreateShopForm;