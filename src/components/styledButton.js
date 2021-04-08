import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      margin: "auto",
      marginTop: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
      margin: "auto",
      marginTop: "20px",
    },
    [theme.breakpoints.up("lg")]: {
      width: "50%",
      margin: "auto",
      marginTop: "20px",
    },
  },
}));

export default function StyledButton(props) {
  const classes = useStyles();
  return (
    <div className={classes.button}>
      <Button
        style={{
          borderRadius: "20px",
          backgroundColor: "#3475C1",
          color: "white",
        }}
        // color="primary"
        size="large"
        variant="contained"
        fullWidth
      >
        {props.text}
      </Button>
    </div>
  );
}
