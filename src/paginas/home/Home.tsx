import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';

function Home() {
    return (
        <>
            <Grid
          container
          direction="row"
          alignItems="center"
          className='home-main'
        >
          <Grid alignItems="center" item xs={6}>
            <Box paddingX={20}>
              <Typography
                variant="h3"
                align='center'
                className="title"
              >
                Seja bem vindo(a)!
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                color="textPrimary"
                component="h5"
                align="center"
                className='message'
              >
               Somos o Mercado Limpo e estamos aqui para oferecer equipamentos para energia limpa!
              </Typography>
            </Box>
            <Box className='button-main'>
              <Box marginRight={1}></Box>
              <Button variant="outlined" className='button'>
                <a>
                  Feed
                </a>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={6}
            container
            direction="row"
            justifyContent="center"
            alignItems="center">
            <img
              src="https://backend.intelbras.com/sites/default/files/2021-05/estrutura-de-fixacao-para-sistema-fotovoltaico-estruturas-para-solo.jpg"
              alt=""
              width="600px"
              height="400px"
            />
          </Grid>
          <Grid xs={12} className='postagens'>
            
          </Grid>
        </Grid>
        </>
    );
}

export default Home;