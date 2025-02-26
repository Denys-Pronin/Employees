/* eslint-disable react/prop-types */
import Employee from "../Employee/Employee.jsx";
import s from "./EmployeesList.module.css";

const EmployeesList = ({ employees }) => {
  return (
    <ul className={s.list}>
      {employees.map((employee) => {
        return (
          <li key={employee.id}>
            <Employee employee={employee} />
          </li>
        );
      })}
    </ul>
  );
};

export default EmployeesList;
