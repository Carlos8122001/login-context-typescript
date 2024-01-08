import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { User } from "../types/Types";
import { useForm, SubmitHandler } from "react-hook-form";
import { setLocalStorage } from "../services/UseLocalStorage";
import { Alert } from "@mui/material";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { NavLink, useNavigate } from "react-router-dom";

export const FormRegister = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    defaultValues: {
      id: uuidv4(),
    },
  });

  const navigate = useNavigate();

  const [valid, setValid] = useState<boolean>(false);

  const onSubmit: SubmitHandler<User> = (data) => {
    setLocalStorage(data);
    setValid(true);
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit(onSubmit)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="off"
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  {...register("firstName", {
                    required: true,
                  })}
                  error={errors.firstName ? true : false}
                  helperText={
                    errors.firstName && "The field first name is empty"
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoComplete="off"
                  {...register("lastName", { required: true })}
                  error={errors.lastName ? true : false}
                  helperText={errors.lastName && "The field last name is empty"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoComplete="off"
                  {...register("email", { required: true })}
                  error={errors.email ? true : false}
                  helperText={errors.email && "The field email is empty"}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="off"
                  {...register("password", { required: true })}
                  error={errors.password ? true : false}
                  helperText={errors.password && "The field password is empty"}
                />
              </Grid>
              <Grid item xs={12}>
                {valid ? (
                  <Alert severity="success" sx={{ mt: 2 }}>
                    This is a success alert — check it out!
                  </Alert>
                ) : null}
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to={"/"}>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};
