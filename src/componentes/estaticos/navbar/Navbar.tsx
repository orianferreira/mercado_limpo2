import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import React from "react";
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense" style={{ backgroundColor: "#FFF204" }}>
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            Mercado Limpo
                        </Typography>
                    </Box>
                    <Link to='/home' className="text-decorator-none">
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>
                            </Box>
                    </Link>
                    <Link to='/' className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                login
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/sobre' className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                sobre nós
                            </Typography>
                        </Box>
                    </Link>

                    <Link to='/contato' className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                contato
                            </Typography>
                        </Box>
                    </Link>
            </Toolbar>
        </AppBar>
        </>
    );
}

export default Navbar;