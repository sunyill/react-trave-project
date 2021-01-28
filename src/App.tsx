import React from "react";
import styles from "./App.module.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage, DetailPage, SignIn, RegisiterPage } from "./pages";
import notFound from "./assets/404not_found.png";

function App() {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/register" component={RegisiterPage} />
          <Route path="/detail/:touristId" component={DetailPage} />
          <Route
            render={() => (
              <img src={notFound} className={styles.not_fount}></img>
            )}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
