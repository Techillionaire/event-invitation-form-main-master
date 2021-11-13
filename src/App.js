import Form from"./components/Form";
import Card from "./components/Card";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';



function App() {
    

    return (
      <div className="app">
          <Router>
              <Switch>
                  <Route path="/" exact>
                    <Form />
                  </Route>
                  <Route  path="/card" exact>
                    <Card />
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
