import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./Components/Web";

import "./App.css";
import ProductProvider from "./Context/productProvider";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route path="/" component={Main}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
