import "./Course.css";

const Course = ({ courseName, coursePrice, courseSubjects }) => {
    return (
        <div className={ "course" }>
            <p className={ "course-name" }>{ courseName }</p>
            <p className={ "course-price" }>{ coursePrice }€</p>
        </div>
    );
}

export { Course };
