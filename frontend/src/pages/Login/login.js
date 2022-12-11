import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  let whitelist = {
    gui: "123",
    biel: "abc",
    bruno: "asd",
  };

  const handleKeyPress = (event) => {
    if (event.which === 13) {
      handleLogin();
    }
  };

  const handleLogin = (event) => {
    if (whitelist[username.toLowerCase()] === password) {
      navigate("/dashboard");
    } else {
      alert("Senha errada!");
    }
  };

  return (
    <Box
      sx={{
        "& > :not(style)": {
          m: "auto",
          width: 500,
          height: 500,
        },
      }}
      m="auto"
      display="flex"
      alignItems="center"
      width="1000px"
      height="98vh"
    >
      <Paper elevation={3} style={{backgroundColor: "#e6e6e6"}}>
        <Box
          m="auto"
          mt="90px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          autoComplete="off"
        >
          <div>
            <TextField
              id="login"
              label="Login"
              sx={{width: "400px"}}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              onKeyPress={(e) => {
                handleKeyPress(e);
              }}
            />
          </div>
        </Box>
        <Box
          m="auto"
          mt="40px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          autoComplete="off"
          marginBottom="10px"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TextField
              id="password"
              label="Password"
              type="password"
              sx={{width: "400px"}}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onKeyPress={(e) => {
                handleKeyPress(e);
              }}
            />

            <Link
              href="https://www.google.com"
              underline="hover"
              sx={{
                width: "100%",
                display: "flex",
                color: "#5b3c88",
                justifyContent: "flex-start",
                marginTop: "10px",
                fontFamily: "sans-serif",
              }}
              target="_blank"
              rel="noreferrer"
            >
              Esqueceu a senha?
            </Link>
          </Box>
        </Box>

        <Box
          m="auto"
          mt="80px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          autoComplete="off"
        >
          <Box>
            <LoadingButton
              loading={false}
              variant="contained"
              sx={{
                width: "400px",
                height: "59px",
                backgroundColor: "#5b3c88",
                "&:hover": {
                  backgroundColor: "#6b46a1",
                },
              }}
              onClick={() => {
                handleLogin();
              }}
              type="submit"
            >
              Entrar
            </LoadingButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
