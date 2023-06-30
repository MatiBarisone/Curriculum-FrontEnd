import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { Field, Form} from 'react-final-form';
import Typography from './modules/components/Typography';
import AppForm from './modules/views/AppForm';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import withRoot from './modules/withRoot';
import Footer from './modules/views/Footer';
import NavBar from './modules/views/Navbar';
import signup from '../api/user/signup.api';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function SignUp() {
  const navigate = useNavigate();
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  
  const [nameError, setNameError] = React.useState("");
  const [lastnameError, setLastnameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Este campo es requerido';
    }

    if (!values.lastname) {
      errors.lastname = 'Este campo es requerido';
    }
    
    if (!values.email) {
      errors.email = 'Este campo es requerido';
    }

    if (!values.password) {
      errors.password = 'Este campo es requerido';
    }
    return errors;
  };

  const handleSubmit = async (values) => {
    if (!values.name) {
      setNameError('Este campo es requerido');
    }

    if (!values.lastname) {
      setLastnameError('Este campo es requerido');
    }

    if (!values.email) {
      setEmailError('Este campo es requerido');
    }

    if (!values.password) {
      setPasswordError('Este campo es requerido');
    }

    if (!values.email || !values.password || !values.name || !values.lastname) {
      return;
    }

    let response = await signup(values.name, values.lastname, values.email, values.password);

    if (response.message !== "Error in createUser Service") {
      navigate("/SignIn");
      setSent(true);
    }
    else {
      Swal.fire({
        title: 'Error!',
        text: 'No se pudo realizar el registro',
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
            Registrate
          </Typography>
          <Typography variant="body2" align="center" sx={{fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}>
            {'Esto solo es necesario para el dueño de la página!! '}
          </Typography>
          <Typography variant="body2" align="center" sx={{fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}>
            <Link href="/SignIn" underline="always">
              ¿Ya tenés una cuenta?
            </Link>
          </Typography>
        </React.Fragment>
        <Form
          onSubmit={handleSubmit}
          subscription={{ submitting: true }}
          validate={validate}
        >
          {({ handleSubmit: handleSubmit2, submitting }) => (
            <Box component="form" onSubmit={handleSubmit2} noValidate sx={{ mt: 6 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoComplete="given-name"
                    autoFocus
                    component={RFTextField}
                    disabled={submitting || sent}
                    fullWidth
                    label="Nombre"
                    margin="normal"
                    name="name"
                    required
                    size="large"
                    value={name}
                    onSubmit={e => setName(e.target.value)}
                    helperText={nameError}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Field
                    autoComplete="family-name"
                    autoFocus
                    component={RFTextField}
                    disabled={submitting || sent}
                    fullWidth
                    label="Apellido"
                    margin="normal"
                    name="lastname"
                    required
                    size="large"
                    value={lastname}
                    onSubmit={e => setLastname(e.target.value)}
                    helperText={lastnameError}
                  />
                </Grid>
              </Grid>
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
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'Espera un momento...'  : 'Registrate'}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      <Footer />
    </React.Fragment>
  );
}

export default withRoot(SignUp);
