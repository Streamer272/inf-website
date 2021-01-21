import "./Item.css";

const Item = ({ item }) => {
    const price = item.toString().split(",")[1];
    const name = item.toString().split(",")[0];

    return (
        <div className={ "item-div" }>
            <p className={ "name" } >{ name }</p>
            <p className={ "price" } >{ price }€</p>
        </div>
    )
}

export { Item };
