import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home.js";
import { Courses } from "./Components/Courses/Courses.js";
import "./script.js";

function App() {
    return (
        <Router>
          <Route path={ "/" } exact={ true } component={ Home } />
          <Route path={ "/courses" } exact={ true } component={ Courses } />
        </Router>
    );
}

export default App;
