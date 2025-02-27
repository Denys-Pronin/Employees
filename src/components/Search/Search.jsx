import s from "./Search.module.css";
const Search = ({ setSearchQuery }) => {
  return (
    <input
      onChange={(e) => setSearchQuery(e.target.value)}
      className={s.input}
      placeholder="Search employees"
      type="text"
    />
  );
};

export default Search;
