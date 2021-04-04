import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import StyledCheckbox from "../components/styledCheckbox";
import { Typography, Button } from "@material-ui/core";
import { Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  content: {
    "& > *": {
      margin: 0,
    },
  },
  link: {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  },
  grayBox: {
    backgroundColor: "#E1E1E1",
    padding: "15px",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "3px",
  },
  dividerStyle: {
    marginTop: "15px",
    marginBottom: "15px",
  },
  gridBox: {
    marginBottom: "30px",
  },
}));

function ReviewOrder() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <h1>Review Order</h1>
        <h4>Payment method</h4>
        <div className={classes.content}>
          <p>Giannis Antetokounmpo</p>
          <p>VISA</p>
          <p>Ending in</p>
        </div>
        <h4>Billing Address</h4>
        <div className={classes.content}>
          <p>Giannis Antetokounmpo</p>
          <p>1290 Avenue of Americas</p>
          <p>New York, NY 10104</p>
        </div>
        <h4>Order Summary</h4>
        <div className={classes.gridBox}>
          <Divider className={classes.dividerStyle} />
          <Grid container spacing={3}>
            <Grid className={classes.content} item xs={6}>
              <p>Connected Care + Remote + Guidance</p>
              <p style={{ color: "green" }}>3 months trial subscription</p>
              <p>Expires 04/25/20</p>
            </Grid>
            <Grid container item xs={6} justify="flex-end">
              <p>$0.00</p>
            </Grid>
          </Grid>
          <Divider className={classes.dividerStyle} />
          <Grid container spacing={3}>
            <Grid className={classes.content} item xs={6}>
              <p>Connected Care + Remote + Guidance</p>
              <p style={{ color: "green" }}>3 months trial subscription</p>
              <p>Starts 07/25/20 | Expires 04/25/20</p>
            </Grid>
            <Grid container item xs={6} justify="flex-end">
              <p>$276.00</p>
            </Grid>
          </Grid>
        </div>
        <div className={classes.grayBox}>
          <h4>Subscription summary</h4>
          <Divider className={classes.dividerStyle} />
          <Grid container spacing={1}>
            <Grid className={classes.content} item xs={6}>
              <h5>Subtotal:</h5>
            </Grid>
            <Grid
              container
              className={classes.content}
              item
              xs={6}
              justify="flex-end"
            >
              <h5>$0.00</h5>
            </Grid>
            <Grid className={classes.content} item xs={6}>
              <h5>Total Tax:</h5>
            </Grid>
            <Grid
              container
              className={classes.content}
              item
              xs={6}
              justify="flex-end"
            >
              <h5>$0.00</h5>
            </Grid>
          </Grid>
          <Divider className={classes.dividerStyle} />
          <Grid container spacing={1}>
            <Grid item xs={6}>
              <h5>Total Amount:</h5>
            </Grid>
            <Grid container item xs={6} justify="flex-end">
              <h5>$297.00</h5>
            </Grid>
          </Grid>
          <p>
            Tax based on address in profile. Your updated subscription will
            begin today for the duration you have selected, and renew in
            accordance with your Subscriber Agreement. Any amount shown here as
            due will be charged today to your credit card on file. A refund for
            paid time remaining on your prior subscription, if applicable, will
            be issued in accordance with the terms of your Subscriber Agreement
            including the refund policy.
          </p>
        </div>
        <StyledCheckbox /> I am 18 years of age or older and have read and
        agreed to the Blue Link Subscription Agreement Terms, including, without
        limitation, the terms regarding service duration of subscription
        renewal, limitations of liability, and privacy. I agree that this
        agreement may be signed, delivered or retained in electronic form. I
        consent to the vehicle data collection use and disclosure, including
        location data, as set forth in Privacy Policy and the Subscriber
        Agreement. I hereby authorize the charges set out on this page, if any,
        to be applied to the card I have placed on file.
        <Typography align="center">
          <Button
            style={{ borderRadius: "15px" }}
            color="primary"
            size="large"
            variant="contained"
            fullWidth
          >
            Subscribe now
          </Button>
        </Typography>
        <div style={{ margin: "2%" }} className={classes.link}>
          <Typography align="center">Return to package selection</Typography>
        </div>
      </div>
    </>
  );
}

export default ReviewOrder;
