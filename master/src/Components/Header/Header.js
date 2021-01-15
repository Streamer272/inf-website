import "./Header.css";

const Header = ({ siteName }) => {
    return (
        <div className={ "App-header" }>
            <h1 className={ "title" }>{ siteName }</h1>
            <div className={ "subdomains-div" }>
                <a href={ "/" } className={ "subdomain" }>Home</a>
                <p className={ "subdomain-splitter" }>/ </p>
                <a href={ "/courses" } className={ "subdomain" }>Courses</a>
                <p className={ "subdomain-splitter" }>/ </p>
                <a href={ "/contacts" } className={ "subdomain" }>Contacts</a>
            </div>
        </div>
    )
}

export { Header };
