import { Box, Button, Card, TextField, Typography } from "@material-ui/core"
import { ChangeEvent, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate, useParams } from "react-router-dom"
import { TokenState } from "../../../store/token/tokenReducer"
import { buscarId } from "../../../service/Service"
import Produto from "../../../models/Produto"

import './Carrinho.css'


function Carrinho() {

  let history = useNavigate()
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  // Assim como no FormularioPostagem, pegamos o Id do Produto pela URL
  const { id } = useParams<{ id: string }>()

  // Colocar Token com Redux

  // State para guardar a quantidade escolhida pela P. Usuaria 
  const [quantidadeFinal, setQuantidadeFinal] = useState(0)

  // State para guardar as informações do Produto retornadas pelo Back

   const [produto, setProduto] = useState<Produto>({
    id: 0,
    nome: "",
    descricao: "",
    preco: 0,
    estoque: 0,
    foto: ""
  })

  // Vai disparar a função findByIdProduto sempre que o ID for diferente que Undefined

   useEffect(() => {
     if (id !== undefined) {
       findByIdProduto(id)
     }
   }, [id])

  // Esse Código irá pegar o ID do Produto, e acessar a service que busca as informações por ID 

   async function findByIdProduto(id: string) {
     await buscarId(`produtos/${id}`, setProduto, {
       headers: {
         'Authorization': token
       }
     })
   }

  // Função que vai pegar a quantidade escolhida do Produto
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    let valor = +e.target.value
    setQuantidadeFinal(valor);
  }

  // Função que mostra o valor total entre a quantidade e o valor unitário do item. Ex.: 2 * R$2 = 4
  function valorTotal() {
    return quantidadeFinal * produto.preco
  }

  // Função que simula a compra Efetuada com sucesso
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

                // Propriedade que define o limite minimo e máximo de itens que podem ser comprados
                InputProps={{ inputProps: { min: 1, max: produto.estoque } }}

                id="estoque" label="estoque" type="number" variant="outlined"
                name="estoque" margin="normal" fullWidth
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

              <Link to="/" className="cardProductButton text-decorator-none">
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