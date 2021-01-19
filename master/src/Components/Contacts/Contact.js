import "./Contact.css";

const Contact = ({ contactPlatform, contactImage, contactName }) => {
    return (
        <div className={ "Contact" }>
            <img src={ contactImage } className={ "logo" }  alt={ "Platform logo" }/>
            <h3 className={ "platform" }>{ contactPlatform }</h3>
            <p className={ "name" }>{ contactName }</p>
        </div>
    )
}

export { Contact };
