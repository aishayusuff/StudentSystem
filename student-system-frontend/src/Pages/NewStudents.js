import React, { useState } from "react";
import Header from "../Components/Header";
import "./NewStudents.css";

export default function NewStudents() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    const student = { name, address };
    fetch("http://localhost:8080/student/add", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    })
      .then(() => {
        setName("");
        setAddress("");
        console.log("New student added!");
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  };
  return (
    <>
      <Header />
      <div className="input-container">
        <div className="input-header">
          <h3>
            Provide your
            <span id="name"> NAME</span> and
            <span id="address"> ADDRESS </span>
          </h3>
        </div>
        <div className="form">
          <input
            className="name-field"
            type="text"
            placeholder="Student Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Student Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <br />
        <button onClick={handleClick}> Submit </button>
      </div>
    </>
  );
}
