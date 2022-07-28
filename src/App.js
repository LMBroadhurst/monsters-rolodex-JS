import { useState } from "react";

function App() {

  const [monsters, setMonsters] = useState({
    monsters: [
    {
      name: 'Linda'
    },
    {
      name: 'Frank'
    },
    {
      name: 'Jacky'
    }
  ]})

  return (
    <>
      {
        monsters.monsters.map( (monster, index) => {
          return <h1 key={index}>{monster.name}</h1>
          }
        )
      }
    </>
  );
}

export default App;
