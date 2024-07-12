import { useState } from "react";
import AddToCartButton from "../AddToCartButton";
import Alert from "../Alert";
import './ItemCard.css';

interface Props {
  title: string;
  price?: string;
  src: string;
}

function ItemCard({ title, price, src }: Props) {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisibility(false)}>
            Successfully Added to Cart!
          </Alert>
        )}
      </div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={src} className="card-img-top item-img" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price}</p>
          <AddToCartButton onClick={() => setAlertVisibility(true)}>
            Add to Cart
          </AddToCartButton>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
