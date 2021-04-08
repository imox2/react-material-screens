// import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import PaymentInformation from "./pages/paymentInformation";
// import ReviewOrder from "./pages/reviewOrder";
// import TermsAndConditions from "./pages/termsandconditions";
// import Navbar from "./components/navbar";
// import { makeStyles } from "@material-ui/core/styles";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// const theme = createMuiTheme({
//   typography: {
//     fontSize: 12,
//     fontFamily: '"Work Sans"',
//   },
//   fontFamily: '"Work Sans"',
// });
// // const styles = theme => ( {
// //   root: {
// //     'marginLeft': '8rem',
// //     'marginRight': '8rem',
// //   },
// // } );

// const styles = makeStyles((theme) => ({
//   root: {
//     [theme.breakpoints.down("sm")]: {
//       marginRight: "1rem",
//       marginLeft: "1rem",
//     },
//     [theme.breakpoints.up("md")]: {
//       marginRight: "12rem",
//       marginLeft: "12rem",
//     },
//     [theme.breakpoints.up("lg")]: {
//       marginRight: "16rem",
//       marginLeft: "16rem",
//     },
//   },
// }));

// function App(props) {
//   const classes = styles();
//   console.log(classes);
//   return (
//     <MuiThemeProvider theme={theme}>
//       <div className={classes.root}>
//         <Router>
//           <Navbar />
//           <Switch>
//             <Route component={PaymentInformation} path="/payment" />
//             <Route component={ReviewOrder} path="/order" />
//             <Route component={TermsAndConditions} path="/tnc" />
//             <Route component={PaymentInformation} path="/" />
//           </Switch>
//         </Router>
//       </div>
//     </MuiThemeProvider>
//   );
// }

// export default App;

import { Container, Paper } from "@material-ui/core";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import PaymentInformation from "./pages/paymentInformation";
import ReviewOrder from "./pages/reviewOrder";
import TermsAndConditions from "./pages/termsandconditions";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Paper className={"main-box"} elevation={3}>
          <Router>
            <Navbar />
            <Switch>
              <Route component={PaymentInformation} path="/payment" />
              <Route component={ReviewOrder} path="/order" />
              <Route component={TermsAndConditions} path="/tnc" />
              <Route component={PaymentInformation} path="/" />
            </Switch>
          </Router>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
