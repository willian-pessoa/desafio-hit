import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  useMediaQuery,
  Input,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Typography,
} from "@mui/material";
import { Person, Visibility, VisibilityOff } from "@mui/icons-material";

import Header from "components/Header/Header";
import CenterBox from "components/CustomBoxs/CenterBox";
import FlexBetween from "components/CustomBoxs/FlexBetween";

// REDUX
import { useDispatch } from "react-redux";
import { setLogin } from "redux/global";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const [showPassword, setShowPassword] = useState(false);
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleLogin = () => {
    if (usuario === "admin" && password === "admin") {
      dispatch(setLogin());
      navigate("/dashboard");
    } else {
      setIsError(true);
    }
  };

  return (
    <CenterBox width="100vw" height="100vh">
      <Box
        p="10px 20px"
        width={isNonMobile ? "400px" : "90%"}
        height="420px"
        bgcolor="antiquewhite"
        borderRadius="10px"
      >
        <Header title="LOGIN" subtitle="Entre para acessar o dashboard" />
        <FlexBetween
          flexDirection="column"
          mt="2rem"
          gap="2rem"
          sx={{ alignItems: "flex-start !important" }}
        >
          <FormControl
            error={isError}
            variant="standard"
            sx={{ width: "100%" }}
          >
            <InputLabel htmlFor="standard-adornment-password">
              Usuário
            </InputLabel>
            <Input
              id="standard-adornment-Person"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value.trim())}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton aria-label="toggle Person">
                    <Person style={{ color: isError ? "red" : "#051428" }} />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl
            error={isError}
            variant="standard"
            sx={{ width: "100%" }}
          >
            <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
            <Input
              id="standard-adornment-password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? (
                      <VisibilityOff
                        style={{ color: isError ? "red" : "#051428" }}
                      />
                    ) : (
                      <Visibility
                        style={{ color: isError ? "red" : "#051428" }}
                      />
                    )}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            sx={{
              backgroundColor: "#f0c284",
              color: "#051428",
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              alignSelf: "center",
              marginTop: "10px",
              textTransform: "none",
              ":hover": {
                bgcolor: "#051428",
                color: "antiquewhite",
              },
            }}
            onClick={() => handleLogin()}
          >
            Login
          </Button>
          <Box>
            <Typography fontSize="0.75rem">
              Usuario: admin / Senha: admin
            </Typography>
          </Box>
        </FlexBetween>
      </Box>
    </CenterBox>
  );
};

export default Login;
