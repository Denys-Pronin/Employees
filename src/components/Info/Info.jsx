import s from "./Info.module.css";
const Info = ({ employees }) => {
  const promotedEmployees = employees.filter((employee) => employee.promoted);
  return (
    <div className={s.wrapper}>
      <p className={s.textBig}>Total number of employees: {employees.length}</p>
      <p>The prize will be awarded to: {promotedEmployees.length}</p>
    </div>
  );
};

export default Info;
