import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import StyledCheckbox  from "../components/styledCheckbox";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
    },
  }));

function ReviewOrder () {
    const classes = useStyles();

    return(
        <>
        <div className={classes.root}>
            <h1>Review Order</h1>
            <div>
                <h4>Payment method</h4>
                <p>Giannis Antetokounmpo</p>
                <p>VISA</p>
                <p>Ending in</p>
            </div>
            <div>
                <h4>Billing Address</h4>
                <p>Giannis Antetokounmpo</p>
                <p>1290 Avenue of Americas</p>
                <p>New York, NY 10104</p>
            </div>
            <div>
                <h4>Order Summary</h4>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <p>Connected Care + Remote + Guidance</p>
                        <p>3 months trial subscription</p>
                        <p>Expires 04/25/20</p>
                    </Grid>
                    <Grid item xs={6}>
                        <p>$0.00</p>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <p>Connected Care + Remote + Guidance</p>
                        <p>3 months trial subscription</p>
                        <p>Starts 07/25/20 | Expires 04/25/20</p>
                    </Grid>
                    <Grid item xs={6}>
                        <p>$276.00</p>
                    </Grid>
                </Grid>
            </div>
            <div>
                <h4>Subscription summary</h4>
                <Grid container spacing={3}>
                <Grid item xs={6}>
                    <p>Subtotal:</p>
                </Grid>
                <Grid item xs={6}>
                    <p>$0.00</p>
                </Grid>
                <Grid item xs={6}>
                    <p>Total Tax:</p>
                </Grid>
                <Grid item xs={6}>
                    <p>$0.00</p>
                </Grid>
                <Grid item xs={6}>
                    <p>Total Amount:</p>
                </Grid>
                <Grid item xs={6}>
                    <p>$297.00</p>
                </Grid>
                </Grid>
                <p>
                    Tax based on address in profile. Your updated subscription will begin today for the duration you have selected, and renew in accordance with your Subscriber Agreement. Any amount shown here as due will be charged today to your credit card on file. A refund for paid time remaining on your prior subscription, if applicable, will be issued in accordance with the terms of your Subscriber Agreement including the refund policy.
                </p>
            </div>
            <StyledCheckbox /> I am 18 years of age or older and have read and agreed to the Blue Link Subscription Agreement Terms, including, without limitation, the terms regarding service duration of subscription renewal, limitations of liability, and privacy. I agree that this agreement may be signed, delivered or retained in electronic form. I consent to the vehicle data collection use and disclosure, including location data, as set forth in Privacy Policy and the Subscriber Agreement. I hereby authorize the charges set out on this page, if any, to be applied to the card I have placed on file.
            <button> Subscribe now </button>
            <button> Return to package selection </button>
        </div>
        </>
    )
}

export default ReviewOrder;