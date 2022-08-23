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
      <Grid container direction="row" alignItems="center" className='caixa' >

        <Grid >
          <Box>
            <Carousel />
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
            <Box className='container-categorias'>
            <h3>Categoria</h3>
              <div className='card-categoria'>
                
                <div className='card-categria-solar'>
                  <img className="img-categoria" src="https://i.imgur.com/P8vk6kO.png" />
                  <h6  >Solar </h6>
                </div>
                <div className='card-categria-solar'>
                  <img className="img-categoria" src="https://i.imgur.com/0vYhvZn.png" />
                  <h6 >eólica </h6>
                  </div>
                <div className='card-categria-solar'>
                  <img className="img-categoria" src="https://i.imgur.com/avfI2Dp.png" />
                  <h6 >oceânica </h6>
                  </div>
                <div className='card-categria-solar'>
                  <img className="img-categoria" src="https://i.imgur.com/dnBGAEH.png" />
                  <h6 >hídrica </h6>
                  </div>
               
              </div>

              
            </Box>
            <Box className='container-categorias'>
            <h3 >Tipo</h3>
              <div className='card-categoria'>
                <div className='card-categria-solar'>
                  <img className="img-categoria" src="https://i.imgur.com/RO20au2.png" />
                  <h6  >Pessoal </h6>
                </div>
                <div className='card-categria-solar'>
                  <img className="img-categoria" src="https://i.imgur.com/Jy2CXjC.png" />
                  <h6 >Residencial </h6>
                  </div>
                <div className='card-categria-solar'>
                  <img className="img-categoria" src="https://i.imgur.com/VirfCBA.png" />
                  <h6 >Empresarial </h6>
                  </div>
                <div className='card-categria-solar'>
                  <img className="img-categoria" src="https://i.imgur.com/iuFlwfT.png" />
                  <h6 >Industrial </h6>
                  </div>
                <div className='titulo-categoria'>
                  
                   
                </div>
              </div>
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