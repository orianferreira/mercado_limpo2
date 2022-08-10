import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import Produto from "../../../models/Produto";
import useLocalStorage from "react-use-localstorage";
import { buscar } from "../../../service/Service";
import './ListaProduto.css'

function ListaProduto() {

    const [produtos, setProdutos] = useState<Produto[]>([])

    const [token, setToken] = useLocalStorage('token');

    let navigate = useNavigate();

    useEffect(() => {
        if (token === "") {
            alert("Você precisa estar logado")
            navigate("/login")
        }
    }, [token])

    async function getProdutos() {
        await buscar("/produto", setProdutos, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getProdutos()

    }, [produtos.length])

    return (
        <>
            {
                produtos.map(produtos => (
                    <Box m={2} >
                        <Card variant="outlined">
                            <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produtos.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos.preco}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos.estoque}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos.categoria?.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos.categoria?.tipo}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Box display="flex" justifyContent="center" mb={1.5}>
                                    <Link to={`/formularioProduto/${produtos.id}`} className="text-decorator-none" >
                                        <Box mx={1}>
                                            <Button variant="contained" className="marginLeft" size='small' color="primary" >
                                                Atualizar
                                            </Button>
                                        </Box>
                                    </Link>
                                    <Link to={`/deletarProduto/${produtos.id}`} className="text-decorator-none">
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