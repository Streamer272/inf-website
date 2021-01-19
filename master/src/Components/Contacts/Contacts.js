import { Header } from "../Header/Header";
import { Top } from "../2Top-Button/2Top.js";
import "./Contacts.css";
import { Contact } from "./Contact";

const Contacts = () => {
    return (
        <div id={ "home" }>
            <Header siteName={ "Kurzy" } />

            <div className={ "title-div" }>
                <Top />
                <h1 className={ "secondary-title" } id={ "title" }>Kontakt na organizáciu</h1>
            </div>

            <div>
                <Contact contactPlatform={ "Instagram" } contactName={ "@danielsvitan" }
                         contactImage={ "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" } />
            </div>
        </div>
    )
}

export { Contacts };
