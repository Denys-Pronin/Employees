import s from "./AddFrom.module.css";
import { nanoid } from "nanoid";
const AddForm = ({ addEmployee }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee({
      name: e.target.elements.name.value,
      id: nanoid(),
      salary: e.target.elements.salary.value,
    });
    e.target.reset();
  };
  return (
    <div className={s.wrapper}>
      <p>Add new employee</p>
      <form onSubmit={handleSubmit} className={s.form}>
        <input className={s.input} type="text" name="name" placeholder="Name" />
        <input
          className={s.input}
          type="number"
          name="salary"
          placeholder="Salary"
        />
        <button className={s.button}>Add</button>
      </form>
    </div>
  );
};

export default AddForm;
