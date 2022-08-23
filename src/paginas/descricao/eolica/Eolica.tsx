import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import './Eolica.css';


function Eolica() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='page-login' >
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>

                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto-login'>Energia Eólica</Typography>
                    <Typography variant='h6' gutterBottom color='textSecondary' component='h6' align='center' className='texto-login'>Energia eólica é a transformação da energia do vento em energia útil, tal como na utilização de aerogeradores para produzir eletricidade, moinhos de vento para produzir energia mecânica ou velas para impulsionar veleiros.</Typography>

                    <Box display='flex' justifyContent='center' marginTop={2}>

                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Quer saber mais?</Typography>
                        </Box>

                        <Typography variant='subtitle1' gutterBottom align='center' className='texto-login'><a href="https://pt.wikipedia.org/wiki/Energia_eólica">clique aqui</a></Typography>

                    </Box>
                </Box>
            </Grid>

            <Grid xs={6} className='imagemEolica'></Grid>

        </Grid>
    );
}

export default Eolica;


