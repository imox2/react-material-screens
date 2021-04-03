import {
  Switch,
  Redirect,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import

function App() {
  return (
    <div>
       <Router>
       <Switch>
              <Route component={Redeem} path="/redeem/:id" />
              <Route component={Redeem} path="/redeem" />
              {/* <Route component={Information} path="/information" /> */}
              <Route
                path="/information"
                render={(props) => <Information {...props} />}
              />
              {/* <Route component={Verification} path="/verification" /> */}
              <Route
                path="/verification"
                render={(props) => <Verification {...props} />}
              />
              <Route component={Data} path="/data" />
              <Route component={Home} path="/earn-points" />
              <Route component={Activity} path="/activity" />
              {/* <Route component={Profile} path="/profile" /> */}
              <Route
                path="/profile"
                render={(props) => <Profile {...props} />}
              />
              {/* <Route exactly component={Home} pattern="/" /> */}
              <Route
                exactly
                path="/"
                render={(props) => <Dashboard {...props} />}
              />
              {/* <Route exactly component={Dashboard} pattern="/" /> */}
            </Switch>
      </Router>
    </div>
  );
}

export default App;
