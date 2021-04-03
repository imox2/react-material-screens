import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import  PaymentInformation  from "./pages/paymentInformation";
import  ReviewOrder  from "./pages/reviewOrder";
import  TermsAndConditions  from "./pages/termsandconditions";

function App() {
  return (
    <div>
       <Router>
       <Switch>
              <Route component={PaymentInformation} path="/payment" />
              <Route component={ReviewOrder} path="/order" />
              <Route component={TermsAndConditions} path="/tnc" />
              <Route component={TermsAndConditions} path="/" />
            </Switch>
      </Router>
    </div>
  );
}

export default App;
