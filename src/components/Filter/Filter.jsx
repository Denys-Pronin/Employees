import clsx from "clsx";
import s from "./Filter.module.css";
const Filter = () => {
  const handleClick = (e) => {
    e.target.classList.toggle(s.active);
  };
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <button
          onClick={handleClick}
          type="button"
          className={clsx(s.button, s.active)}
        >
          All employees
        </button>
      </li>
      <li className={s.item}>
        <button onClick={handleClick} type="button" className={s.button}>
          Promoted employees
        </button>
      </li>
      <li className={s.item}>
        <button onClick={handleClick} type="button" className={s.button}>
          Salary overy 1000$
        </button>
      </li>
    </ul>
  );
};

export default Filter;
