/* eslint-disable react/prop-types */
import s from "./Employee.module.css";
import { FaRegThumbsUp, FaTrashAlt, FaRegStar } from "react-icons/fa";
const Employee = ({ employee }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.name}>{employee.name}</p>
      <div>
        <p>0</p>
        <div className={s.btns}>
          <button className={s.delete_btn}>
            <FaRegThumbsUp />
          </button>
          <button className={s.delete_btn}>
            <FaTrashAlt />
          </button>
          <FaRegStar />
        </div>
      </div>
    </div>
  );
};

export default Employee;
