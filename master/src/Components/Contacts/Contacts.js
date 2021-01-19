import { Header } from "../Header/Header";
import { Top } from "../2Top-Button/2Top.js";
import "./Contacts.css";
import { Contact } from "./Contact";

const Contacts = () => {
    return (
        <div id={ "contacts" }>
            <Header siteName={ "Kurzy" } />

            <div className={ "title-div" }>
                <Top />
                <h1 className={ "secondary-title" } id={ "title" }>Kontakt na organizáciu</h1>
            </div>

            <Contact contactPlatform={ "Instagram" } contactName={ "@danielsvitan" } contactImage={ "https://upload" +
            ".wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_" +
            "2016.svg/1200px-Instagram_logo_2016.svg.png" } />

            <Contact contactPlatform={ "Discord" } contactName={ "Streamer272#1523" } contactImage={ "https://cdn4" +
            ".iconfinder.com/data/icons/logos-and-brands/512/91_Discord_logo_logos-512.png" } />

            <Contact contactPlatform={ "WhatsApp" } contactName={ "+421 948 309 804" } contactImage={ "https://cdn2" +
            ".iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png" } />

            <Contact contactPlatform={ "Messenger" } contactName={ "Daniel Svitaň" } contactImage={ "https://upload." +
            "wikimedia.org/wikipedia/commons/thumb/6/6c/Facebook_Messenger_logo_2018.svg/1200px-Facebook_" +
            "Messenger_logo_2018.svg.png" } />

            <Contact contactPlatform={ "Reddit" } contactName={ "Streamer272" } contactImage={ "https://external-" +
            "preview.redd.it/iDdntscPf-nfWKqzHRGFmhVxZm4hZgaKe5oyFws-yzA.png?auto=webp&s=38648ef0dc2c3fce76" +
            "d5e1d8639234d8da0152b2" } />

            <div className={ "gift" } onClick={ window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ") }>
            </div>
        </div>
    )
}

export { Contacts };
