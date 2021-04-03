import {
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import  PaymentInformation  from "./pages/paymentInformation";
import  ReviewOrder  from "./pages/reviewOrder";
import  TermsAndConditions  from "./pages/termsandconditions";
import {withStyles,makeStyles} from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
        fontSize: 12,
        fontFamily: '"Work Sans"'
    },
    fontFamily: '"Work Sans"',
})
// const styles = theme => ( {
//   root: {
//     'marginLeft': '8rem',
//     'marginRight': '8rem',
//   },
// } );

const styles = makeStyles((theme) => ({
  faisal: {
    [theme.breakpoints.down("sm")]: {
      marginRight: '1rem',
      marginLeft: '1rem',
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: '8rem',
      marginLeft: '8rem',
    },
  },
}));


function App(props) {
  const classes = styles();
  console.log(classes);
  return (
      <MuiThemeProvider theme={theme}>
        <div className={classes.faisal}>
       <Router>
       <Switch>
                
              <Route component={PaymentInformation} path="/payment" />
              <Route component={ReviewOrder} path="/order" />
              <Route component={TermsAndConditions} path="/tnc" />
              <Route component={PaymentInformation} path="/" />
        </Switch>
      </Router>
      </div>
      </MuiThemeProvider>
  );
}

export default App;
