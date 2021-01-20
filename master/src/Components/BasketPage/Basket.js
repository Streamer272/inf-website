import { getBasket } from "../BasketComponents/BasketController";

const Basket = () => {
    return (
        <div>
            <p>Items: { () => { getBasket() } }</p>
        </div>
    )
}

export { Basket };
