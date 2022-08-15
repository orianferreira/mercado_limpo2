import { Box, Button, Card, TextField, Typography } from "@material-ui/core"
import { ChangeEvent, useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom"
import { buscarId } from "../../../service/Service";
import { TokenState } from "../../../store/token/tokenReducer";
import Produtos from "../../../models/Produto"

import './Carrinho.css'

function Carrinho() {

  let history = useNavigate()
  const token= useSelector<TokenState,TokenState["tokens"]>(
    (state) => state.tokens
  );

  const { id } = useParams<{ id: string }>()
  const [quantidadeFinal, setQuantidadeFinal] = useState(0)

  const [produto, setProduto] = useState<Produtos>({
    id: 0,
    nome: "",
    descricao: "",
    preco: 0,
    estoque: 0,
    foto: ""
  })

  useEffect(() => {
     if (id !== undefined) {
     findByIdProduto(id)
     }
 }, [id])

async function findByIdProduto(id: string) {
    await buscarId(`produtos/${id}`, setProduto, {
        headers: {
            'Authorization': token
        }
    })
}

 
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let valor = +e.target.value
    setQuantidadeFinal(valor);
  }


  function valorTotal() {
    return quantidadeFinal * produto.preco
  }


  function confirmSales() {
    alert("Compra Confirmada! Verifique o seu email!")
    history("/")
  }

  return (
    <>
      <Box m={2} display="flex" justifyContent="center">
        <Card variant="outlined" className='card'>

          <div className='cardProduct'>
            <img src={produto.foto} alt="Img" />

            <div className='cardProductInfo'>
              <Typography variant="h5" component="h2">
                {produto.nome}
              </Typography>

              <Typography variant="body2" component="p">
                R$ {produto.preco}
              </Typography>

              <Typography variant="body2" component="p">
                Quantidade Máx: {produto.estoque}
              </Typography>

              <TextField
                value={quantidadeFinal}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}

                InputProps={{ inputProps: { min: 1, max: produto.estoque} }}

                id="quantidade" label="quantidade" type="number" variant="outlined"
                name="quantidade" margin="normal" fullWidth
              />
            </div>

            <div className="cardProductInfo">
              <Typography variant="h5" component="h2">
                Total: R$ {valorTotal()}
              </Typography>

              <Box className="cardProductButton">
                <Box mx={1}>
                  <Button onClick={confirmSales} variant="contained" size='small' color="primary">
                    Confimar Compra
                  </Button>
                </Box>
              </Box>

              <Link to="/" className="cardProductButton">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    Cancelar
                  </Button>
                </Box>
              </Link>
            </div>

          </div>
        </Card>
      </Box>
    </>
  )
}

export default Carrinho