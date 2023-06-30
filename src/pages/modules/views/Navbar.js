import React, { useEffect, useState } from 'react';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import users from '../../../api/user/getusers.api';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

export default function NavBar() {
    const navigate = useNavigate();
    const accessToken = sessionStorage.getItem('access-token');
    const [userExists, setUserExists] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const userList = await users();             // Obtener la lista de usuarios desde la API
            setUserExists(userList.length > 0);         // Comprobar si hay usuarios existentes
            setIsLoading(false);                        // Actualizar el estado de carga a false una vez que se obtiene la respuesta
          } catch (error) {
            console.error('Error al obtener la lista de usuarios:', error);
            setIsLoading(false);                        // Manejo de errores: establecer isLoading en false para que no se quede en un estado de carga infinita
          }
        };
    
        fetchUsers();
      }, []);


    const handleLogout = () => {
        sessionStorage.removeItem('access-token');
        navigate("/");
    };

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand fw-bolder p-3" href="/">MATIAS BARISONE - CURRICULUM</a>
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 px-4">
                            <li class="nav-item lista-animada">
                                <Link
                                    color="inherit"
                                    variant="h6"
                                    underline="none"
                                    href="/Forms"
                                    sx={{ ...rightLink }}
                                >

                                    {'¿Cómo Contactarme?'}
                                </Link>
                            </li>
                            {accessToken && (
                                <li className="nav-item lista-animada">
                                    <Link
                                        color="inherit"
                                        variant="h6"
                                        underline="none"
                                        href="/MisContactos"
                                        sx={{ ...rightLink }}
                                    >
                                        {'Ver mis contactos'}
                                    </Link>
                                </li>
                            )}
                            <li class="nav-item lista-animada" style={{ display: accessToken ? 'none' : 'block' }}>
                                <Link
                                    color="inherit"
                                    variant="h6"
                                    underline="none"
                                    href="/SignIn"
                                    sx={{ ...rightLink, color: 'secondary.main' }}
                                >

                                    {'Iniciar Sesión'}
                                </Link>
                            </li>
                            {accessToken && (
                                <li class="nav-item lista-animada">
                                    <Link
                                        color="inherit"
                                        variant="h6"
                                        underline="none"
                                        onClick={handleLogout}
                                        sx={{ ...rightLink, color: 'secondary.main' }}
                                    >

                                        {'Salir de la Sesión'}
                                    </Link>
                                </li>
                            )}

                            
                            {!isLoading && !userExists && (
                            <li class="nav-item lista-animada">
                                <Link
                                    variant="h6"
                                    underline="none"
                                    href="/SignUp"
                                    sx={{ ...rightLink, color: 'secondary.main' }}
                                >
                                    {'Registrarse'}
                                </Link>
                            </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>



    );
}

