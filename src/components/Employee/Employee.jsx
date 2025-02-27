import clsx from "clsx";
import s from "./Employee.module.css";
import { FaRegThumbsUp, FaTrashAlt } from "react-icons/fa";
const Employee = ({ employee, deleteEmployee, promoteEmployee }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.name}>{employee.name}</p>
      <div>
        <p>{employee.salary}$</p>
        <div className={s.btns}>
          <button
            onClick={() => promoteEmployee(employee.id)}
            className={clsx(s.promote_btn, employee.promoted && s.promoted)}
          >
            <FaRegThumbsUp />
          </button>
          <button
            onClick={() => deleteEmployee(employee.id)}
            className={s.delete_btn}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Employee;
