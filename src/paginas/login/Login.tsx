import React,  { ChangeEvent, useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';

import UsuarioLogin from '../../models/UsuarioLogin';
import './Login.css';



function Login() {
    
    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: ""

        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUsuarioLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token != ""){
            navigate('/home')
        }
    },[token])

    
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
             await login(`/usuario/login`, usuarioLogin,setToken)
            

            alert("Usuario logado com sucesso!")
        } catch (error) {
            alert("Dados do usuario inconsistentes. Erro ao logar!")
            
        }

    }

    




    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto-login'>Entrar</Typography>
                        <TextField  value={usuarioLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}  id='usuario' label='usuário' name='usuario' margin='normal' fullWidth className='imput'/>
                        <TextField id='senha' label='senha' name='senha' margin='normal' type='password' fullWidth className='imput'/>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='decoracao-link'>
                                <Button type='submit' variant='contained' color='success'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className='texto-login'>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'></Grid>
        </Grid>
    );
}

export default Login;

function setUsuarioLogin(arg0: any) {
    throw new Error('Function not implemented.');
}
