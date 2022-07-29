import { useEffect, useState } from "react";
import CardList from "./components/card-list/CardList";
import SearchBox from "./components/search-box/SearchBox";
import "./App.css";

function App() {

  const [users, setUsers] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((reponse) => reponse.json())
      .then((data) => setUsers(data))
  }, []);

  const filteredUsers = users.filter( (user) => user.name.toLowerCase().includes(searchFilter.toLowerCase()));

  const onSearchChange = (e) => {
    setSearchFilter(e.target.value);
  }

  return (
    <>
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox 
        onSearchChange={onSearchChange}
        className="monsters-search-box" 
        placeholder="Search Monsters"
      />
      <CardList 
        monsters={filteredUsers}
      />
    </>
  );
}

export default App;
