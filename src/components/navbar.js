// import classes from "*.module.css";
import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <Box display="flex" flexDirection="row" style={{ marginTop: "3%" }}>
        <Box mr={6}>
          <Link to="/payment">Payment</Link>
        </Box>
        <Box mr={6}>
          <Link to="/tnc">Terms and Conditions</Link>
        </Box>
        <Box mr={6}>
          <Link to="/order">Review Order</Link>
        </Box>
      </Box>
    </>
  );
}
