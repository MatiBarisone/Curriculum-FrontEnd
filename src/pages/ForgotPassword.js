import * as React from 'react';
import { Field, Form, FormSpy } from 'react-final-form';
import Box from '@mui/material/Box';
import Typography from './modules/components/Typography';
import AppForm from './modules/views/AppForm';
import { email, required } from './modules/form/validation';
import RFTextField from './modules/form/RFTextField';
import FormButton from './modules/form/FormButton';
import FormFeedback from './modules/form/FormFeedback';
import withRoot from './modules/withRoot';
import NavBar from './modules/views/Navbar';
import Footer from './modules/views/Footer';

function ForgotPassword() {
  const [sent, setSent] = React.useState(false);

  const validate = (values) => {
    const errors = required(['email'], values);

    if (!errors.email) {
      const emailError = email(values.email);
      if (emailError) {
        errors.email = emailError;
      }
    }

    return errors;
  };

  const handleSubmit = () => {
    setSent(false);
  };

  return (
    <React.Fragment>
      <NavBar />
      <AppForm>
        <React.Fragment>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            ¿Te olvidaste tu contraseña?
          </Typography>
          <Typography variant="body2" align="center" sx={{fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}>
            {"No hay problema!! Escribe tu Email debajo."}
          </Typography>
          <Typography variant="body2" align="center" sx={{fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}>
            {"Te llegará un Link para Resetear tu contaseña."}
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
                autoFocus
                autoComplete="email"
                component={RFTextField}
                disabled={submitting || sent}
                fullWidth
                label="Email"
                margin="normal"
                name="email"
                required
                size="large"
              />
              <FormSpy subscription={{ submitError: true }}>
                {({ submitError }) =>
                  submitError ? (
                    <FormFeedback error sx={{ mt: 2 }}>
                      {submitError}
                    </FormFeedback>
                  ) : null
                }
              </FormSpy>
              <FormButton
                sx={{ mt: 3, mb: 2 }}
                disabled={submitting || sent}
                size="large"
                color="secondary"
                fullWidth
              >
                {submitting || sent ? 'Espera un momento...'  : 'Mandar Link'}
              </FormButton>
            </Box>
          )}
        </Form>
      </AppForm>
      <Footer/>
    </React.Fragment>
  );
}

export default withRoot(ForgotPassword);
