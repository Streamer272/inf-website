import { Header } from "../Header/Header";
import { Item } from "./Item";
import { PayButton } from "./PayButton";
import "./Basket.css";

let removeItem;

const Basket = () => {
    let url = window.location;

    url = url.toString().replace("http://localhost:3000/basket/items=", "");
    while (url.includes("%20")) {
        url = url.toString().replace("%20", " ");
    }

    while (url.includes("%C3%BD")) {
        url = url.replace("%C3%BD", "ý");
    }

    let items;
    items = url.toString().split(";");
    for (let index = 0; index < items.length; index++) {
        if (items[index] === "") {
            items.splice(index, 1);
        }
    }

    removeItem = ( item ) => {
        items.splice(items.indexOf(item), 1);
    }

    let price = 0;
    for (let index = 0; index < items.length; index++) {
        let itemPrice = items[index].toString().split(",")[1];
        price += parseFloat(itemPrice);
        console.log("Adding to price " + parseFloat(itemPrice))
    }

    return (
        <div id={ "basket" } >
            <Header siteName={ "Nákupný košík" } />
            <div className={ "basket" } >
                <h2 className={ "basket-title" }>Košík</h2>
                <br />
                <p className={ "basket-explain basket-explain-name" } >Názov kurzu:</p>
                <p className={ "basket-explain basket-explain-price" } >Cena kurzu:</p>
                {
                    items.map(
                    (item) => {
                        return(
                            <Item item={ item } />
                        )
                    }
                )
                }
                <PayButton price={ price } />
            </div>
        </div>
    )
}

export { Basket, removeItem };
