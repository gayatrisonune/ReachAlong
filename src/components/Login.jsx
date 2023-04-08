import React, { useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailerror, setEmailError] = useState(false);
  const [passworderror, setPasswordError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (email && password) {
      console.log(email, password);
    }
  };
  return (
    <>
      <Container style={{ display: "flex", flexDirection: "column", gap: "2em", alignItems: "center" }}>
        <Paper style={{ display: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "30%", marginTop: "15%", height: "20em", boxShadow: "5px 10px #888888" }}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2em", marginTop: "4%" }}>

              <Grid item xs={12}>
                {" "}
                <TextField

                  id="outlined-basic"
                  label="Email-ID"
                  variant="outlined"
                  color="primary"
                  onChange={(e) => setEmail(e.target.value)}
                  error={emailerror}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField

                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  color="primary"
                  onChange={(e) => setPassword(e.target.value)}
                  error={passworderror}
                />
              </Grid>
              <Grid item xs={12}>
                {" "}
                <Button
                  type="submit"
                  variant="outlined"
                  style={{ color: 'white', backgroundColor: "blue" }}

                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <Button variant="outlined" color="success" style={{ alignSelf: "center", background: " linear-gradient(to right, #33ccff 25%, #ff99cc 37%)", border: "solid white", gap: "1em", color: "black" }} >
          <GoogleIcon /> Sign in with Google
        </Button>
        <Typography style={{ color: "black" }}>Don't have an account?
          <Link to="/Signup" style={{ textDecoration: "none", color: "blue" }}>  Sign Up</Link>
        </Typography>
        <Typography style={{ color: "red" }}>
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}> Go to the Home Page</Link>
        </Typography>
      </Container>
    </>
  );
}
