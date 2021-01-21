import { Header } from "../Header/Header";

let removeItem;

const Basket = () => {
    let url = window.location;

    url = url.toString().replace("http://localhost:3000/basket/items=", "")
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

    return (
        <div id={ "basket" } >
            <Header siteName={ "Nákupný košík" } />
            <p>Items: { items.map((item) => { return( <p>{ item }</p> ) } ) }</p>
        </div>
    )
}

export { Basket, removeItem };
