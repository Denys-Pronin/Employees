import Employee from "../Employee/Employee.jsx";
import s from "./EmployeesList.module.css";

const EmployeesList = ({ employees, deleteEmployee, promoteEmployee }) => {
  return (
    <ul className={s.list}>
      {employees.map((employee) => {
        return (
          <li key={employee.id}>
            <Employee
              employee={employee}
              deleteEmployee={deleteEmployee}
              promoteEmployee={promoteEmployee}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default EmployeesList;
