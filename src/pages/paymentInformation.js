import React from "react";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';

const months = [
  {
    value: 'default',
    label: '-Select One-',
  },
  {
    value: 'January',
    label: 'January',
  },
  {
    value: 'February',
    label: 'February',
  },
  {
    value: 'March',
    label: 'March',
  },
  {
    label: 'April',
    value: 'April',
  },
  {
    label: 'May',
    value: 'May',
  },
  {
    label: 'June',
    value: 'June',
  },
  {
    label: 'July',
    value: 'July',
  },
  {
    label: 'August',
    value: 'August',
  },
  {
    label: 'September',
    value: 'September',
  },
  {
    label: 'October',
    value: 'October',
  },
  {
    label: 'November',
    value: 'November',
  },
  {
    label: 'December',
    value: 'December',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },}));

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

function StyledCheckbox(props) {
  const classes = useStyles();

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  );
}

function PaymentInformation () {
  const classes = useStyles();
  const [month, setMonth] = React.useState('-Select One-');

  const handleChange = (event) => {
    setMonth(event.target.value);
  };

    return(
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
      <div>
      Expiration Date (MMYY)
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
      <div>
      Card Type
      <div>
          {/* <img alt="prize" className="rounded-xl object-cover" src="https://logodix.com/logo/797185.png" /> */}
        </div>
    </div>
    <div>
      Card Number
      <TextField id="standard-basic" label="Standard" />
    </div>
    <div>
      CVV
      <TextField id="standard-basic" label="Standard" />
    </div>
    <div>
      Cardholder Name
      <TextField id="standard-basic" label="Standard" />
    </div>
    <div>
      Address 1
      <TextField id="standard-basic" label="Standard" />
    </div>
    <div>
      Address 2
      <TextField id="standard-basic" label="Standard" />
    </div>
    <div>
      Postal Code
      <TextField id="standard-basic" label="Standard" />
    </div>
    <p>Required Field</p>
    <StyledCheckbox />By providing my credit card number, I understand that my credit card number will be placed on file for future renewals of my Connected Care/Remote/Guidance subscriptions. Upon expiration, this subscription will be automatically renew for another terms according to the billing plan I have selected, and for subsequent renewals. In accordance with the Terms and Conditions of my Subscriber Agreement, including the refund policy. Unless otherwise stated, for each renewal period of each subscription, my credit card account number on file will be charged on the renewal date at the then current subscription rate, plus applicable taxes and fees, unless I cancel my subscription rate, plus applicable taxes and fees, unless I cancel my subscription prior to the renewal date. I may cancel at any time by calling (________). I authorize these future charges to be applied to my credit card.

    <button>
      Save and continue
    </button>
    <p>back</p>
      </form>
    </div>
        </>
    )
}

export default PaymentInformation;