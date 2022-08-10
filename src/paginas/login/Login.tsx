import React, { ChangeEvent, useState, useEffect } from 'react';
import { Grid, Box, Typography, TextField, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { login } from '../../service/Service';
import UsuarioLogin from '../../models/UsuarioLogin';
import './Login.css';
import { useDispatch } from 'react-redux';
import { addToken } from '../../store/token/actions';


function Login() {

    let navigate = useNavigate();  
    const dispatch = useDispatch();
    const [token, setToken] = useState('');

    const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
        {
            nome: "",
            email: "",
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

    useEffect(() => {
        if(token != '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            await login(`/usuario/login`, usuarioLogin, setToken)
            alert("Usuario logado com sucesso!")
            
        } catch (error) {
            alert("Dados do usuario inconsistentes. Erro ao logar!")

        }

    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit} >
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='texto-login'>Entrar</Typography>

                        <TextField value={usuarioLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='email' name='email' margin='normal' fullWidth className='imput' />
                        <TextField value={usuarioLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' name='senha' margin='normal' type='password' fullWidth className='imput' />

                        <Box marginTop={2} textAlign='center'>

                            <Button type='submit' variant='contained' color='success'>
                                Logar
                            </Button>

                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='texto-login'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'></Grid>
        </Grid>
    );
}

export default Login;


