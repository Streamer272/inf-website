import "./Pay.css";

const Pay = () => {
    let url = window.location;

    url = url.toString().replace("http://localhost:3000/pay/price=", "");
    while (url.includes("%20")) {
        url = url.toString().replace("%20", " ");
    }

    const payLike = () => {
        alert("Payment successful...");
        window.location = "/courses";
    }

    return (
        <div className={ "container" }>
            <h1>Enter Payment Information</h1>
            <input type={ "text" } className={ "input" } placeholder={ "Card Number" } />
            <br />
            <input type={ "text" } className={ "input" } placeholder={ "MM / YY" } />
            <br />
            <input type={ "text" } className={ "input" } placeholder={ "Security Code" } />
            <br />
            <button className={ "input pay" } onClick={ payLike }>Pay { url }€ now</button>
        </div>
    )
}

export { Pay };
