import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import './ListaProduto.css'
import Produto from "../../../models/Produto";
import useLocalStorage from "react-use-localstorage";
import { buscar } from "../../../service/Service";

function ListaProduto() {

    const [posts, setPosts] = useState<Produto[]>([])

    const [token, setToken] = useLocalStorage('token');

    let navigate = useNavigate();

    useEffect(() => {
        if (token == "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    async function getPost() {
        await buscar("/produtos", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <>
            {
                posts.map(post => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {post.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {post.categoria?.nome}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`/formularioProduto/${post.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${post.id}`} className="text-decorator-none">
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

export default ListaProduto;