import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Grid, Box, Typography } from '@mui/material';
import './Footer.css';

function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='footer'>
                <Grid alignItems="center" item xs={12}>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >Copyright © Mercado Limpo 2022</Typography>
                        </Box>
                    </Box>

                </Grid>

                <Grid className='ani'>
                    <svg className="editorial"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28 "
                        preserveAspectRatio="none">
                        <defs>
                            <path id="gentle-wave"
                                d="M-160 44c30 0 
                                    58-18 88-18s
                                    58 18 88 18 
                                    58-18 88-18 
                                    58 18 88 18
                                    v44h-352z" />
                        </defs>
                        <g className="parallax1">
                            <use xlinkHref="#gentle-wave" x="50" y="3" fill="#00c9d2" />
                        </g>
                        <g className="parallax2">
                            <use xlinkHref="#gentle-wave" x="50" y="0" fill="#8df8f2" />
                        </g>
                        <g className="parallax3">
                            <use xlinkHref="#gentle-wave" x="50" y="9" fill="white" />
                        </g>
                        <g className="parallax4">
                            <use xlinkHref="#gentle-wave" x="50" y="6" fill="#309292" />
                        </g>
                    </svg>
                </Grid>
            </Grid>



        </>
    )
}

export default Footer;