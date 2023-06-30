import * as React from 'react';
import Footer from './modules/views/Footer';
import Hero from './modules/views/Hero';
import Navbar from './modules/views/Navbar';
import withRoot from './modules/withRoot';
import Typography from '../pages/modules/components/Typography';
import Link from '@mui/material/Link';


function Index() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />

      {/* ========= DATOS PERSONALES ========= */}
      <div className='bg-div-pink'>
        <div className='container'>
          <div className='row justify-content-center  text-center'>
            <div className='col-md-3 col-sm-12 col-xs-12 py-4'>
              <Typography
                color="inherit"
                variant="h6"
              >
                Email:
              </Typography>
              <Typography
                color="inherit"
                variant="body1"
                sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
              >
                matibarisone@gmail.com
              </Typography>
            </div>
            <div className='col-md-3 col-sm-12 col-xs-12 py-4'>
              <Typography
                color="inherit"
                variant="h6"
              >
                Teléfono:
              </Typography>
              <Typography
                color="inherit"
                variant="body1"
                sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
              >
                11 3385-5771
              </Typography>
            </div>
            <div className='col-md-3 col-sm-12 col-xs-12 py-4'>
              <Typography
                color="inherit"
                variant="h6"
              >
                LinkedIn:
              </Typography>
              <Link href="https://www.linkedin.com/in/matias-barisone-58b53211a/" variant="body1" underline="always" sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}>
                {'Matias Barisone'}
              </Link>
            </div>
            <div className='col-md-3 col-sm-12 col-xs-12 py-4'>
              <Typography
                color="inherit"
                variant="h6"
              >
                Localidad:
              </Typography>
              <Typography
                color="inherit"
                variant="body1"
                sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
              >
                CABA - Argentina
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='container'>
          <div className='row justify-content-center text-center p-3'>

            {/* ========= DESCRIPCIÓN ========= */}
            <div className='col-md-6 col-sm-12 col-xs-12 p-4 '>
              <Typography
                color="inherit"
                variant="h4"
                sx={{ mb: 2 }}
              >
                Acerca de:
              </Typography>
              <Typography
                color="inherit"
                variant="body1"
                sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
              >
                Hola! Mi nombre es Matias Barisone, actualmente estoy cursando mi último año en la carrera de "Licenciatura en Gestión de Tecnología de la Información" en la UADE.
              </Typography>
              <Typography
                color="inherit"
                variant="body1"
                sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
              >
                Actualmente no tengo un puesto de trabajo, pero en el pasado he ayudado a una compañía por aproximadamente 1 año, en todo lo que tiene que ver con
                la Baja, Alta y Modificación de diversos productos que tenían en su página web, tanto en precios como en productos nuevos.
              </Typography>
            </div>

            {/* ========= FORTALEZAS ========= */}
            <div className='col-md-6 col-sm-12 col-xs-12 p-4 '>
              <Typography
                color="inherit"
                variant="h4"
                sx={{ mb: 2 }}
              >
                Fortalezas:
              </Typography>
              <Typography
                color="inherit"
                variant="body1"
                sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
              >
                Me considero una persona que se desenvuelve bien trabajando en equipo. Me gusta tener todo ordenado y organizado para poder llegar con tiempo a las fechas de entrega.
              </Typography>
              <Typography
                color="inherit"
                variant="body1"
                sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
              >
                Cuando no entiendo algo trato de buscar la mejor forma para resolverlo, ya sea preguntando o buscando por mi cuenta.
              </Typography>
            </div>

            {/* ========= IDIOMAS ========= */}
            <div className='col-md-6 col-sm-12 col-xs-12 p-4 '>
              <Typography
                color="inherit"
                variant="h4"
                sx={{ mb: 2 }}
              >
                Idiomas:
              </Typography>
              <Typography
                color="inherit"
                variant="body1"
                sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
              >
                <ul className="list-group">
                  <li className="list-group-item">Español: Nativo</li>
                  <li className="list-group-item">Inglés: B2 First - Score 174</li>
                  <li className="list-group-item">Japonés: Básico/Limitado</li>
                </ul>
              </Typography>
            </div>

          </div>
        </div>
      </div>


      {/* ========= CERTIFICADOS ========= */}
      <div className='bg-div-pink'>
        <div className='container'>
          <div className='row justify-content-center text-center p-3'>
            <Typography
              color="inherit"
              variant="h4"
              sx={{ m: 2 }}
            >
              Certificados:
            </Typography>
            <Typography
              color="inherit"
              variant="body1"
              sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
            >
              ¡Para ver los certificados, haga click en la imagen!
            </Typography>
            <div className='col-md-8 col-sm-12 col-xs-12 p-4'>

              <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <a href="https://www.coderhouse.com/certificados/6410c0b2ae277a000263e288">
                      <img src={require('./modules/img/Certificacion01.jpg')} className="d-block w-100" alt="..."></img>
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="https://www.coderhouse.com/certificados/62f2b35f00e0e90019e39c48">
                      <img src={require('./modules/img/Certificacion02.jpg')} className="d-block w-100" alt="..."></img>
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="https://drive.google.com/file/d/12KSGff5wa4YokREoAOlpMBd2cZ-ANu6N/view">
                      <img src={require('./modules/img/Certificacion03.jpg')} className="d-block w-100" alt="..."></img>
                    </a>
                  </div>
                  <div className="carousel-item">
                    <a href="https://drive.google.com/file/d/1sFSyU5SGqZn40ycGaHRZ8_tgBTrqzGA3/view">
                      <img src={require('./modules/img/Certificacion04.jpg')} className="d-block w-100" alt="..."></img>
                    </a>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ========= FORMACIÓN ========= */}
      <div className='container'>
        <div className='row justify-content-center text-center p-3'>
          <Typography
            color="inherit"
            variant="h4"
            sx={{ m: 2 }}
          >
            Formación:
          </Typography>
          <div className='col-md-4 col-sm-12 col-xs-12 pb-4'>
            <Typography
              color="inherit"
              variant="h6"
            >
              Primaria:
            </Typography>
            <Typography
              color="inherit"
              variant="body1"
              sx={{ textAlign: 'left', fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
            >
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className='fw-bold'>Titulo: </div>
                  <div>Titulo Primario</div>
                </li>
                <li className="list-group-item">
                  <div className='fw-bold'>Institución:</div>
                  <div>Instituto Nuestra Señora del Perpetuo Socorro</div>
                </li>
                <li className="list-group-item">
                  <div className='fw-bold'>Año de Egreso:</div>
                  <div>2013</div>
                </li>
              </ul>
            </Typography>
          </div>
          <div className='col-md-4 col-sm-12 col-xs-12 pb-4'>
            <Typography
              color="inherit"
              variant="h6"
            >
              Secundaria:
            </Typography>
            <Typography
              color="inherit"
              variant="body1"
              sx={{ textAlign: 'left', fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
            >
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className='fw-bold'>Titulo:</div>
                  <div>"Bachiller con orientación en comuniación y diseño"</div>
                </li>
                <li className="list-group-item">
                  <div className='fw-bold'>Institución:</div>
                  <div>Sacratísimo Corazón de Jesús.</div>
                </li>
                <li className="list-group-item">
                  <div className='fw-bold'>Año de Egreso:</div>
                  <div>2018</div>
                </li>
              </ul>
            </Typography>
          </div>
          <div className='col-md-4 col-sm-12 col-xs-12 pb-4'>
            <Typography
              color="inherit"
              variant="h6"
            >
              Universitaria:
            </Typography>
            <Typography
              color="inherit"
              variant="body1"
              sx={{ textAlign: 'left', fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
            >
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className='fw-bold'>Titulo: </div>
                  <div>"Licenciatura en Gestión de Tecnología de la Información"</div>
                </li>
                <li className="list-group-item">
                  <div className='fw-bold'>Institución:</div>
                  <div>Universidad Argentina de la Empresa</div>
                </li>
                <li className="list-group-item">
                  <div className='fw-bold'>Año de Egreso:</div>
                  <div> Actualmente Cursando (80%) </div>
                </li>
              </ul>
            </Typography>
          </div>
        </div>
      </div>

      {/* ========= APTITUDES ========= */}
      <div className='bg-div-pink'>
        <div className='container'>
          <div className='row justify-content-center align-items-center text-center p-3'>
            <Typography
              color="inherit"
              variant="h4"
              sx={{ m: 2 }}
            >
              Aptitudes:
            </Typography>
            <div className='col-md-6 col-sm-12 col-xs-12 pb-4'>
              <Typography
                color="inherit"
                variant="h6"
              >
                Soft Skills:
              </Typography>
              <Typography
                color="inherit"
                variant="body1"
                sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
              >
                <ul className="list-group">
                  <li className="list-group-item">Proactividad</li>
                  <li className="list-group-item">Trabajo en equipo</li>
                  <li className="list-group-item">Responsabilidad</li>
                  <li className="list-group-item">Resolución de problemas</li>
                  <li className="list-group-item">Derterminación</li>
                </ul>
              </Typography>
            </div>
            <div className='col-md-6 col-sm-12 col-xs-12 pb-4'>
              <Typography
                color="inherit"
                variant="h6"
              >
                Hard Skills:
              </Typography>
              <Typography
                color="inherit"
                variant="body1"
                sx={{ fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
              >
                <ul className="list-group">
                  <li className="list-group-item">Git - 2 años</li>
                  <li className="list-group-item">HTML + CSS - 2 años</li>
                  <li className="list-group-item">Python - 2 años</li>
                  <li className="list-group-item">JavaScript - 1 año</li>
                  <li className="list-group-item">MySQL - 1 año</li>
                  <li className="list-group-item">MongoDB - 1 año</li>
                </ul>
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* ========= EXPERIENCIA PROFESIONAL ========= */}
      <div className='container'>
        <div className='row justify-content-center text-center p-3'>
          <Typography
            color="inherit"
            variant="h4"
            sx={{ m: 2 }}
          >
            Experiencia Profesional:
          </Typography>
          <div className='col-md-6 col-sm-12 col-xs-12 p-3 justify-content-center bg-div-pink'>
            <Typography
              color="inherit"
              variant="h6"
            >
              Gestión de página Web
            </Typography>
            <Typography
              color="inherit"
              variant="body1"
              sx={{ textAlign: 'left', fontFamily: 'Roboto Condensed', fontSize: 'h6.fontSize' }}
            >
              <ul className="list-group list-group-flush ">
                <li className="list-group-item bg-div-pink">
                  <div className='fw-bold'>Periodo: </div>
                  <div>Marzo 2021 - Marzo 2022</div>
                </li>
                <li className="list-group-item bg-div-pink">
                  <div className='fw-bold'>Empresa:</div>
                  <div>Bal-Ber Publicidad</div>
                </li>
                <li className="list-group-item bg-div-pink">
                  <div className='fw-bold'>Posición:</div>
                  <div> Operario Administrativo </div>
                </li>
                <li className="list-group-item bg-div-pink">
                  <div className='fw-bold'>Tareas Efectuadas:</div>
                  <div> La Alta, Baja y Modificación de los productos venidos. Administración. Gestión de precios. </div>
                </li>
              </ul>
            </Typography>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default withRoot(Index);
