import ItemCard from "../ItemCard/ItemCard";
import "./ItemSlider.css";
import Placeholder from "../../assets/images/placeholder.jpg";
import BlackHoodie from "../../assets/images/itemhoodie.jpg";
import XboxOne from "../../assets/images/itemxboxone.jpg";
import DenimJeans from "../../assets/images/itemjeans.jpg";
import Nintendo from "../../assets/images/item3ds.jpg";
import UnoPack from "../../assets/images/itemuno.jpg";
import WingChair from "../../assets/images/itemwingchair.jpg";
import NikeAirMax from "../../assets/images/itemnikeairmax.jpg";
import Cupboard from "../../assets/images/itemcupboard.jpg";


const ItemArray = () => {
  return (
    <div>
      <div className="item-deck">
        <ItemCard src={BlackHoodie} title="Black Comfy Hoodie" price="LKR2900"></ItemCard>
        <ItemCard src={XboxOne} title="Xbox One with Controllers" price="LKR15000"></ItemCard>
        <ItemCard src={DenimJeans} title="Denim Jeans 2 Pairs" price="LKR3000"></ItemCard>
        <ItemCard src={Nintendo} title="Nintendo 3DS XL" price="LKR6000"></ItemCard>
        <ItemCard src={UnoPack} title="Classic Uno Pack Unopened" price="LKR800"></ItemCard>
        <ItemCard src={WingChair} title="Wing Chair Mint" price="LKR10000"></ItemCard>
        <ItemCard src={NikeAirMax} title="Nike Air Max Men Size-9" price="LKR25000"></ItemCard>
        <ItemCard src={Cupboard} title="Caspian Wooden Cupboard" price="LKR29000"></ItemCard>
      </div>
    </div>
  );
};

export default ItemArray;
