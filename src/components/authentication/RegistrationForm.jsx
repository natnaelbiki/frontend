import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Geolocation from 'react-native-geolocation-service';
import { useUserActions } from "../../hooks/user.actions";


function RegistrationForm() {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const [location, setLocation] = React.useState({});
  const userActions = useUserActions();

  const getLocation = () => {
       Geolocation.getCurrentPosition( pos=>{
          alert(pos.coords.latitude);
          setLocation(pos);
        },
        error => {
            alert(error.message);
        });
   }
  const handleSubmit = (event) => {
    event.preventDefault();
    const registrationForm = event.currentTarget;
    if (registrationForm.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    const data = {
      username: form.username,
      password: form.password,
      email: form.email,
      first_name: form.first_name,
      last_name: form.last_name,
      role: form.role,
    };
    
     userActions.register(data).catch((err) => {
      if (err.message) {
        setError(err.request.response);
      }
    });
  };

  return (
    <Form id="registration-form" className="border p-4 rounded" noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>First Name</Form.Label>
        <Form.Control value={form.first_name} onChange={(e) => setForm({ ...form, first_name: e.target.value })} required type="text" placeholder="Enter first name"/>
        <Form.Control.Feedback type="invalid"> This file is required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Last name</Form.Label>
        <Form.Control value={form.last_name} onChange={(e) => setForm({ ...form, last_name: e.target.value })} required type="text" placeholder="Enter last name"/>
        <Form.Control.Feedback type="invalid">This file is required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} required type="text" placeholder="Enter username"/>
        <Form.Control.Feedback type="invalid">This file is required.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required type="email" placeholder="Enter email"/>
        <Form.Control.Feedback type="invalid">Please provide a valid email.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control value={form.password} minLength="8" onChange={(e) => setForm({ ...form, password: e.target.value })} required type="password" placeholder="Password"/>
        <Form.Control.Feedback type="invalid">Please provide a valid password.</Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Role</Form.Label>
        <Form.Control as='select' value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })}>
          <option value="CUSTOMER">Customer</option>
          <option value="SUPPLIER">Supplier</option>
          <option value="DELIVERY">Delivery</option>
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

export default RegistrationForm;