import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Icon from "../Components/logo";

function Home() {
  return (
    <>
      <div className="container-fluid h-100">
        <div className="row h-100 ">
          <main>
            <div className="wrapper">
              <div className="spans">
                <span>Student</span>
                <span>System</span>
              </div>
              <div className="links">
                <Link to="/new-students" className="hover">
                  New student? Join us!
                </Link>
                <div className="icon">
                  <Icon />
                </div>
                <Link to="/student-db" className="hover">
                  Existing student? View database!
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
