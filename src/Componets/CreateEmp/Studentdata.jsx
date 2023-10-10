import React, {useState } from "react";
import "./Studentdata.css";
import {Container, Form} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { StudentsAdd } from "../../Services/Action/action";
import { useNavigate } from "react-router";

function Studentdata() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    std: "",
    contact: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const uid = Math.floor(Math.random() * 10000)

    const newData = { ...inputValue, id: uid };

    dispatch(StudentsAdd(newData));

    setInputValue({
      fname: "",
      lname: "",
      email: "",
      password: "",
      std: "",
      contact: "",
    });
    navigate("/view");
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <Container>
      <div class="wrapper">
        <div class="form-left">
          <h2 class="text-uppercase">information</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            molestie ac feugiat sed. Diam volutpat commodo.
          </p>
          <p class="text">
            <span>Sub Head:</span>
            Vitae auctor eu augudsf ut. Malesuada nunc vel risus commodo
            viverra. Praesent elementum facilisis leo vel.
          </p>
          <div class="form-field">
            <input type="submit" class="account" value="Have an Account?" />
          </div>
        </div>
        <form class="form-right" onSubmit={handleSubmit}>
          <h2 class="text-uppercase">Registration form</h2>
          <div class="row">
            <div class="col-sm-6 mb-3">
              <label>First Name</label>
              <input
                type="text"
                name="fname"
                id="first_name"
                class="input-field"
                onChange={handleChange}
                value={inputValue.fname}
              />
            </div>
            <div class="col-sm-6 mb-3">
              <label>Last Name</label>
              <input
                type="text"
                name="lname"
                id="last_name"
                class="input-field"
                onChange={handleChange}
                value={inputValue.lname}
              />
            </div>
          </div>
          <div class="mb-3">
            <label>Your Email</label>
            <input
              type="email"
              class="input-field"
              onChange={handleChange}
              value={inputValue.email}
              name="email"
              
            />
          </div>
          <div class="row">
            <div class="col-sm-6 mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={inputValue.password}
                id="pwd"
                class="input-field"
              />
            </div>
            <div class="col-sm-6 mb-3">
              <label>Cource </label>
              <input
                type="text"
                name="cource"
                // id="cpwd"
                class="input-field"
                onChange={handleChange}
              value={inputValue.cource}
              />
            </div>
          </div>
          <div class="row">
            <div class=" col-sm-6 mb-3">
              <label>Contact</label>
              <input
                type="text"
                name="contact"
                onChange={handleChange}
                value={inputValue.contact}
                // id="pwd"
                class="input-field"
              />
            </div>
            <div class=" col-sm-6 mb-3">
              <label>Std</label>
              <input
                type="text"
                name="std"
                onChange={handleChange}
                value={inputValue.std}
                // id="pwd"
                class="input-field"
              />
            </div>
          </div>
          <Form.Group className="mb-3 me-2">
            <Form.Label>Gender</Form.Label>
            <div className="d-flex">
              {["Male", "Female"].map((label) => {
                return (
                  <div className="col-2 me-4">
                    <Form.Check
                      type="radio"
                      label={label}
                      name="gender"
                      value={label}
                      onChange={handleChange}
                    />
                  </div>
                );
              })}
            </div>
          </Form.Group>
          <div class="form-field">
            <input
              type="submit"
              value="Register"
              class="register"
              name="register"
            />
          </div>
        </form>
      </div>
    </Container>
  );
}

export default Studentdata;
