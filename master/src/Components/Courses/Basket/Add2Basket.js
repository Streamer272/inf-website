import "./Add2Basket.css";
import { setPrice } from "./Basket";

const addToBasket = ( name, price ) => {
    return (
        <div className={ "addToBasket" } onClick={ setPrice(price) }>
            <p>Buy</p>
        </div>
    )
}

export { addToBasket };
