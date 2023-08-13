import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../Components/Header";
import Table from "react-bootstrap/Table";

export default function StudentDB() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch(
      "https://studentsystem-env.eba-gunidggn.us-east-1.elasticbeanstalk.com/student/getAll"
    )
      .then((response) => response.json()) //An interesitng way to extract data in JSON form from the response
      .then((data) => setStudents(data));
  });
  return (
    <>
      <Header />
      <Table striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <td>{student.name}</td>
              <td>{student.address}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
