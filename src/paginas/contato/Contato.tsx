import React from 'react';
import { Grid, TextField } from "@material-ui/core";
import "../contato/Contato.css";
import { Box, Button } from '@mui/material';

function Contato() {
    return (
        <>
           
        
      
           

            <Grid className="formContato"  >

            

                <Grid xs={6} className="containerForm">
                    <form className="formulario" >
                        
                        <Box className="textfield-Nome">
                        <h2 className='text' >Fale Conosco</h2>
                            <TextField id="nome" label="Nome" variant="outlined" fullWidth />
                        </Box>
                        <Box className="textfield-Email">
                            <TextField type="email" id="email" label="Email" variant="outlined" fullWidth />
                        </Box>
                        <Box className="textarea">
                            <textarea id="mensagem" aria-label="Mensagem" cols={28}  ></textarea>
                        </Box>

                        <Box className="botao-enviar">
                            <Button variant="contained" className='button'>
                                Enviar
                            </Button>
                        </Box>
                    </form>


                </Grid>

                <Grid className="contato" xs={12}  >

                    <h2>Endereço:</h2>

                    <p>Av.Paulista, 1000</p>
                    <p>São Paulo</p>

                    <h2>Contato:</h2>
                    <p>Email: contatomercadolimpo@gmail.com </p>
                    <p>Telefone: (11) 2245-2654</p>



                </Grid>




            </Grid>

        </>
    );
}

export default Contato;