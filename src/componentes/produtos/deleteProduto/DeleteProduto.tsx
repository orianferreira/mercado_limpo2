import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@mui/material"
import './DeleteProduto.css';
import Postagem from '../../../models/Categoria';
import { buscarId, deleteId } from '../../../service/Service';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokenReducer';

function DeleteProduto() {
  let history = useNavigate();
  const { id } = useParams<{id: string}>();
  const token= useSelector<TokenState,TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [produtos, setProdutos] = useState<Produto>()

  useEffect(() => {
      if (token == "") {
          alert("Você precisa estar logado")
          history("/login")
  
      }
  }, [token])

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

      function sim() {
        history('/produtos')
          deleteId(`/produto/${id}`, {
            headers: {
              'Authorization': token
            }
          });
          alert('Produto deletado com sucesso');
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
            {produtos?.titulo}
            </Typography>
          </Box>

        </CardContent>
        <CardActions>
          <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
            <Box mx={2}>
            <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
              Sim
            </Button>
            </Box>
            <Box>
            <Button  onClick={nao} variant="contained" size='large' color="secondary">
              Não
            </Button>
            </Box>
          </Box>
        </CardActions>
      </Card>
    </Box>
  </>
);
}
export default DeleteProduto;