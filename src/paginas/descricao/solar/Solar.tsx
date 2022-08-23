import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import './Solar.css';


function Solar() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='page-login' >
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>

                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto-login'>Energia Solar</Typography>
                    <Typography variant='h6' gutterBottom color='textSecondary' component='h6' align='center' className='texto-login'>Energia solar é um termo que se refere à energia proveniente da luz e do calor do Sol. É utilizada por meio de diferentes tecnologias em constante evolução, como o aquecimento solar, a energia solar fotovoltaica, a energia heliotérmica, a arquitetura solar e a fotossíntese artificial.</Typography>

                    <Box display='flex' justifyContent='center' marginTop={2}>

                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Quer saber mais?</Typography>
                        </Box>

                        <Typography variant='subtitle1' gutterBottom align='center' className='texto-login'><a href="https://pt.wikipedia.org/wiki/Energia_solar">clique aqui</a></Typography>

                    </Box>
                </Box>
            </Grid>

            <Grid xs={6} className='imagemSolar'></Grid>

        </Grid>
    );
}

export default Solar;


