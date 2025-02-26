import "./App.css";
import Info from "../Info/Info.jsx";
import Search from "../Search/Search.jsx";
import Filter from "../Filter/Filter.jsx";
import EmployeesList from "../EmployeesList/EmployeesList.jsx";
import AddForm from "../AddForm/AddForm.jsx";
import employees from "../../employees.json";

function App() {
  return (
    <>
      <Info />
      <div className="search_wrapper">
        <Search />
        <Filter />
      </div>
      <EmployeesList employees={employees} />
      <AddForm />
    </>
  );
}

export default App;
