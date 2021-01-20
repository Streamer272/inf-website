import "./BasketMiniature.css";
import { useState } from "react";

let addThing;

const BasketMiniature = () => {
    let [broughtThings, setBroughtThings] = useState([]);

    addThing = ( price, thing ) => {
        setBroughtThings(...broughtThings, [price, thing]);
        console.log("Adding " + thing + " with price " + price);
    }

    return (
        <div className={ "basket-div" } onClick={ () => { window.location = "/basket"; } }>
            <p id={ "number" } >{ broughtThings.length }</p>
        </div>
    )
}


export { BasketMiniature, addThing };
