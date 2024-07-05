import "./ProductCard.scss";
import products from "../../helper/data";

const ProductCard = () => {
  return (
    <div className="cardContainer">
      {products.map(({ id, title, price, category, image }) => {
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
