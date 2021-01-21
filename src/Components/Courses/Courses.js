import { Header } from "../Header/Header";
import { Top } from "../2Top-Button/2Top.js";
import "./Courses.css";
import { Course } from "./Course";
import { BasketController } from "../BasketComponents/BasketController";

const Courses = () => {
    return (
        <div id={ "courses" }>
            <Header siteName={ "Kurzy" } />

            <div className={ "title-div" }>
                <Top />
                <h1 className={ "secondary-title" } id={ "title" }>Všetky naše kurzy</h1>
            </div>

            <BasketController />

            <div>
                <h1 className={ "course-title" }>Vývoj Webu:</h1>
                <div>
                    <h1 className={ "secondary-course-title" }>Front end:</h1>
                    <Course courseName={ "Basic" } coursePrice={ "79.99" } courseSubjects={ ["HTML", "CSS", "Python"] }
                        courseSubjectType={ "Front end" }/>
                    <Course courseName={ "Standard" } coursePrice={ "119.99" } courseSubjects={ ["HTML", "CSS",
                        "Javascript", "React", "Python"] } courseSubjectType={ "Front end" } />
                    <Course courseName={ "Premium" } coursePrice={ "199.99" } courseSubjects={ ["HTML", "CSS",
                        "Javascript", "React", "Python", "Electron", "SQL", "PHP", " MangoDB"] }
                            courseSubjectType={ "Front end" } />
                </div>
                <div>
                    <h1 className={ "secondary-course-title" }>Back end:</h1>
                    <Course courseName={ "Basic" } coursePrice={ "79.99" } courseSubjects={ ["Python", "Django"] }
                        courseSubjectType={ "Front end" } />
                    <Course courseName={ "Standard" } coursePrice={ "119.99" } courseSubjects={ ["Python", "Django",
                        "Java", "Kotlin"] } courseSubjectType={ "Back end" } />
                    <Course courseName={ "Premium" } coursePrice={ "199.99" } courseSubjects={ ["Python", "Django",
                        "Java", "Kotlin", "SpringBoot", "SQL", "API", "Ruby"] } courseSubjectType={ "Back end" } />
                </div>
            </div>

            <div>
                <h1 className={ "course-title" }>Vývoj aplikácií:</h1>
                <div>
                    <h1 className={ "secondary-course-title" }>Windows:</h1>
                    <Course courseName={ "Basic" } coursePrice={ "79.99" } courseSubjects={ ["Python", "C"] }
                        courseSubjectType={ "Windows development" } />
                    <Course courseName={ "Standard" } coursePrice={ "119.99" } courseSubjects={ ["Python", "C", "C++",
                        "Java"] } courseSubjectType={ "Windows development" } />
                    <Course courseName={ "Premium" } coursePrice={ "199.99" } courseSubjects={ ["Python", "C", "C++",
                        "Java", "Kotlin", "C#"] } courseSubjectType={ "Windows development" } />
                </div>
                <div>
                    <h1 className={ "secondary-course-title" }>Mobily:</h1>
                    <Course courseName={ "Basic" } coursePrice={ "39.99" } courseSubjects={ ["Python"] }
                        courseSubjectType={ "Mobile development" } />
                    <Course courseName={ "Standard" } coursePrice={ "69.99" } courseSubjects={ ["Python", "Kotlin"
                        ] } courseSubjectType={ "Mobile development" } />
                    <Course courseName={ "Premium" } coursePrice={ "99.99" } courseSubjects={ ["Python", "Kotlin",
                        "Swift", "Java"] } courseSubjectType={ "Mobile development" } />
                </div>
                <div>
                    <h1 className={ "secondary-course-title" }>Operačný systém MacOs:</h1>
                    <Course courseName={ "Standard" } coursePrice={ "49.99" } courseSubjects={ ["Swift"] }
                        courseSubjectType={ "MacOS development" } />
                </div>
                <div>
                    <h1 className={ "secondary-course-title" }>Hackovanie:</h1>
                    <Course courseName={ "Basic" } coursePrice={ "39.99" } courseSubjects={ ["Python"] }
                        courseSubjectType={ "Hackovanie" }/>
                    <Course courseName={ "Standard" } coursePrice={ "69.99" } courseSubjects={ ["Python", "C++"
                        ] } courseSubjectType={ "Hackovanie" } />
                    <Course courseName={ "Premium" } coursePrice={ "99.99" } courseSubjects={ ["Python", "C++",
                        "C", "C#"] } courseSubjectType={ "Hackovanie" } />
                </div>
            </div>

            <div>
                <h1 className={ "course-title" }>Vývoj hier:</h1>
                <div>
                    <h1 className={ "secondary-course-title" }>Pre počítače:</h1>
                    <Course courseName={ "Basic" } coursePrice={ "79.99" } courseSubjects={ ["Unity", "AGK"] }
                        courseSubjectType={ "Vývoj hier" }/>
                    <Course courseName={ "Standard" } coursePrice={ "119.99" } courseSubjects={ ["Unity", "Blender",
                        "Photoshop", "AGK"] } courseSubjectType={ "Vývoj hier" } />
                    <Course courseName={ "Premium" } coursePrice={ "199.99" } courseSubjects={ ["Unity", "Blender",
                        "Photoshop", "Unreal Engine", "C++", "AGK"] } courseSubjectType={ "Vývoj hier" } />
                </div>
            </div>

        </div>
    )
}

export { Courses };
