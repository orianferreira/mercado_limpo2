import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import './Oceanica.css';


function Oceanica() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='page-login' >
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>

                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto-login'>Energia Oceanica</Typography>
                    <Typography variant='h6' gutterBottom color='textSecondary' component='h6' align='center' className='texto-login'>A energia das ondas ou ondomotriz, provém do aproveitamento das ondas oceânicas. É uma energia "limpa", isto é, sem quaisquer custos para o ambiente e até a atualidade, não está disponível de forma comercial, apesar de ser estudada desde o ano de 1890.</Typography>

                    <Box display='flex' justifyContent='center' marginTop={2}>

                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Quer saber mais?</Typography>
                        </Box>

                        <Typography variant='subtitle1' gutterBottom align='center' className='texto-login'><a href="https://pt.wikipedia.org/wiki/Energia_das_ondas">clique aqui</a></Typography>

                    </Box>
                </Box>
            </Grid>

            <Grid xs={6} className='imagemOceanica'></Grid>

        </Grid>
    );
}

export default Oceanica;


