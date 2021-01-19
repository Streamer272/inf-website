import "./Basket.css";
import { useState } from "react/cjs/react.production.min";

let setPrice, addThing;
const Basket = () => {
    let [totalPrice, setTotalPrice] = useState(0);
    let [broughtThings, setBroughtThings] = useState([]);

    setPrice = ( toAdd ) => {
        setTotalPrice(totalPrice + toAdd);
    }

    addThing = ( name, price ) => {
        setBroughtThings(...broughtThings, [name, price]);
    }
}



export { Basket, setPrice };
