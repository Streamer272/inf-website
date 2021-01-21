import "./PayButton.css";

const PayButton = ({ price }) => {
    const pay = () => {
        window.location = "/pay/price=" + price;
    }

    return (
        <div className={ "pay-button" } onClick={ pay }>
            <h1>Pay</h1>
        </div>
    )
}

export { PayButton };
