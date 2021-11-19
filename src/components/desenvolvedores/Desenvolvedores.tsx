import React from 'react'
import { Box, Typography } from '@mui/material' 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Desenvolvedores.css';


function Desenvolvedores() {
    return (
        <Box display='flex' paddingX={3} marginTop={5} justifyContent='center'>
            <Card sx={{ maxWidth: 220 }} style={{ margin: '10px' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://i.imgur.com/9VSrhzV.jpg"
                    alt="Desenvolvedor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='fonte-nome'>
                        Matheus Oliveira
                    </Typography>
                    <Typography variant="body2" className='text-card-dev'>
                    Formado em Ciências Biológicas, sempre fui fascinado pela natureza e os seu componentes, mas 
                    buscando me reinventar, encontrei a área de tecnologia e junto a ela uma paixão que me tornou 
                    um desenvolvedor.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box className='logo-dev'>
                        <a href="https://github.com/MatheusVSOliveira" target="_blank">
                            <GitHubIcon className='colorIcon' />
                        </a>
                        <a href="https://www.linkedin.com/in/matheusvsoliveira/" target="_blank">
                            <LinkedInIcon className='colorIcon' />
                        </a>
                    </Box>
                </CardActions>
            </Card>


            <Card sx={{ maxWidth: 220 }} style={{ margin: '10px' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://i.imgur.com/SeyY8nA.jpg"
                    alt="Desenvolvedor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='fonte-nome'>
                        Larissa Inacio
                    </Typography>
                    <Typography variant="body2" className='text-card-dev' > 
                    "A imperfeição é bela, a loucura é genial e é melhor ser absolutamente ridículo do que absolutamente chato". Marilyn Monroe.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box className='logo-dev'>
                        <a href="https://github.com/larissacost" target="_blank">
                            <GitHubIcon className='colorIcon' />
                        </a>
                        <a href="https://www.linkedin.com/in/larissaimdacosta067841123/" target="_blank">
                            <LinkedInIcon className='colorIcon' />
                        </a>
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 220 }} style={{ margin: '10px' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://i.imgur.com/ZXHCyFy.jpg"
                    alt="Desenvolvedor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='fonte-nome'>
                        Samantha Costa
                    </Typography>
                    <Typography variant="body2" className='text-card-dev'> 
                    Me chamo Samantha Costa, nascida e criada no estado de São paulo desde 1999. Sou uma desenvolvedora JAVA full stack, formada pela Generation Brasil.
                    Tenho grande apreço pelas areas de biologia e tecnologia.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box className='logo-dev'>
                        <a href="https://github.com/samanthaccosta" target="_blank">
                            <GitHubIcon className='colorIcon' />
                        </a>
                        <a href="https://www.linkedin.com/in/samantha-costa-0290b91a7/" target="_blank">
                            <LinkedInIcon className='colorIcon' />
                        </a>
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 220 }} style={{ margin: '10px' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://i.imgur.com/WXmbb8E.jpg"
                    alt="Desenvolvedor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='fonte-nome'>
                        João Pedro
                    </Typography>
                    <Typography variant="body2" className='text-card-dev'> 
                    Sou um desenvolvedor Java Fullstack que adora inovação e tecnologia e fico feliz em trabalhar nessa 
                    área incrível onde eu posso desenvolver projetos incríveis e a mim mesmo.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box className='logo-dev'>
                        <a href="https://github.com/Jprood" target="_blank">
                            <GitHubIcon className='colorIcon' />
                        </a>
                        <a href="https://www.linkedin.com/in/joao-pedro-rocha/" target="_blank">
                            <LinkedInIcon className='colorIcon' />
                        </a>
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{ maxWidth: 220 }} style={{ margin: '10px' }}>
                <CardMedia
                    component="img"
                    height="200"
                    image="https://i.imgur.com/1HkrPQx.jpg"
                    alt="Desenvolvedor"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" className='fonte-nome'>
                        Richard Narumi
                    </Typography>
                    <Typography variant="body2" className='text-card-dev'>
                    Curioso por natureza, decidi explorar esse mercado tão vasto, dinâmico, diverso e inovador que é o de tecnologia, 
                    onde não existe um limite para a sua imaginação sendo essa a sua única barreira entre o real e virtual.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Box className='logo-dev'>
                        <a href="https://github.com/narumiincode" target="_blank">
                            <GitHubIcon className='colorIcon' />
                        </a>
                        <a href="https://www.linkedin.com/in/richard-kenji-300ba6bb/" target="_blank">
                            <LinkedInIcon className='colorIcon' />
                        </a>
                    </Box>
                </CardActions>
            </Card>
        </Box>
    )
}

export default Desenvolvedores;