import React from "react";

function EmployeeList() {
  const employees = [
    {
      id: 101,
      name: "Giri",
      department: "IT",
      designation: "Software Engineer",
      salary: 25000,
    },
    {
      id: 102,
      name: "Swetha Reddy",
      department: "HR",
      designation: "HR Manager",
      salary: 25000,
    },
    {
      id: 103,
      name: "Vinay",
      department: "Finance",
      designation: "Accountant",
      salary: 25000,
    },
    {
      id: 104,
      name: "Praveen",
      department: "Marketing",
      designation: "Marketing Executive",
      salary: 25000,
    },
  ];

  return (
    <div className="container">
      <h1>Employee Details</h1>

      {employees.map((employee) => (
        <div className="card" key={employee.id}>
          <h3>{employee.name}</h3>
          <p><strong>ID:</strong> {employee.id}</p>
          <p><strong>Department:</strong> {employee.department}</p>
          <p><strong>Designation:</strong> {employee.designation}</p>
          <p><strong>Salary:</strong> ₹{employee.salary}</p>
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;