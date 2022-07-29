
const CardList = ( {monsters} ) => {
  return (
    <>
        {
            monsters.map( (n, i) => {
                return <h1 key={i}>{n.name}</h1> 
            })
        }
    </>
  )
}

export default CardList