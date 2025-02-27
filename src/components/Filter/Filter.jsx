import clsx from "clsx";
import s from "./Filter.module.css";
import { useState } from "react";
const Filter = ({ setFilter }) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const handleFilterClick = (filterType) => {
    setFilter(filterType);
    setActiveFilter(filterType);
  };
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <button
          onClick={() => handleFilterClick("all")}
          type="button"
          className={clsx(s.button, activeFilter == "all" && s.active)}
        >
          All employees
        </button>
      </li>
      <li className={s.item}>
        <button
          onClick={() => handleFilterClick("promoted")}
          type="button"
          className={clsx(s.button, activeFilter == "promoted" && s.active)}
        >
          Promoted employees
        </button>
      </li>
      <li className={s.item}>
        <button
          onClick={() => handleFilterClick("salaryOver1000")}
          type="button"
          className={clsx(
            s.button,
            activeFilter == "salaryOver1000" && s.active
          )}
        >
          Salary overy 1000$
        </button>
      </li>
    </ul>
  );
};

export default Filter;
