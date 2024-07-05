import "./ProductCard.scss";

const ProductCard = ({ produkte }) => {
  return (
    <div className="cardContainer">
      {produkte.map(({ id, title, price, image }) => {
        return (
          <div className="card" key={id}>
            <img className="card__image" src={image} alt={title} />
            <span className="card__price">{price}</span>
            <div className="card__desc">
              <p>{title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
