import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import StyledCheckbox from "../components/styledCheckbox";
import Grid from "@material-ui/core/Grid";
import InputRow from "../components/inputRow";

const months = [
  {
    value: "default",
    label: "-Select One-",
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
    "&:hover": {
      backgroundColor: "transparent",
    },
    "& > *": {
      margin: theme.spacing(1),
    },
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  input_label: {
    color: "#a9a9a9",
  },
  custom_input: {
    width: "100%",
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
}));

function StyledRadio(props) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

function PaymentInformation() {
  const classes = useStyles();
  const [month, setMonth] = React.useState("-Select One-");

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
        <Grid container>
          <form className={classes.root} noValidate autoComplete="off">
            <InputRow>
              <div>
                <div className={classes.input_label}>
                  Expiration Date (MMYY)
                </div>
                <TextField
                  id="standard-select-currency"
                  select
                  value={month}
                  onChange={handleChange}
                >
                  {months.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  id="standard-select-currency"
                  select
                  value={month}
                  onChange={handleChange}
                >
                  {months.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
            </InputRow>
            <div>
              Card Type
              <div>
                {/* <img alt="prize" className="rounded-xl object-cover" src="https://logodix.com/logo/797185.png" /> */}
              </div>
            </div>
            <InputRow>
              <div>
                Card Number
                <TextField
                  id="standard-basic"
                  label="Standard"
                  InputProps={{ classes: { input: classes.custom_input }}}
                />
              </div>
            </InputRow>
            <InputRow>
              <div>
                CVV
                <TextField id="outlined-required" label="Standard" variant="outlined"/>
              </div>
            </InputRow>
            <InputRow>
              <div>
                Cardholder Name
                <TextField id="standard-basic" label="Standard" />
              </div>
            </InputRow>
            <InputRow>
              <div>
                Address 1
                <TextField id="standard-basic" label="Standard" />
              </div>
            </InputRow>
            <InputRow>
              <div>
                Address 2
                <TextField id="standard-basic" label="Standard" />
              </div>
            </InputRow>
            <InputRow>
              <div>
                Postal Code
                <TextField id="standard-basic" label="Standard" />
              </div>
            </InputRow>
            <p>Required Field</p>
            <StyledCheckbox />
            By providing my credit card number, I understand that my credit card
            number will be placed on file for future renewals of my Connected
            Care/Remote/Guidance subscriptions. Upon expiration, this
            subscription will be automatically renew for another terms according
            to the billing plan I have selected, and for subsequent renewals. In
            accordance with the Terms and Conditions of my Subscriber Agreement,
            including the refund policy. Unless otherwise stated, for each
            renewal period of each subscription, my credit card account number
            on file will be charged on the renewal date at the then current
            subscription rate, plus applicable taxes and fees, unless I cancel
            my subscription rate, plus applicable taxes and fees, unless I
            cancel my subscription prior to the renewal date. I may cancel at
            any time by calling (855)2BLUELINK. I authorize these future charges
            to be applied to my credit card.
            <button>Save and continue</button>
            <p>back</p>
          </form>
        </Grid>
      </div>
    </>
  );
}

export default PaymentInformation;
