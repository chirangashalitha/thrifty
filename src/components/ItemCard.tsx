import { useState } from "react";
import AddToCartButton from "./AddToCartButton";
import Alert from "./Alert";
import itemhoodie from "../assets/images/itemhoodie.jpg";

function ItemCard() {
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
        <img src={itemhoodie} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Black Comfy Hoodie</h5>
          <p className="card-text">LKR 2900</p>
          <AddToCartButton onClick={() => setAlertVisibility(true)}>
            Add to Cart
          </AddToCartButton>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
