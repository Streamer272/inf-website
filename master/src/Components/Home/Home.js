import { Header } from "../Header/Header.js";
import "./Home.css";

const Home = () => {
    return (
        <div id={ "home" }>
            <Header siteName={ "Domov" } />
            <div className={"div first"}>
                <h1 className={ "secondary-title" } id={ "title" }>Chceš sa naučiť programovať?</h1>
            </div>
        </div>
    )
}

export { Home };
