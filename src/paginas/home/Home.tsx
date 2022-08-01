import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';

function Home() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo' style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo' style={{ color: "white", fontWeight: "bold" }}>Somos o Mercado Limpo e estamos aqui para oferecer equipamentos para energia solar!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" className='botao'>Veja nossos produtos</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://backend.intelbras.com/sites/default/files/2021-05/estrutura-de-fixacao-para-sistema-fotovoltaico-estruturas-para-solo.jpg" alt="" width="650px" height="510px" />
                </Grid>
                <Grid xs={12} className='postagens'>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;