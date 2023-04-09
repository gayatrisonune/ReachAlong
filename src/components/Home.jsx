import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Navbar from './Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <Grid
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2em",
          alignItems: "center",
          padding: "20%",
        }}
      >
        <Typography style={{ textAlign: "center", color: "black" }}>
          Make Something Epic
        </Typography>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            style={{
              height: "50%",
              background: "linear-gradient(to right, #1d3d82 0%, #07265e 37%)",
              border: "solid white",
            }}
          >
            <Link
              to="/Signup"
              style={{
                textDecoration: "none",
                color: "white",
                background: "linear-gradient(to right, #1d3d82 0%, #07265e 37%)",
              }}
            >
              Create Account
            </Link>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            style={{
              height: "50%",
              background:
                "linear-gradient(to right, #1d3d82 0%, #07265e 37%)",
              border: "solid white",
            }}
          >
            <Link
              to="/Login"
              style={{
                textDecoration: "none",
                color: "white",
                background:
                  " linear-gradient(to right, #1d3d82 0%, #07265e 37%)",
              }}
            >
              Log in
            </Link>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
