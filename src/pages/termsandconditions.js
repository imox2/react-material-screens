import React from "react";
import StyledCheckbox from "../components/styledCheckbox";
import StyledButton from "../components/styledButton";
import { Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
const styles = (theme) => ({
  root: {
    color: "blue",
    textDecoration: "underline",
    cursor: "pointer",
  },
  dividerStyle: {
    marginTop: "15px",
    marginBottom: "15px",
  },
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
});

function TermsAndConditions(props) {
  const { classes } = props;
  return (
    <>
      <div>
        <div>
          <h2 style={{ marginBottom: 0 }}>Terms and Conditions</h2>
          <h5 style={{ marginTop: 0 }}>Connected Services Agreement</h5>
          <p>Effective as of 6/1/19</p>
        </div>
        <div>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested.
          </p>
        </div>
        <div>
          Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by
          Cicero are also reproduced in their exact original form, accompanied
          by English versions from the 1914 translation by H. Rackham.
        </div>
        <Divider className={classes.dividerStyle} />
        <div>
          <StyledCheckbox label="I have read and accept the Terms and Conditions" />
        </div>
        <div>
          <StyledButton text="Accept Terms" />
        </div>
        <div style={{ marginTop: "2%" }} className={classes.root}>
          <Typography align="center">Decline, exit enrollment</Typography>
        </div>
      </div>
    </>
  );
}
export default withStyles(styles)(TermsAndConditions);
