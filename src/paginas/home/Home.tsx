import React from 'react';
import { Typography, Grid, Button } from '@material-ui/core';
import { Box } from '@mui/material';
import './Home.css';
import TabProduto from '../../componentes/produtos/tabproduto/TabProduto';

function Home() {
  return (
    <>   
      <Grid  container direction="row" alignItems="center" className='caixa' >
        
        <Grid >
          <Box>
          <img src="https://i.imgur.com/xJ5vuZ8.jpg" alt="" className='imghome' />
          </Box>
        </Grid>

        <Grid alignItems="center" item xs={12} >
          <Box>
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

            <Box className='botao-main'>
            <Button variant="contained" className='button'>
              <a>Produtos</a>
            </Button>
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