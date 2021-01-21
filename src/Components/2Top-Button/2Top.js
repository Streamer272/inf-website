import "./2Top.css";

const Top = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <button onClick={ scrollToTop } id={ "2top" } className={ "toTop-div" }>Top</button>
    )
}

export { Top };
