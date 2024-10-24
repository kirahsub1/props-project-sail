import "./Card.css"

const Card = (props) => {
  return (
  
    <div className="card-container">
      <section className={`ProfileCard ${props.color}`}>
        <img src={props.image} alt="" />
        <div className="card-text">
          <h2>{props.oruko}</h2>
          <p>Age: {props.age}</p>
          <p>Location: {props.location}</p>
        </div>
      </section>
    </div>
  );
}

export default Card