import { Button, Container, TextField, Typography } from '@mui/material';
import { findByDisplayValue } from '@testing-library/react';
import React, {useState, useEffect, ChangeEvent} from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import Categoria from '../../../models/Categoria';
import { buscarId, post, put } from '../../../service/Service';
import { TokenState } from '../../../store/token/tokenReducer';


function CadastroCategoria(){

    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        tipo: ''

    })

    useEffect(() => {
        if (token == ""){
            alert('Você precisa estar logado')
            navigate('/login')
        }
    },[token])

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscarId(`/categoria/${id}`, setCategoria, {
            headers: {
              'Authorization': token
            }
          })
        }

        function updatedCategoria(e: ChangeEvent<HTMLInputElement>) {

            setCategoria({
                ...categoria,
                [e.target.name]: e.target.value
            })
    
        }

        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("categoria " + JSON.stringify(categoria))
    
            if (id !== undefined) {
                console.log(categoria)
                put(`/categoria`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Categoria atualizado com sucesso');
            } else {
                post(`/categoria`, categoria, setCategoria, {
                    headers: {
                        'Authorization': token
                    }
                })
                alert('Categoria cadastrado com sucesso');
            }
            back()
    
        }
    
        function back() {
            navigate('/categoria')
        }


        return (
            <Container maxWidth="sm" className="topo">
                <form onSubmit={onSubmit} >
                    <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de cadastro categoria</Typography>
                    <TextField value={categoria.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="nome" label="categoria" variant="outlined" name="nome" margin="normal" fullWidth />
                    <TextField value={categoria.tipo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedCategoria(e)} id="tipo" label="tipo" variant="outlined" name="tipo" margin="normal" fullWidth />
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </form>
            </Container>
        )
   
}

export default CadastroCategoria;













