import "./App.css";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Countries} />
          <Route exact path="/:name" component={Country} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
