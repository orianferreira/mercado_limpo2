import React, { useEffect, useState } from 'react'
import {Typography, Button, Box, Card, CardActions, CardContent } from "@mui/material"
import './DeleteProduto.css';
import Postagem from '../../../models/Categoria';
import { buscarId, deleteId } from '../../../service/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokenReducer';
import Produto from '../../../models/Produto';
import {toast} from 'react-toastify';

function DeleteProduto() {
  let history = useNavigate();
  const { id } = useParams<{id: string}>();
  const token= useSelector<TokenState,TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [produtos, setProdutos] = useState<Produto>()

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
          toast.success('Produto deletado com sucesso', {
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
            {produtos?.nome}
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