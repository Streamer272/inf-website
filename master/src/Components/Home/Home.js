import { Header } from "../Header/Header.js";
import "./Home.css";

const Home = () => {
    return (
        <div id={ "home" }>
            <Header siteName={ "Domov" } />

            <div className={ "div first" }>
                <h1 className={ "secondary-title" } id={ "title" }>Chceš sa naučiť programovať?</h1>
            </div>

            <div className={ "div" }>
                <img
                    src={ "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fblogs-images.forbes.com%2Fforbes" +
                    "techcouncil%2Ffiles%2F2019%2F01%2Fcanva-photo-editor-8-7.jpg" }
                    alt={ "Coding preview" }
                    className={ "second-image-1" }
                />
                <p className={ "second-text" }>
                    Chceš sa naučiť programovať? Tak tento kurz je presne pre teba!<br />
                    Na tomto kurze sa naučíš základy programovania, rozdiely medzi programovacímy jazykmy,<br />
                    strihanie obrázkov a videí, tvorbu hier a mnoho dalšieho!<br /> A pritom budeš
                    mať kvalitných a kvalifikovaných učiteľov ktorý sú ochotný ti hocičo vysvetliť.<br />
                    Zoznam všetkých kurzov môžeš nájsť <a href={ "/courses" }>tu</a>.
                </p>
                <img
                    src={ "https://lh6.googleusercontent.com/1uMsC1w9JDaDDfN2dSYByzsyVlDiXE7JChAlp08VmmbW8kmuuaMN9" +
                    "YldcLfHSGrexl87K_YwlOypYfDySAkFlu0clfrKAxw1ybLn1zPFEM0Oh7nhC8GU-QdsedZzhfoWMrS9qF6z" }
                    alt={ "Unity preview" }
                    className={ "second-image-2" }
                />
            </div>

            <div className={ "div" }>
                me
            </div>
        </div>
    )
}

export { Home };
