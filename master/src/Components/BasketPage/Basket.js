const Basket = () => {
    let url = window.location;
    url = url.toString().replace("http://localhost:3000/basket/items=", "")
    while (url.includes("%20")) {
        url = url.toString().replace("%20", " ");
    }

    return (
        <div>
            <p>Items: { url }</p>
        </div>
    )
}

export { Basket };
