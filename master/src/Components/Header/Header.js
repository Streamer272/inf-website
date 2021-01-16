import "./Header.css";

const Header = ({ siteName }) => {
    return (
        <div className={ "App-header" }>
            <h1 className={ "title" }>{ siteName }</h1>
            <div className={ "subdomains-div" }>
                <a href={ "/" } className={ "subdomain" }>Domov</a>
                <p className={ "subdomain-splitter" }>/ </p>
                <a href={ "/courses" } className={ "subdomain" }>Kurzy</a>
                <p className={ "subdomain-splitter" }>/ </p>
                <a href={ "/contacts" } className={ "subdomain" }>Kontakty</a>
            </div>
        </div>
    )
}

export { Header };
