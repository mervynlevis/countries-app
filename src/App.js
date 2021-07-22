import "./App.css";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Country from "./components/Country";
import Footer from "./components/Footer";
import Error from "./components/Error";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/countries-app" component={Countries} />
          <Route exact path="/countries-app/:name" component={Country} />
          <Route component={Error} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
