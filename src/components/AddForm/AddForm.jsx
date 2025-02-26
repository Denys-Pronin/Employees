import s from "./AddFrom.module.css";
const AddForm = () => {
  return (
    <div className={s.wrapper}>
      <p>Add new employee</p>
      <form className={s.form}>
        <input className={s.input} type="text" placeholder="Name" />
        <input className={s.input} type="text" placeholder="Salary" />
        <button className={s.button}>Add</button>
      </form>
    </div>
  );
};

export default AddForm;
