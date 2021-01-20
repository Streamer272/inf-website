import "./Add2Basket.css";
import { addThing } from "./Basket-miniature";

const AddToBasket = ({ name, price }) => {
    return (
        <div className={ "addToBasket" } onClick={ () => { addThing(price, name); } }>
            <p className={ "buy-text" }>Buy</p>
        </div>
    )
}

export { AddToBasket };
