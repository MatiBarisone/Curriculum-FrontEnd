import * as React from 'react';
import Footer from './modules/views/Footer';
import Navbar from './modules/views/Navbar';
import withRoot from './modules/withRoot';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from './modules/components/Typography';
import { Field, Form} from 'react-final-form';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';

import PostContact from '../api/contacts/newContact.api';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

function ContactForms() {
  const navigate = useNavigate();
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  const [nameError, setNameError] = React.useState("");
  const [lastnameError, setLastnameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");

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

    if (!values.phone) {
      errors.phone = 'Este campo es requerido';
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

    if (!values.phone) {
      setPhoneError('Este campo es requerido');
    }

    if (!values.email || !values.phone || !values.name || !values.phone) {
      return;
    }

    let response = await PostContact(values.name, values.lastname, values.email, values.phone);

    if (response.message !== "Unauthorized"){
      Swal.fire({
        title: 'Se han enviado los datos de forma correcta!!',
        icon: 'success',
        confirmButtonText: 'Perfecto',
        confirmButtonColor: '#ff3366'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      })
      
      //mandar mail (funcion o lo que sea)


      setSent(true);
    }
    else {
      setSent(false);
    }

  };

  return (
    <React.Fragment>
      <Navbar />
      <Box
        component="section"
        sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary' }}
      >
        <Container sx={{ mt: 5, mb: 15, display: 'flex', position: 'relative' }}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <div className="py-5">
                <div className="pb-4">
                  <Typography variant="h3" gutterBottom marked="center" align="center">
                    Envía tu información
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}>
                    {'Completa el siguiente formulario para poder contactarte conmigo:'}
                  </Typography>
                </div>

                {/* Forms para mandar información */}
                <div className="d-flex justify-content-center">
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
                          name="phone"
                          autoComplete="current-password"
                          label="Teléfono"
                          type="number"
                          margin="normal"
                          value={phone}
                          onSubmit={e => setPhone(e.target.value)}
                          helperText={phoneError}
                        />
                        <FormButton
                          sx={{ mt: 3, mb: 2 }}
                          disabled={submitting || sent}
                          color="secondary"
                          fullWidth
                        >
                          {submitting || sent ? 'Espera un momento...' : 'Enviar información'}
                        </FormButton>
                      </Box>
                    )}
                  </Form>
                </div>

              </div>
            </Grid>

          </Grid>
        </Container>
      </Box>
      <Footer />
    </React.Fragment >
  );
}

export default withRoot(ContactForms);
