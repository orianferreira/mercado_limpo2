import React, { useState, useEffect } from "react";
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TokenState } from '../../../store/token/tokenReducer';
import { buscarId, buscar } from '../../../service/Service';
import '../listacategoria/ListaCategoria.css';
import Categoria from '../../../models/Categoria'
import {toast} from 'react-toastify';

function ListaCategoria() {

    let navigate = useNavigate();

    const [categoria, setCategoria] = useState<Categoria[]>([])
    const { id } = useParams<{ id: string }>();

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token === "") {
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
            navigate("/login")
        }
    }, [token])

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function getCategoria() {
        await buscar('/categoria', setCategoria, {
            headers: {
                'Authorization': token
            }
        })
    }

    async function findById(id: string) {
        buscarId("/categoria/${id}", setCategoria, {
            headers: {
                "Authorization": token
            }
        })
    }

    useEffect(() => {
        getCategoria()
    }, [categoria.length])

    return (
        <>
            <Box className="box-button-cadastra">
                <Link to={`/formularioCategoria`} className="text-decorator-none">

                    <button className="icon-btn add-btn">
                        <div className="add-icon"></div>
                        <div className="btn-txt">Adicionar Categoria</div>
                    </button>

                </Link>
            </Box>

            {
                categoria.map(categoria => (

                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>

                                <Typography color="textSecondary" gutterBottom>
                                    Categoria
                                </Typography>

                                <Typography variant="h5" component="h2">
                                    {categoria.nome}
                                </Typography>

                                <Typography variant="h5" component="h2">
                                    {categoria.tipo}
                                </Typography>

                            </CardContent>

                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5} >

                                    <Link to={`/formularioCategoria/${categoria.id}`} className='text-decorator-none'>
                                        <Box mx={1}>
                                            <Button variant="contained" className="maginLeft" size='small' color="primary" >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>

                                    <Link to={`/deletarCategoria/${categoria.id}`} className="text-decorator-none">
                                        <Box mx={1}>
                                            <Button variant="contained" size='small' color="secondary">
                                                Deletar
                                            </Button>
                                        </Box>
                                    </Link>

                                </Box>
                            </CardActions>
                        </Card>
                    </Box>
                ))
            }
        </>
    );
}

export default ListaCategoria;