import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import LinkedIn from '@material-ui/icons/LinkedIn';
import { GitHub } from '@material-ui/icons';
import './Sobre.css';

function Sobre() {
    return(
        <>
            <Grid
                container
                direction='column'
                justifyContent='flex-start'
                alignItems='center'
            >
                <Grid item xs={12} className='session'>
                    <h2 className='title'>O que nós fazemos?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias impedit libero, dolor officiis animi voluptates quia sed, reiciendis sit consectetur veniam magni recusandae, deserunt ipsa repellendus neque quas voluptatum ab.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero reiciendis vero earum. In saepe quod velit reprehenderit numquam nulla, veritatis officiis accusantium mollitia earum, sequi vitae culpa ducimus, quas sapiente.</p>
                </Grid>
                <Grid item xs={12} className='session'>
                    <h2 className='title'>Missão, visão e valores</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas repellat tempore sint illo molestiae aperiam vel commodi aut possimus temporibus? Cumque voluptas fuga quia, assumenda earum non exercitationem molestias. Ab?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores minus odit repellat, tempore id autem. Alias ipsa nemo molestiae ex deserunt totam, laudantium minus nulla saepe atque explicabo unde magni.</p>
                </Grid>
                <Grid item xs={12}
                    container
                    direction='row'
                    justifyContent='center'
                    alignItems='center'     
                    className='session'
                >
                    <Grid item xs={12} >
                        <h2 className='title'>Quem somos</h2>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://conteudo.imguol.com.br/c/tab/be/2020/01/17/foto-whatsapp-sumida-1579293251261_v2_900x506.jpg" />
                        </div>
                        <h3>Débora Santos</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/wanessa-koserski-dos-santos/" target="_blank">
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/wanessakoserski" target="_blank">
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://conteudo.imguol.com.br/c/tab/be/2020/01/17/foto-whatsapp-sumida-1579293251261_v2_900x506.jpg" />
                        </div>
                        <h3>João Victor Lopes</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-lopes-b6ba59221/" target="_blank">
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/ProjectzJV" target="_blank">
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://conteudo.imguol.com.br/c/tab/be/2020/01/17/foto-whatsapp-sumida-1579293251261_v2_900x506.jpg" />
                        </div>
                        <h3>Luan Piauilino</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/wanessa-koserski-dos-santos/" target="_blank">
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/wanessakoserski" target="_blank">
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://conteudo.imguol.com.br/c/tab/be/2020/01/17/foto-whatsapp-sumida-1579293251261_v2_900x506.jpg" />
                        </div>
                        <h3>Marcelo Nascimento</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/wanessa-koserski-dos-santos/" target="_blank">
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/wanessakoserski" target="_blank">
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://conteudo.imguol.com.br/c/tab/be/2020/01/17/foto-whatsapp-sumida-1579293251261_v2_900x506.jpg" />
                        </div>
                        <h3>Maria Vitoria Venturini</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/wanessa-koserski-dos-santos/" target="_blank">
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/wanessakoserski" target="_blank">
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://conteudo.imguol.com.br/c/tab/be/2020/01/17/foto-whatsapp-sumida-1579293251261_v2_900x506.jpg" />
                        </div>
                        <h3>Rian Ferreira</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/wanessa-koserski-dos-santos/" target="_blank">
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/wanessakoserski" target="_blank">
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://conteudo.imguol.com.br/c/tab/be/2020/01/17/foto-whatsapp-sumida-1579293251261_v2_900x506.jpg" />
                        </div>
                        <h3>Wanessa dos Santos</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/wanessa-koserski-dos-santos/" target="_blank">
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/wanessakoserski" target="_blank">
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Sobre;