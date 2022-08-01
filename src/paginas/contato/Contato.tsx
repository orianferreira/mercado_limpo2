import React from 'react';
import { Grid, TextField } from "@material-ui/core";
import "../contato/Contato.css";

function Contato() {
    return(
        <>
        <div className="bg">
        
        <Grid className="formContato">
            
            <Grid xs={6}>
                <form className="formulario">
                    <h2>Fale Conosco</h2>
                    <div className="textfield">
                      <TextField id="nome" label="Nome" variant="outlined" fullWidth/>
                      </div>
                      <div className="textfield">
                      <TextField type="email" id="email" label="Email" variant="outlined" fullWidth/>
                      </div>
                      <div className="textarea">
                      <textarea id="mensagem" aria-label="Mensagem" cols={28} rows= {5}></textarea>
                      </div>
                      
                           <button > 
                                <span className="shadow"></span>
                                <span  className="edge"></span>
                                <span  className="front text"> Enviar</span>
                            </button>
                        

                </form>

                
            </Grid>
            <Grid className="contato" xs = {4} >

                <h2>Endereço:</h2>

                <p>Av.Paulista, 1000</p>
                <p>São Paulo</p>

                <h2>Contato:</h2>
                <p>Email: contatomercadolimpo@gmail.com </p>
                <p>Telefone: (11) 2245-2654</p>
                
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9303885926142!2d-46.64623268510253!3d-23.570943467831157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59bd92bce431%3A0xc37ded133806ef0b!2sAv.%20Paulista%2C%20100%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-000!5e0!3m2!1spt-BR!2sbr!4v1659358975667!5m2!1spt-BR!2sbr"  ></iframe>
                

            </Grid>
        </Grid>
        </div>
        </>
    );
}

export default Contato;