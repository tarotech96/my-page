import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Header from "components/header/Header";
import Footer from "components/footer/Footer";
import routes from "routes";

function App() {

  /**
   * get router with specific path and component
   * @param routes is defined array routes for app
   * @return a router
   */
  const getRoutes = (routes) => {
    if (routes.length) {
      return routes.map((route, index) => {
        if (route.path) {
          return (
            <Route
              exact
              path={route.path}
              component={route.component}
              key={index}
            />
          );
        } else {
          return null;
        }
      });
    }
  };

  return (
    <Router>
      <Header />
      <Switch>
        {getRoutes(routes)}
        <Redirect exact from="/" to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
