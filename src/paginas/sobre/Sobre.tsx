import React from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import LinkedIn from '@material-ui/icons/LinkedIn';
import { GitHub } from '@material-ui/icons';
import './Sobre.css';

function Sobre() {
    return (
        <>
            <Grid
                container
                direction='column'
                justifyContent='flex-start'
                alignItems='center'
                className='sobre-body'
            >
                <Grid item xs={12} className='session align-center'>
                    <h2 className='title'>O que nós fazemos?</h2>
                    <p>Somos o mercado limpo, um dos únicos E-commerce de energia limpa do Brasil, nosso objetivo é diminuir o consumo de fontes de energia que podem causar o efeito estufa no nosso planeta, visamos a acessibilidade a energia limpa, menor dependência de provedoras de energia, e principalmente fomentar o desenvolvimento de tecnologias sustentáveis, cada produto tem seu tipo de energia utilizada e sua escalabilidade de produção e utilização.</p>
                    <p className='texto-servicos'>Oferecemos: Orçamento, Instalação, Suporte, Manutenção e Garantia...</p>
                </Grid>
                <Grid item xs={12} className='session align-center'>
                    <h2 className='title'>Missão, visão e valores</h2>
                    <p>Nossa motivação é nossa preocupação com o meio ambiente, visando uma atitude sustentável para haver um mundo melhor no futuro, incentivando o uso de energia limpa, noção dos recursos escassos que temos no planeta e a necessidade de apoiar pequenos projetos para criação de novas tecnologias. Porque escolhemos o modelo E-commerce? Acreditamos que seria a ponte ideal, para a normalização da utilização do consumo de energia renovável no dia a dia, e para conseguir apoiar e utilizar desde cedo as novas tecnologias produzidas através da divulgação e consumo ativo no mercado.</p>
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
                            <img src="https://avatars.githubusercontent.com/u/103888055?v=4" />
                        </div>
                        <h3>Débora Santos</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/d%C3%A9bora-gaspar-b6bab517b" target="_blank" className='logo-sobre'>
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/DeboraGaspar" target="_blank" className='logo-sobre'>
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://avatars.githubusercontent.com/u/91668424?v=4" />
                        </div>
                        <h3>João Victor Lopes</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/jo%C3%A3o-victor-lopes-b6ba59221/" target="_blank" className='logo-sobre'>
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/ProjectzJV" target="_blank" className='logo-sobre'>
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://avatars.githubusercontent.com/u/106116050?v=4" />
                        </div>
                        <h3>Luan Piauilino</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/luan-piauilino-da-silva-20091b184" target="_blank" className='logo-sobre'>
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/LuanPiauilino" target="_blank" className='logo-sobre'>
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://avatars.githubusercontent.com/u/105805883?v=4" />
                        </div>
                        <h3>Marcelo Nascimento</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/marcelosantos616/" target="_blank" className='logo-sobre'>
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/marcelooo616" target="_blank" className='logo-sobre'>
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://avatars.githubusercontent.com/u/106320574?v=4" />
                        </div>
                        <h3>Maria Vitoria Venturini</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/maria-vitoria-soares-sotero-venturini-302980205/" target="_blank" className='logo-sobre'>
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/MavisVenturini" target="_blank" className='logo-sobre'>
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://avatars.githubusercontent.com/u/64613463?v=4" />
                        </div>
                        <h3>Rian Ferreira</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/orianferreira/" target="_blank" className='logo-sobre'>
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/orianferreira" target="_blank" className='logo-sobre'>
                                <GitHub style={{ fontSize: 40 }} />
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={6} sm={3} className='cardPerfil'>
                        <div className='perfil'>
                            <img src="https://avatars.githubusercontent.com/u/101234800?v=4" />
                        </div>
                        <h3>Wanessa dos Santos</h3>
                        <Box className='socialPerfil'>
                            <a href="https://www.linkedin.com/in/wanessa-koserski-dos-santos/" target="_blank" className='logo-sobre'>
                                <LinkedIn style={{ fontSize: 50 }} />
                            </a>
                            <a href="https://github.com/wanessakoserski" target="_blank" className='logo-sobre'>
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