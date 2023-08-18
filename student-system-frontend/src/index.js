import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import StudentDB from "./Pages/StudentDB";
import NewStudents from "./Pages/NewStudents";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student-db" element={<StudentDB />} />
        <Route path="/new-students" element={<NewStudents />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
