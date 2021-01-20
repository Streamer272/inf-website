import "./BasketController.css";

let addToBasket, getBasket;

const BasketController = () => {
    let broughtItems = [], setBroughtItems = ( toAdd ) => {
        broughtItems.push(toAdd);
    }

    addToBasket = (price, thing ) => {
        setBroughtItems([thing, price]);
        document.getElementById("basket-things-number").innerHTML = parseInt(document.getElementById(
            "basket-things-number").innerHTML
        ) + 1;
    }

    getBasket = () => {
        return broughtItems;
    }

    const goToBasket = () => {
        window.location = "/basket";
    }

    return (
        <div className={ "basket-div" } onClick={ () => { goToBasket(); } }>
            <p id={ "basket-things-number" } className={ "basket-things-number" } >0</p>
        </div>
    )
}


export { BasketController, addToBasket, getBasket };
