import "./App.css";
import React from "react";
import Info from "../Info/Info.jsx";
import Search from "../Search/Search.jsx";
import Filter from "../Filter/Filter.jsx";
import EmployeesList from "../EmployeesList/EmployeesList.jsx";
import AddForm from "../AddForm/AddForm.jsx";
import employeesData from "../../employees.json";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState(employeesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const deleteEmployee = (employeeId) => {
    setEmployees(employees.filter((employee) => employee.id !== employeeId));
  };
  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };
  const promoteEmployee = (employeeId) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((employee) =>
        employee.id === employeeId
          ? { ...employee, promoted: !employee.promoted }
          : employee
      )
    );
  };
  const filteredEmployees = employees
    .filter((employee) => {
      return employee.name.toLowerCase().includes(searchQuery.toLowerCase());
    })
    .filter((employee) => {
      if (filter === "promoted") return employee.promoted;
      if (filter === "salaryOver1000") return employee.salary > 1000;
      return true;
    });

  return (
    <>
      <Info employees={employees} />
      <div className="search_wrapper">
        <Search setSearchQuery={setSearchQuery} />
        <Filter setFilter={setFilter} />
      </div>
      <EmployeesList
        employees={filteredEmployees}
        promoteEmployee={promoteEmployee}
        deleteEmployee={deleteEmployee}
      />
      <AddForm addEmployee={addEmployee} />
    </>
  );
}

export default App;
