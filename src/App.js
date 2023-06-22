import "./App.css";
import Navigation from "./Components/Navigation";
import Home from "./Components/Home";
import BIO from "./Components/Pages/BIO";
import PAINTINGS from "./Components/Pages/Paintings";
import CONTACTS from "./Components/Pages/Contacts";
import VIDEOSPAGE from "./Components/Pages/VideosPage";
import STORE from "./Components/Pages/STORE";
import { Route, Switch } from "react-router-dom";
import BASKET from "./Components/Pages/Basket";
import SALE from "./Components/Pages/SaleDescription";
import ShopContext from "./Shop-Context";
import { useState } from "react";

function App() {
  const [testSwitch, setTestSwitch] = useState(false);
  const [checkProducts, setCheckProducts] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  return (
    <div>
      <ShopContext>
        <Navigation test={testSwitch} setTest={setTestSwitch} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/BIO">
            <BIO />
          </Route>
          <Route path="/PAINTINGS">
            <PAINTINGS />
          </Route>
          <Route path="/CONTACTS">
            <CONTACTS />
          </Route>
          <Route path="/VIDEOS">
            <VIDEOSPAGE />
          </Route>
          <Route path="/STORE">
            <STORE />
          </Route>
          <Route path="/BASKET">
            <BASKET
              checkProducts={checkProducts}
              setCheckProducts={setCheckProducts}
            />
          </Route>
          <Route path="/SALE">
            <SALE
              checkProducts={checkProducts}
              setCheckProducts={setCheckProducts}
            />
          </Route>
        </Switch>
      </ShopContext>
    </div>
  );
}

export default App;
