import s from "./Info.module.css";
const Info = () => {
  return (
    <div className={s.wrapper}>
      <p className={s.textBig}>Employee record keeping in the company N </p>
      <p>Total number of employees: </p>
      <p>The prize will be awarded to: 0</p>
    </div>
  );
};

export default Info;
