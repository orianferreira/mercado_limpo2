import React from "react";
import { Grid, Box, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import './CadastroUsuario.css';

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6}>
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto-cadastro'>Cadastrar</Typography>
                        <TextField id='nome' label='nome' name='nome' margin='normal' fullWidth />
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarsenha' label='confirmar senha' variant='outlined' name='confirmarsenha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/login' className='decoracao-link'>
                                <Button variant='contained' color='primary' className='btn-cancelar' >
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained' color='success'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>
    );
}

export default CadastroUsuario;