import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import './SobreNos.css';
import Desenvolvedores from '../../components/desenvolvedores/Desenvolvedores';
import CarouselComponent from '../../components/carossel/CarouselComponent';




function SobreNos() {
    return (
        <Grid container className='caixaPrincipal'>
            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center' >
                <Box className='container1'>
                    <Box alignItems='center' justifyContent='center' width='45%'> 
                        <Typography variant="h3" className='txtcolor' gutterBottom color='#224a59' align='center' justifyContent='center'>
                            Sobre nós
                        </Typography>
                        <Typography variant="h5" className='txtcolor'  textAlign='justify'>
                        A rede social Tales, criada no ano 2021, é fruto do projeto de jovens desenvolvedores e visa promover a disseminação de informações acerca 
                        da disponibilidade de água potável e saneamento básico através de uma plataforma acessível a todos. Sua origem é baseada no 6º Objetivo
                        de Desenvolvimento Sustentável da ONU, que estabelece diretrizes para que problemas relacionados a esse tema sejam minimizados
                        até o ano de 2030.
                        </Typography>
                    </Box>
                    <Box width='45%' className='img'> </Box>
                </Box>
            </Grid>

            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
                <Box className='container2'>
                    <Box width='45%' className='img2'></Box>
                    <Box alignItems='center' justifyContent='center' width='45%'>
                        <Typography variant="h3" gutterBottom color='#224a59' align='center' justifyContent='center' className='txtcolor'>
                            ODS 6
                        </Typography>
                        <Typography variant="h5" className='txtcolor' textAlign='justify'>
                        Até 2030, as metas do ODS 6 é melhorar a qualidade da água, reduzir a poluição, eliminar e minimizar o despejo de produtos químicos e materiais perigosos, reduzir pela metade a proporção de águas residuais não tratadas, aumentar significativamente a reciclagem e reutilização com segurança, alcançar um justo acesso ao saneamento e higiene pessoal para todos e acabar com a defecação a céu aberto, com atenção especial às necessidades das mulheres e meninas e pessoas em situação de vulnerabilidade.

                        </Typography>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
                <Box className='container3'>
                    <Box alignItems='center' justifyContent='center' width="45%">
                        <Typography variant="h3" gutterBottom color='#224a59' align='center' justifyContent='center' className='txtcolor'>
                            Objetivo
                        </Typography>
                        <Typography variant="h5" className='txtcolor'  textAlign='justify'>
                        Decidimos criar o Tales, uma rede social voltada para os problemas hídricos, com o objetivo de divulgar as carências, a poluição de rios e afluentes e a falta de 
                        infraestrutura, sendo esse um espaço onde a defesa da água e da vida sejam nossa principal prioridade, lutando para que ela chegue a todas as pessoas como garante 
                        a constituição nacional de 1988, a água como direito e garantia fundamental.
                                         Tales, um "defensor social".
                        </Typography>
                    </Box>
                    <Box width="45%" className='img3'></Box>
                </Box>
            </Grid>

            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
                <Box className='container4'>
                    <Box width='100%'>
                    <CarouselComponent /> 
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'className='txtcolor'>  
                <Desenvolvedores />
            </Grid>
        </Grid>
    )
}

export default SobreNos;