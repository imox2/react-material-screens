import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.down("sm")]: {
        backgroundColor: theme.palette.secondary.main,
      },
      [theme.breakpoints.up("md")]: {
        backgroundColor: theme.palette.primary.main,
      },
      [theme.breakpoints.up("lg")]: {
        backgroundColor: "green",
      },
    },
}));

  
function PaymentInformation () {
    const classes = styles();
    return(
        <>
        <h3 className={classes.root}>Payment Information</h3>
        </>
    )
}

export default PaymentInformation;