import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppointmentScreen from "./components/Appoinment/AppoinmentScreen/AppointmentScreen";
import HomeScreen from "./components/Home/HomeScreen/HomeScreen";
import LoginScreen from "./components/Login/LoginScreen/LoginScreen";
import ManagementScreen from "./components/Management/ManagementScreen/ManagementScreen";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HomeScreen></HomeScreen>
        </Route>
        <Route path="/appointment">
          <AppointmentScreen></AppointmentScreen>
        </Route>
        <Route path="/management">
          <ManagementScreen></ManagementScreen>
        </Route>
        <Route path="/login">
          <LoginScreen></LoginScreen>
        </Route>
        <Route exact path="/">
          <HomeScreen></HomeScreen>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
