import * as React from 'react';
import { Field, Form } from 'react-final-form';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from './modules/components/Typography';
import AppForm from './modules/views/AppForm';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import Footer from './modules/views/Footer';
import NavBar from './modules/views/Navbar';
import login from '../api/user/login.api';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function SignIn() {
  const navigate = useNavigate();
  const [sent, setSent] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Este campo es requerido';
    }

    if (!values.password) {
      errors.password = 'Este campo es requerido';
    }

    return errors;
  };

  const handleSubmit = async (values) => {
    if (!values.email) {
      setEmailError('Este campo es requerido');
    }

    if (!values.password) {
      setPasswordError('Este campo es requerido');
    }

    if (!values.email || !values.password) {
      return;
    }

    let response = await login(values.email, values.password);

    if (response.token != null) {
      sessionStorage.setItem("access-token", response.token)
      navigate("/MisContactos");
      setSent(true);
    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'Alguno de los datos ingresados es incorrecto',
        icon: 'error',
        confirmButtonText: 'Perfecto',
        confirmButtonColor: '#ff3366'
      })
    }

  };

  return (
    <React.Fragment>
      <NavBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            Iniciar sesión
          </Typography>
          <Typography variant="body2" align="center" sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}>
            {'Esto solo es necesario para el dueño de la página!! '}
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Field
                autoComplete="email"
                autoFocus
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
                value={email}
                onSubmit={e => setEmail(e.target.value)}
                helperText={emailError}
              />
              <Field
                fullWidth
                size="large"
                component={RFTextField}
                disabled={submitting || sent}
                required
                name="password"
                autoComplete="current-password"
                label="Contraseña"
                type="password"
                margin="normal"
                value={password}
                onSubmit={e => setPassword(e.target.value)}
                helperText={passwordError}
              />
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'Espera un momento...' : 'Iniciar Sesión'}
              </FormButton>
            </Box>
          )}
        </Form>
        <Typography align="center" sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}>
          <Link underline="always" href="/ForgotPassword">
            ¿Olvidaste la contraseña?
          </Link>
        </Typography>
      </AppForm>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(SignIn);
