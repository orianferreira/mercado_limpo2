import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css';
import TabProduto from '../../componentes/produtos/tabproduto/TabProduto';
import Carousel from '../../componentes/carousel/carousel.js';


function Home() {
  return (
    <>   
      <Grid  container direction="row" alignItems="center" className='caixa' >
        
        <Grid >
          <Box>
          <Carousel/>
          </Box>
        </Grid>

        <Grid alignItems="center" item xs={12} >
          <Box >
            <Box className='b'>
            <Typography
              variant="h3"
              align='center'
              className="titulo"
            >
              mercado limpo
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className='mensagem'
            >
              Energia limpa a um click!
            </Typography>
            

           
            </Box>
          
            <Grid item xs={12} >
                  <TabProduto />
            </Grid>
          </Box>
          
          
        </Grid>
      </Grid>

      
    </>
  );
}

export default Home;