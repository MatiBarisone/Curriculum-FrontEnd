import * as React from 'react';
import Typography from '../components/Typography';
import HeroDesign from './HeroDesign';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '../components/Button';
import ProfilePicture from '../img/ProfilePicture.jpg';

const backgroundImage =
  'https://thumbs.gfycat.com/BigFocusedCassowary-max-1mb.gif';

export default function Hero() {
  return (
    <HeroDesign
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <div className='p-4'></div>
      <div className='d-flex p-4 mt-5 justify-content-center'>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Matias Barisone"
            src={ProfilePicture}
            sx={{ width: 250, height: 250 }}
          />
        </Stack>
      </div>
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Matias Barisone
      </Typography>
      <div className='p-3'>
        <Button
          color="secondary"
          variant="contained"
          size="medium"
          component="a"
          href="/Forms"
          sx={{ minWidth: 200 }}
        >
          ¿Cómo contactarme?
        </Button>
      </div>

    </HeroDesign>
  );
}
