import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Typography from '../components/Typography';
import Link from '@mui/material/Link';

export default function Footer() {
    return (


        <div className='bg-div-pink'>
            <div className='container'>
                <div className='row justify-content-center text-center p-5'>
                    <div className='col-md-3 col-sm-12 col-xs-12 py-4 bg-div-white'>
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
                    <div className='col-md-2 col-sm-12 col-xs-12 py-4 bg-div-white'>
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
                    <div className='col-md-2 col-sm-12 col-xs-12 py-4 bg-div-white'>
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
                    <div className='col-md-2 col-sm-12 col-xs-12 py-4 bg-div-white'>
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
                    <div className='col-md-3 col-sm-12 col-xs-12 py-4 bg-div-white'>
                        <List>
                            <ListItem disablePadding >
                                <ListItemButton component="a" href="/Forms">
                                    <ListItemText className="text-center">
                                        <Typography
                                            color="inherit"
                                            variant="h6"
                                            sx={{ fontFamily: 'Roboto Condensed'}}
                                        >
                                            ¿Cómo contactarme?
                                        </Typography>
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </div>
                </div>
            </div>
        </div>


    );
}