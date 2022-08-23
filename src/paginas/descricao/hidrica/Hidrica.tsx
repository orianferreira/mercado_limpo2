import React from 'react';
import { Grid, Box, Typography } from '@mui/material';
import './Hidrica.css';


function Hidrica() {

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='page-login' >
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>

                    <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto-login'>Energia Hídrica</Typography>
                    <Typography variant='h6' gutterBottom color='textSecondary' component='h6' align='center' className='texto-login'>A energia hidráulica ou energia hídrica é a energia obtida a partir da energia potencial de uma massa de água. A forma na qual ela se manifesta na natureza é nos fluxos de água, como rios e lagos e pode ser aproveitada por meio de um desnível ou queda d'água.</Typography>

                    <Box display='flex' justifyContent='center' marginTop={2}>

                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Quer saber mais?</Typography>
                        </Box>

                        <Typography variant='subtitle1' gutterBottom align='center' className='texto-login'><a href="https://pt.wikipedia.org/wiki/Energia_eólica">clique aqui</a></Typography>

                    </Box>
                </Box>
            </Grid>

            <Grid xs={6} className='imagemHidrica'></Grid>

        </Grid>
    );
}

export default Hidrica;


