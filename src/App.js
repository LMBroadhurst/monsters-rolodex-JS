import { useEffect, useState } from "react";

function App() {

  const [users, setUsers] = useState([]);
  const [searchFilter, setSearchFilter] = useState("");

  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((reponse) => reponse.json())
      .then((data) => setUsers(data))
  }, []);

  const filteredUsers = users.filter( (user) => user.name.toLowerCase().includes(searchFilter.toLowerCase()));

  return (
    <>
      <input className="search-box" type="search" placeholder="Search Monsters" onChange={(e) => setSearchFilter(e.target.value)}/>
      <div>
        {
          filteredUsers?.map( (user, index) => {
            return <h1 key={index}>{user.name}</h1>
            }
          )
        }
      </div>
    </>
  );
}

export default App;
