import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import Produto from "../../../models/Produto";
import useLocalStorage from "react-use-localstorage";
import { buscar } from "../../../service/Service";
import './ListaProduto.css'

function ListaProduto() {

    const [produtos, setProdutos] = useState<Produto[]>([])

    let navigate = useNavigate();

    async function getProdutos() {
        await buscar("/produto", setProdutos, {
            headers: {

            }
        })
    }

    useEffect(() => {
        getProdutos()
    }, [produtos.length])

    return (
        <>

            <Box className="box-button-cadastra">
                <Link to={`/formularioProduto`} className="text-decorator-none">

                    <button className="icon-btn add-btn">
                        <div className="add-icon"></div>
                        <div className="btn-txt">Add</div>
                    </button>

                </Link>
            </Box>
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