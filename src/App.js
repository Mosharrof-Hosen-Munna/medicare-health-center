import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import Header from "./Components/Shared/Header/Header";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Footer from "./Components/Shared/Footer/Footer";
import About from "./Components/AboutUs/About";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";

import AuthProvider from "./Components/AuthProvider/AuthProvider";
import PrivateRoute, {
  AuthPrivateRoute,
} from "./Components/PrivateRoute/PrivateRoute";
import ServiceDetail from "./Components/ServiceDetails/ServiceDetail";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/contact">
            <Contact></Contact>
          </PrivateRoute>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/service/:id">
            <ServiceDetail></ServiceDetail>
          </PrivateRoute>
          <AuthPrivateRoute path="/login">
            <Login></Login>
          </AuthPrivateRoute>
          <AuthPrivateRoute path="/register">
            <Register></Register>
          </AuthPrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
