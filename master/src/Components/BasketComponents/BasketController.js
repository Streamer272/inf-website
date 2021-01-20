import "./BasketController.css";

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
        alert(broughtItems);
        let urlData = "";

        for (let index = 0; index < broughtItems.length; index++) {
            urlData += broughtItems[index];
            alert(broughtItems[index]);
        }

        window.location = "/basket/items=" + urlData;
    }

    return (
        <div className={ "basket-div" } onClick={ () => { goToBasket(); } }>
            <p id={ "basket-things-number" } className={ "basket-things-number" } >0</p>
        </div>
    )
}


export { BasketController, addToBasket, getBasket };
