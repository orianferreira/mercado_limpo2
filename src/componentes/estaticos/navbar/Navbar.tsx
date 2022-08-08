import React from "react";
import { AppBar, Box, TextField, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Grid } from "@material-ui/core";

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar className='nav-main' >
                  
                        <Grid xs={4}>
                            <Box className="nome-marca">
                                <img src="https://i.imgur.com/LSGPpin.png" height="56px" />
                                <Typography variant="h6" color="inherit">
                                    mercado limpo
                                </Typography>
                            </Box>
                        </Grid>
                        

                        
                        <Grid xs={5} className="container">
                            <Box className="nav-link">

                                <Link to='/home' className="link">
                                    
                                        <Typography variant="h6" color="inherit" className="typography">
                                            home
                                        </Typography>
                                    
                                </Link>

                                <Link to='/sobre' className="link">
                                    
                                        <Typography  color="inherit" className="typography">
                                            sobre nós
                                        </Typography>
                                    
                                </Link>

                                <Link to='/contato' className="link">
                                    
                                        <Typography  color="inherit" className="typography">
                                            contato
                                        </Typography>
                                    
                                </Link>

                                <Link to='/' className="link">
                                    
                                        <Typography color="inherit" className="typography">
                                            logout
                                        </Typography>
                                    
                                </Link>
                            </Box>
                        </Grid>
                  
                        
                    
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;