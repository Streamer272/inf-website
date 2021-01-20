import "./Add2Basket.css";
import { addToBasket } from "./BasketController";

const AddToBasket = ({ name, price }) => {
    return (
        <div className={ "addToBasket" } onClick={ () => { addToBasket(price, name); } }>
            <p className={ "buy-text" }>Buy</p>
        </div>
    )
}

export { AddToBasket };
