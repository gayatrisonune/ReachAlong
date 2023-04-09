import React, { useState } from "react";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import GoogleIcon from '@mui/icons-material/Google';
import { Link } from 'react-router-dom';


export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [emailerror, setEmailError] = useState(false);
  const [passworderror, setPasswordError] = useState(false);
  const [usernameerror, setUsernameError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError(false);
    setPasswordError(false);
    setUsernameError(false);
    if (username === "") {
      setUsernameError(true);
    }
    if (email === "") {
      setEmailError(true);
    }
    if (password === "") {
      setPasswordError(true);
    }

    if (username && email && password) {
      console.log(username, email, password);
    }


  };
  return (
    <>
      <Container style={{ display: "flex", flexDirection: "column", gap: "1.5em", alignItems: "center" }}>
        <Paper style={{ display: "center", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "30%", marginTop: "15%", height: "20em" }}
          elevation={20}>
          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <Grid style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2em", marginTop: "4%" }}>
              <Grid item xs={12}>
                {" "}
                <TextField

                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  color="primary"
                  onChange={(e) => setUsername(e.target.value)}
                  error={usernameerror}
                />
              </Grid>
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
                  color="success"
                  style={{ backgroundColor: "#0B2447", color: "whitesmoke" }}
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>

        <Button variant="outlined" color="success" style={{
          alignSelf: "center",
          background: " linear-gradient(to right, #33ccff 25%, #ff99cc 37%)", border: "solid white", gap: "1em", color: "black"
        }} >
          <GoogleIcon /> Sign in with Google
        </Button>
        <Typography style={{ color: "black" }}>Already have an account?
          <Link to="/Login" style={{ textDecoration: "none", color: "blue" }}>  Log in</Link>
        </Typography>
        <Typography style={{ color: "red" }}>
          <Link to="/" style={{ textDecoration: "none", color: "blue" }}> Go to the Home Page</Link>
        </Typography>
      </Container>
    </>

  );
}
