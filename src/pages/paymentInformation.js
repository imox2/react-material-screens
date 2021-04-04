import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import StyledCheckbox from "../components/styledCheckbox";
import Grid from "@material-ui/core/Grid";
import InputRow from "../components/inputRow";
import StyledButton from "../components/styledButton";
import Select from "@material-ui/core/Select";
import { Typography } from "@material-ui/core";

const months = [
  {
    value: "Default",
    label: "Select Month",
  },
  {
    value: "January",
    label: "January",
  },
  {
    value: "February",
    label: "February",
  },
  {
    value: "March",
    label: "March",
  },
  {
    label: "April",
    value: "April",
  },
  {
    label: "May",
    value: "May",
  },
  {
    label: "June",
    value: "June",
  },
  {
    label: "July",
    value: "July",
  },
  {
    label: "August",
    value: "August",
  },
  {
    label: "September",
    value: "September",
  },
  {
    label: "October",
    value: "October",
  },
  {
    label: "November",
    value: "November",
  },
  {
    label: "December",
    value: "December",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    paddingRight: "1rem",
    paddingLeft: "1rem",
    paddingTop: "1rem",
    paddingBottom: "1rem",
    backgroundColor: "#f5f5f5",
    "& > *": {
      margin: theme.spacing(1),
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  input_label: {
    color: "rgba(0,0,0,0.7)",
    marginBottom: "0.3rem",
  },
  input_box: {
    flexGrow: "2",
  },
  custom_input: {
    width: "90%",
    height: "1rem",
    border: "1.5px solid #c9c9c9",
    borderRadius: "3px",
    padding: "5px",
    "&:active": {
      border: "2px solid #3f51b5",
    },
    "&:focus": {
      border: "2.5px solid #3f51b5",
    },
  },
  required_indicator: {
    backgroundColor: "green",
    width: ".2rem",
    height: "1.8rem",
    marginRight: ".3rem",
    display: "inline-block",
  },
  link: {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  },
}));

function PaymentInformation() {
  const classes = useStyles();
  const [month, setMonth] = React.useState("Default");

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

  return (
    <>
      {/* <FormControl component="fieldset">
      <RadioGroup defaultValue="visa" aria-label="payment" name="customized-radios">
        <FormControlLabel value="visa" control={<StyledRadio />} label="visa" /> 
        <div>
          <img alt="prize" className="rounded-xl object-cover" src="https://logodix.com/logo/797185.png" />
        </div>
        <FormControlLabel value="debit" control={<StyledRadio />} label="debit" />
      </RadioGroup>
    </FormControl> */}
      <div>
        <h1>Payment Information</h1>
        <form className={classes.root} noValidate autoComplete="off">
          <Grid container justify="center">
            <InputRow>
              <div>
                <div className={classes.input_label}>
                  <label>Expiration Date (MMYY)</label>
                </div>
                <Grid container alignItems="center">
                  <Grid item className={classes.input_box}>
                    <Select
                      value={month}
                      onChange={handleChange}
                      style={{ width: "100%" }}
                    >
                      {months.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid
                    item
                    style={{ color: "rgba(0,0,0,0.7)", margin: "0 0.5rem" }}
                  >
                    {" "}
                    /{" "}
                  </Grid>
                  <Grid item className={classes.input_box}>
                    <Select
                      value={month}
                      onChange={handleChange}
                      style={{ width: "100%" }}
                    >
                      {months.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                </Grid>
              </div>
            </InputRow>
            {/* <div>
              <div className={classes.input_label}>
                <label htmlFor="cardType">Card Type</label>
              </div>
              <div>
                <img alt="prize" className="rounded-xl object-cover" src="https://logodix.com/logo/797185.png" />
              </div>
            </div> */}
            <InputRow>
              <div>
                <div className={classes.input_label}>
                  <label htmlFor="cardNumber">Card Number</label>
                </div>
                <Grid container>
                  <Grid item>
                    <div className={classes.required_indicator} />
                  </Grid>
                  <Grid item className={classes.input_box}>
                    <input id="cardNumber" className={classes.custom_input} />
                  </Grid>
                </Grid>
              </div>
            </InputRow>
            <InputRow>
              <div>
                <div className={classes.input_label}>
                  <label htmlFor="cvv">CVV</label>
                </div>
                <Grid container>
                  <Grid item>
                    <div className={classes.required_indicator} />
                  </Grid>
                  <Grid item className={classes.input_box}>
                    <input id="cvv" className={classes.custom_input} />
                  </Grid>
                </Grid>
              </div>
            </InputRow>
            <InputRow>
              <div>
                <div className={classes.input_label}>
                  <label htmlFor="name">Cardholder Name</label>
                </div>
                <Grid container>
                  <Grid item>
                    <div className={classes.required_indicator} />
                  </Grid>
                  <Grid item className={classes.input_box}>
                    <input id="name" className={classes.custom_input} />
                  </Grid>
                </Grid>
              </div>
            </InputRow>
            <InputRow>
              <div>
                <div className={classes.input_label}>
                  <label htmlFor="address1">Address 1</label>
                </div>
                <Grid container>
                  <Grid item>
                    <div className={classes.required_indicator} />
                  </Grid>
                  <Grid item className={classes.input_box}>
                    <input id="address1" className={classes.custom_input} />
                  </Grid>
                </Grid>
              </div>
            </InputRow>
            <InputRow>
              <div>
                <div className={classes.input_label}>
                  <label htmlFor="address2">Address2</label>
                </div>
                <Grid container>
                  <Grid item>
                    <div className={classes.required_indicator} />
                  </Grid>
                  <Grid item className={classes.input_box}>
                    <input id="address2" className={classes.custom_input} />
                  </Grid>
                </Grid>
              </div>
            </InputRow>
            <InputRow>
              <div>
                <div className={classes.input_label}>
                  <label htmlFor="postalCode">Postal Code</label>
                </div>
                <Grid container>
                  <Grid item>
                    <div className={classes.required_indicator} />
                  </Grid>
                  <Grid item className={classes.input_box}>
                    <input id="postalCode" className={classes.custom_input} />
                  </Grid>
                </Grid>
              </div>
            </InputRow>
            <Grid container alignItems="center">
              <Grid item>
                <div className={classes.required_indicator}></div>
              </Grid>
              <Grid item>
                <span style={{ margin: "0 0.3rem" }}>-</span>
              </Grid>
              <Grid item>
                <p>Required Field</p>
              </Grid>
            </Grid>
            <InputRow>
              <StyledCheckbox />
              By providing my credit card number, I understand that my credit
              card number will be placed on file for future renewals of my
              Connected Care/Remote/Guidance subscriptions. Upon expiration,
              this subscription will be automatically renew for another terms
              according to the billing plan I have selected, and for subsequent
              renewals. In accordance with the Terms and Conditions of my
              Subscriber Agreement, including the refund policy. Unless
              otherwise stated, for each renewal period of each subscription, my
              credit card account number on file will be charged on the renewal
              date at the then current subscription rate, plus applicable taxes
              and fees, unless I cancel my subscription rate, plus applicable
              taxes and fees, unless I cancel my subscription prior to the
              renewal date. I may cancel at any time by calling (855)2BLUELINK.
              I authorize these future charges to be applied to my credit card.
            </InputRow>
            <InputRow>
              <StyledButton text="Save & Continue" />
            </InputRow>
            <div className={classes.link}>
              <Typography align="center">Back</Typography>
            </div>
          </Grid>
        </form>
      </div>
    </>
  );
}

export default PaymentInformation;
