// import classes from "*.module.css";
import React from "react";
import Box from "@material-ui/core/Box";

export default function Navbar() {
  return (
    <>
      <Box display="flex" flexDirection="row" style={{ marginTop: "3%" }}>
        <Box mr={6}>
          <a href="/payment">Payment</a>
        </Box>
        <Box mr={6}>
          <a href="/tnc">Terms and Conditions</a>
        </Box>
        <Box mr={6}>
          <a href="/order">Review Order</a>
        </Box>
      </Box>
    </>
  );
}
