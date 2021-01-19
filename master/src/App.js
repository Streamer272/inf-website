import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Components/Home/Home.js";
import { Courses } from "./Components/Courses/Courses.js";
import { Contacts } from "./Components/Contacts/Contacts";
import "./script.js";

function App() {
    return (
        <Router>
          <Route path={ "/" } exact={ true } component={ Home } />
          <Route path={ "/courses" } exact={ true } component={ Courses } />
          <Route path={ "/contacts" } exact={ true } component={ Contacts } />
        </Router>
    );
}

export default App;
