import * as React from 'react';
import Footer from './modules/views/Footer';
import Navbar from './modules/views/Navbar';
import withRoot from './modules/withRoot';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from './modules/components/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import getContactos from '../api/contacts/getContacts.api';
import deleteContactos from '../api/contacts/deleteContacts.api';

function Contacts() {
  const [contactos, setContactos] = React.useState([]);
  const [contactosVersion, setContactosVersion] = React.useState(0);
  const accessToken = sessionStorage.getItem('access-token');

  const handleDeleteContacto = async (id) => {
    try {
      await deleteContactos(accessToken, id);
      setContactosVersion((prevVersion) => prevVersion + 1);

    } catch (error) {
      console.error('Error al eliminar el contacto:', error);
    }
  };

  React.useEffect(() => {
    getContactos(accessToken, setContactos);
  }, [setContactos, accessToken, contactosVersion]);

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
                    Información de Contactos
                  </Typography>
                  <Typography variant="body2" align="center" sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}>
                    {'En la siguiente tabla se muestran las personas que han llenado el formulario y se encuentran interesados.'}
                  </Typography>
                </div>
                <div className="d-flex justify-content-center">
                  <table class="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Dirección</th>
                        <th scope="col">Teléfono</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {contactos.map((contacto, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{contacto.name}</td>
                            <td>{contacto.lastname}</td>
                            <td>{contacto.email}</td>
                            <td>{contacto.phone}</td>
                            <td>
                              <DeleteIcon
                                onClick={() => handleDeleteContacto(contacto._id)}
                                className="btn-delete"
                                style={{ cursor: 'pointer' }}
                              />
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
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

export default withRoot(Contacts);
