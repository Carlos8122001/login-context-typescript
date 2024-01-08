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
import { useForm, SubmitHandler } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { UseContextProvider } from "../Context/UseContextProvider";
import { Login } from "../types/Types";

export const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();

  const onSubmit: SubmitHandler<Login> = (data) => {
    console.log(data);
  };

  return (
    <>
      <UseContextProvider>
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
              Sign in
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="off"
                autoFocus
                {...register("email", {
                  required: true,
                })}
                error={errors.email ? true : false}
                helperText={errors.email && "The field email is empty"}
              />
              <TextField
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                id="password"
                autoComplete="off"
                {...register("password", {
                  required: true,
                })}
                error={errors.email ? true : false}
                helperText={errors.email && "The field password is empty"}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>

              <Grid container justifyContent={"end"}>
                <Grid item>
                  <RouterLink to={"/register"}>
                    <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </UseContextProvider>
    </>
  );
};
