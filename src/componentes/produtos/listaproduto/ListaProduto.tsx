import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box, Card, CardActions, CardContent, Button, Typography } from "@mui/material";
import Produto from "../../../models/Produto";
import useLocalStorage from "react-use-localstorage";
import { buscar } from "../../../service/Service";
import './ListaProduto.css'
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/token/tokenReducer";

function ListaProduto() {

    const [produtos, setProdutos] = useState<Produto[]>([])
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );
    

    async function getProdutos() {
        await buscar("/produto", setProdutos, {
            headers: {

            }
        })
    }

    useEffect(() => {
        getProdutos()
    }, [produtos.length])

    var buttonComponent;
    if (token != '') {

        buttonComponent = <Box className="box-button-cadastra">
            <Link to={`/formularioProduto`} className="text-decorator-none">

                <button className="icon-btn add-btn">
                    <div className="add-icon"></div>
                    <div className="btn-txt">Adicionar Produto</div>
                </button>

            </Link>
        </Box>
    }else{

    }

    return (
        <>

            {buttonComponent}
            
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