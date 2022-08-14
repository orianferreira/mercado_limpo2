import React, { useEffect, useState } from 'react'
import { Typography, Button, Box, Card, CardActions, CardContent, Grid } from "@mui/material"
import Postagem from '../../../models/Categoria';
import { buscarId, deleteId } from '../../../service/Service';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/token/tokenReducer';
import Produto from '../../../models/Produto';
import './CompraProduto.css';

function ComprarProduto() {
  let history = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [produtos, setProdutos] = useState<Produto>()



  useEffect(() => {
    if (id !== undefined) {
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



  function cancelar() {
    history('/produtos')
  }
  return (
    <>

      
      

      <Grid xs={12} className="container-prod" >
        <Grid xs={6} className="img-prod">

          <img className=" float" src="https://i.imgur.com/guzaifd.png" />

        </Grid>
        <Grid xs={6} className="descricao-prod">

          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Produto
            </Typography>
            <Typography className='nome-prod' variant="h4" component="h2">
              {produtos?.nome}
            </Typography>
            <div className='desc'>

              <Typography className='categoria-prod' variant="h6" >
                Categoria: {produtos?.categoria?.nome}
              </Typography>
              <Typography className='tipo-prod' variant="h6" >
                Tipo: {produtos?.categoria?.tipo}
              </Typography>
              <Typography className='estoque-prod' variant="h6" >
                Quantidade: {produtos?.estoque}
              </Typography>
            </div>

          </CardContent>

          <Box className="box-valor"  >

            <Grid xs={6}>

              <Typography className="valor" variant="h6" >
                Valor: <div>R${produtos?.preco}</div>
              </Typography>

            </Grid>

            <Grid >

              <div className="card-button">

                <Button >
                  <svg className="svg-icon" viewBox="0 0 20 20">
                    <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                    <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                    <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                  </svg>
                </Button>

              </div>

            </Grid>


          </Box>

          <CardActions className='button-voltar'>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >

              <Box>
                <Button onClick={cancelar} variant="contained"  className='button-voltar-color'>
                  Voltar
                </Button>
              </Box>
            </Box>
          </CardActions>

        </Grid>


      </Grid>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">

              <Typography color="textSecondary" >
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Descrição
                  </Typography>
                  <Typography variant="h6" component="h2">
                    Nome: {produtos?.nome}
                  </Typography>

                  <Typography variant="body2" component="p">
                    Categoria: {produtos?.categoria?.nome}
                  </Typography>
                  <Typography variant="body2" component="p">
                    Tipo: {produtos?.categoria?.tipo}
                  </Typography>


                  <Typography variant="body2" component="p">
                    Descrição: {produtos?.descricao}
                  </Typography>


                </CardContent>

              </Typography>
            </Box>

          </CardContent>

        </Card>
      </Box>


    </>
  );
}
export default ComprarProduto;

