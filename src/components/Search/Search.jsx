import s from "./Search.module.css";
const Search = () => {
  return (
    <input className={s.input} placeholder="Search employees" type="text" />
  );
};

export default Search;
