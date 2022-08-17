import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import { findByDisplayValue } from '@testing-library/react';
import React, { useState, useEffect, ChangeEvent } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Categoria from '../../../models/Categoria';
import { buscarId, post, put } from '../../../service/Service';
import { TokenState } from '../../../store/token/tokenReducer';
import '../cadastrocategoria/CadastroCategoria.css';
import {toast} from 'react-toastify';


function CadastroCategoria() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        tipo: ''

    })

    useEffect(() => {
        if (token == "") {
            toast.info('Você precisa estar logado', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
            navigate('/login')
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscarId(`/categoria/${id}`, setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("categoria " + JSON.stringify(categoria))

        if (id !== undefined) {
            console.log(categoria)
            put(`/categoria`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria atualizada com sucesso', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
        } else {
            post(`/categoria`, categoria, setCategoria, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Categoria cadastrada com sucesso', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined
            });
        }
        back()

    }

    function back() {
        navigate('/categoria')
    }

    return (

        <Grid xs={12}  className="form-categoria">
        <Grid  xs={8} className="form-grid-categoria">
            
            <form onSubmit={onSubmit} >
                <Box className='form-text-categoria'>
                    <Box className='text-cadastra-categoria'> 
                        <h1 >Cadastrar Categoria</h1>
                    </Box>                  
                    <Box className='input-textfield-categoria'>
                        <TextField  value={categoria.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="nome" label="categoria" variant="outlined" name="nome"  fullWidth />
                    </Box>
                    <Box className="">
                                                  
                        <Box className='input-textfield-categoria'>
                            <TextField value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="tipo" label="tipo" variant="outlined" name="tipo" margin="normal" fullWidth />
                        </Box>
                        <Box className="button-categoria">
                            <Button type="submit" variant="contained" color="primary">
                                Finalizar
                            </Button>
                        </Box>
                           
                    </Box>                  
                </Box>                 
            </form>         
        </Grid>
    </Grid>
    );

}

export default CadastroCategoria;













