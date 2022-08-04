import React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" className='nav-main'>
                    <Box className="cursor">
                        <Typography variant="h4" color="inherit">
                            mercado limpo
                        </Typography>
                    </Box>

                    <Box className="nav-link">
                        <Link to='/home' className="link">
                            <Box mx={1} className="pages">
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/sobre' className="link">
                            <Box mx={1} className="pages">
                                <Typography variant="h6" color="inherit">
                                    sobre nós
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/contato' className="link">
                            <Box mx={1} className="pages">
                                <Typography variant="h6" color="inherit">
                                    contato
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/' className="link">
                            <Box mx={1} className="pages">
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>            
            </Toolbar>
        </AppBar>
        </>
    );
}

export default Navbar;