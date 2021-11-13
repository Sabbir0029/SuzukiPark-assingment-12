import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./AuthProvider/AuthProvider";
import CreateNewEvent from "./Pages/CreateNewEvent/CreateNewEvent";
import About from "./Pages/Home/About/About";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register/Register";
import Dashboard from "./Pages/Manage/Dashboard/Dashboard";
import MyOrder from "./Pages/MyOrder/MyOrder";
import PrivetRoute from "./Pages/PrivetRoute/PrivetRoute";
import Selected from "./Pages/Selected/Selected";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";



function App() {
  return (
    <div className="App">
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
          <Route path="/order">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/Dashboard">
            <Dashboard></Dashboard>
          </Route>
          <PrivetRoute path="/selected/:id">
            <Selected/>
          </PrivetRoute>
          <Route path="/createNewEvent">
            <CreateNewEvent></CreateNewEvent>
          </Route>
          <Route path="/aboutUs">
            <About></About>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
