import './App.css';

function App() {
  return (
      <div className="App">
        <div className="App-header">
          <h1 className={"title"}>Contacts</h1>
          <div className="sub-domains">
            <a href={"http://localhost:3000/"} className={"subdomain"}>Home</a>
            <p className={"subdomain-splitter"}>/ </p>
            <a href={"http://localhost:3002/"} className={"subdomain"}>Courses</a>
            <p className={"subdomain-splitter"}>/ </p>
            <a href={"http://localhost:3004/"} className={"subdomain"}>Contacts</a>
          </div>
        </div>
      </div>
  );
}

export default App;
