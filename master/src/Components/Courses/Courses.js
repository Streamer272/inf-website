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

            <div>
                <h1 className={ "course-title" }>Vývoj Webu:</h1>
                <div>
                    <h1 className={ "secondary-course-title" }>Front end:</h1>
                    <Course courseName={ "Basic" } coursePrice={ "79.99" } courseSubjects={ ["HTML", "CSS", "Python"] } />
                    <Course courseName={ "Standard" } coursePrice={ "119.99" } courseSubjects={ ["HTML", "CSS",
                        "Javascript", "React", "Python"] }  />
                    <Course courseName={ "Premium" } coursePrice={ "199.99" } courseSubjects={ ["HTML", "CSS",
                        "Javascript", "React", "Python", "Electron", "SQL", "PHP", " MangoDB"] } />
                </div>
                <div>
                    <h1 className={ "secondary-course-title" }>Back end:</h1>
                    <Course courseName={ "Basic" } coursePrice={ "79.99" } courseSubjects={ ["Python", "Django"] } />
                    <Course courseName={ "Standard" } coursePrice={ "119.99" } courseSubjects={ ["Python", "Django",
                        "Java", "Kotlin"] }  />
                    <Course courseName={ "Premium" } coursePrice={ "199.99" } courseSubjects={ ["Python", "Django",
                        "Java", "Kotlin", "SpringBoot", "SQL", "API", "Ruby"] } />
                </div>
            </div>

            <div>
                <h1 className={ "course-title" }>Vývoj aplikácií:</h1>
                <div>
                    <h1 className={ "secondary-course-title" }>Windows:</h1>
                    <Course courseName={ "Basic" } coursePrice={ "79.99" } courseSubjects={ ["Python", "C"] } />
                    <Course courseName={ "Standard" } coursePrice={ "119.99" } courseSubjects={ ["Python", "C", "C++",
                        "Java"] }  />
                    <Course courseName={ "Premium" } coursePrice={ "199.99" } courseSubjects={ ["Python", "C", "C++",
                        "Java", "Kotlin", "C#"] } />
                </div>
                <div>
                    <h1 className={ "secondary-course-title" }>Mobily:</h1>
                    <Course courseName={ "Basic" } coursePrice={ "39.99" } courseSubjects={ ["Python"] } />
                    <Course courseName={ "Standard" } coursePrice={ "69.99" } courseSubjects={ ["Python", "Kotlin"
                    ] }  />
                    <Course courseName={ "Premium" } coursePrice={ "99.99" } courseSubjects={ ["Python", "Kotlin",
                    "Swift", "Java"] } />
                </div>
                <div>
                    <h1 className={ "secondary-course-title" }>Operačný systém MacOs:</h1>
                    <Course courseName={ "Standard" } coursePrice={ "49.99" } courseSubjects={ ["Swift"] }  />
                </div>
                <div>
                    <h1 className={ "secondary-course-title" }>Hackovanie:</h1>
                    <Course courseName={ "Basic" } coursePrice={ "39.99" } courseSubjects={ ["Python"] } />
                    <Course courseName={ "Standard" } coursePrice={ "69.99" } courseSubjects={ ["Python", "C++"
                    ] }  />
                    <Course courseName={ "Premium" } coursePrice={ "99.99" } courseSubjects={ ["Python", "C++",
                        "C", "C#"] } />
                </div>
            </div>

            <div>
                <h1 className={ "course-title" }>Vývoj hier:</h1>
                <div>
                    <h1 className={ "secondary-course-title" }>Pre počítače:</h1>
                    <Course courseName={ "Basic" } coursePrice={ "79.99" } courseSubjects={ ["Unity", "AGK"] } />
                    <Course courseName={ "Standard" } coursePrice={ "119.99" } courseSubjects={ ["Unity", "Blender",
                        "Photoshop", "AGK"] }  />
                    <Course courseName={ "Premium" } coursePrice={ "199.99" } courseSubjects={ ["Unity", "Blender",
                        "Photoshop", "Unreal Engine", "C++", "AGK"] } />
                </div>
            </div>

        </div>
    )
}

export { Courses };
