import "./Product.css";

const Product = (props) => {
  return (
    <div>
        <div className={`Product ${props.color}`}>
        <img src={props.image} alt="Product Image" />
        <div className="product-details">
            <h2>{props.productname}</h2>
            <p>{props.description}</p>
            <p>Price: ${props.price}</p>
            <button>Add to Cart</button>
        </div>
        </div>
    </div>
  )
}

export default Product