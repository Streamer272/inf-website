import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home } from "./Components/Home.js";

function App() {
  return (
    <Router>
      <Route path={"/"} exact={true} component={ Home }/>
    </Router>
  );
}

export default App;
