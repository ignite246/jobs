import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App container">

      <BrowserRouter>

        <Navbar></Navbar>

        <Switch>

          <Route exact path="/" component={Home}></Route>

          <Route exact path="/about" component={About}></Route>

        </Switch>

      </BrowserRouter>

    </div>
  );
}

export default App;
