import React, { useState } from "react";

import {Container, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updateuser } from "../../Services/Action/action";

function StudentEdit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const edit_data = useSelector((state) => state.empreducer.employe);
  const edit_index = useSelector((state) => state.empreducer.isIndex);
  const [inputValue, setInputValue] = useState(edit_data);

  const hendleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateuser(inputValue, edit_index));
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
        <form class="form-right" onSubmit={hendleSubmit}>
          <h2 class="text-uppercase">Edit form</h2>
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
              required
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

export default StudentEdit;
