import Card from "../card/Card";
import "./CardList.css";

const CardList = ( {monsters} ) => {
  return (
    <>
        <section className="card-list">
            {
                monsters.map( (n, i) => {
                    
                    return  (
                        <Card key={i} monster={n} />
                    )
                })
            }
        </section>
    </>
  )
}

export default CardList