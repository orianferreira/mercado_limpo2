import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@mui/material"

import Postagem from '../../../models/Categoria';
import { buscarId, deleteId } from '../../../service/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokenReducer';
import Produto from '../../../models/Produto';

function ComprarProduto() {
    let history = useNavigate();
    const { id } = useParams<{id: string}>();
    const token= useSelector<TokenState,TokenState["tokens"]>(
      (state) => state.tokens
    );
    const [produtos, setProdutos] = useState<Produto>()
  
    
  
    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])
  
    async function findById(id: string) {
        buscarId(`/produto/${id}`, setProdutos, {
            headers: {
              'Authorization': token
            }
          })
        }
  
       
        
          function nao() {
            history('/produtos')
          }
  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Produto:
              </Typography>
              <Typography color="textSecondary" >
              <CardContent>
                                <Typography color="textSecondary" gutterBottom>
                                    Produtos
                                </Typography>
                                <Typography variant="h5" component="h2">
                                    {produtos?.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos?.descricao}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos?.preco}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos?.estoque}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos?.categoria?.nome}
                                </Typography>
                                <Typography variant="body2" component="p">
                                    {produtos?.categoria?.tipo}
                                </Typography>
                            </CardContent>
              
              </Typography>
            </Box>
  
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              
              <Box>
              <Button  onClick={nao} variant="contained" size='large' color="secondary">
                cancelar
              </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
  }
  export default ComprarProduto;

