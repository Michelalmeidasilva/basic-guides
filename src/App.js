import "./style.css";
import ArrayScreen from "./exercicios/array/ArrayScreen";
import DesestruturacaoScreen from "./exercicios/desestruturacao/DesestruturacaoScreen";
import PromisesScreen from "./exercicios/promises/PromisesScreen.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Menu></Menu>
      <Switch>
        <Route path="/array">
          <ArrayScreen />
        </Route>
        <Route path="/desestruturacao">
          <DesestruturacaoScreen />
        </Route>
        <Route path="/Promises">
          <PromisesScreen />
        </Route>
      </Switch>
    </Router>
  );
}

const Menu = () => {
  return (
    <div class="header">
      <div class="btn-header btn-title">
        <a href="array">Arrays</a>
      </div>
      <div class="btn-header btn-title">
        <a href="desestruturacao">Desestruturação</a>
      </div>
      <div class="btn-header btn-title">
        <a href="promises">Promises</a>
      </div>
    </div>
  );
};
export default App;
