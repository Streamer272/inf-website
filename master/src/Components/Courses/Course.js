import "./Course.css";

const CourseSubjects = ({ subjects }) => {
    const listItems = subjects.map((subject) =>
        <li className={ "subject" }>{ subject }</li>
    );

    return (
        <div className={ "subjects-div" }>
            <ul>{ listItems }</ul>
        </div>
    );
}

const Course = ({ courseName, coursePrice, courseSubjects }) => {
    return (
        <div className={ "course" }>
            <p className={ "course-name" }>{ courseName }</p>
            <p className={ "course-price" }>{ coursePrice }€</p>
            <br /><br /><br /><br />
            <CourseSubjects subjects={ courseSubjects } />
        </div>
    );
}

export { Course };
