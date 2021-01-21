import "./BasketController.css";
import { Top } from "../2Top-Button/2Top";

let addToBasket, getBasket;

const BasketController = () => {
    let broughtItems = [];
    let setBroughtItems = ( toAdd ) => {
        broughtItems.push(toAdd);
    }

    addToBasket = (price, thing ) => {
        setBroughtItems([thing, price]);
        document.getElementById("basket-things-number").innerHTML = parseInt(document.getElementById(
            "basket-things-number").innerHTML) + 1;
    }

    const goToBasket = () => {
        let urlData = "";

        for (let index = 0; index < broughtItems.length; index++) {
            urlData += broughtItems[index] + ";";
        }

        window.location = "/basket/items=" + urlData;
    }

    return (
        <div className={ "basket-div" } onClick={ () => { goToBasket(); } }>
            <div>
                <Top />
            </div>
            <p id={ "basket-things-number" } className={ "basket-things-number" } >0</p>
        </div>
    )
}


export { BasketController, addToBasket, getBasket };
