import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import VendorReg from "./pages/V_Reg";
import VendorPage from "./pages/VendorPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/vendor-register" component={VendorReg} />
          <Route exact path="/vendor" component={VendorPage} />
          {/* <Route exact path="/register" component={RegisterPage} /> */}
          {/* <Route component={404Page} /> */}
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
