import "./Course.css";
import { AddToBasket } from "../BasketComponents/Add2Basket";

const CourseSubjects = ({ subjects }) => {
    const listItems = subjects.map((subject) =>
        <li className={ "subject" }>{ subject }</li>
    );

    return (
        <div className={ "subjects-div" }>
            <p className={ "subject-header" }>Kurzy v tomto balíčku:</p>
            <ul>{ listItems }</ul>
        </div>
    );
}

const Course = ({ courseName, coursePrice, courseSubjects, courseSubjectType }) => {
    return (
        <div className={ "course-div" } id={ "course-div" }>
            <p className={ "course-name" }>{ courseName }</p>

            <p className={ "course-price" }>{ coursePrice }€ / month</p>

            <br /><br />
            <CourseSubjects subjects={ courseSubjects } />
            <AddToBasket name={ courseSubjectType + " - " + courseName } price={ coursePrice }/>
        </div>
    );
}

export { Course };
