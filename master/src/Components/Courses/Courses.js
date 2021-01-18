import { Header } from "../Header/Header";
import { Top } from "../2Top-Button/2Top.js";
import "./Courses.css";
import { Course } from "./Course";

const Courses = () => {
    return (
        <div id={ "home" }>
            <Header siteName={ "Kurzy" } />

            <div className={ "title-div" }>
                <Top />
                <h1 className={ "secondary-title" } id={ "title" }>Všetky naše kurzy</h1>
            </div>

            <Course courseName={ "Basic" } coursePrice={ "79.99" } courseSubjects={ ["Python", "HTML", "CSS"] } />
        </div>
    )
}

export { Courses };
