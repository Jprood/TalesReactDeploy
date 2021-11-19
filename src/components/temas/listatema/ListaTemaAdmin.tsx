import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography, Grid } from '@mui/material';
import Tema from '../../../models/Tema';
import './ListaTema.css';
import { useHistory } from 'react-router-dom';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaTema() {
  const [temas, setTemas] = useState<Tema[]>([])
  let history = useHistory();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token == "") {
        toast.error('Você precisa estar logado!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: 'colored',
            progress: undefined
        })
        history.push("/login")
    }
}, [token])


  async function getTema() {
    await busca("/temas", setTemas, {
      headers: {
        'Authorization': token
      }
    })
  }


  useEffect(() => {
    getTema()
  }, [temas.length])

  return (
    <>
      <Grid container justifyContent="center" alignItems="center" className="fundo-temas">
        <Grid item display="flex" xs={12} flexDirection="row">
          <Box display="flex" flexWrap="wrap" justifyContent="center" alignItems="center" width="100%">
            {
              temas.map(tema => (
                <Box m={7} width="40%">
                  <Card variant="outlined" >
                    <CardContent>
                      <Typography variant="h4" component="h2" className="margem-tema">
                        {tema.nome}
                      </Typography>
                      <Typography variant="h6" component="h2">
                        {tema.descricao}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Box display="flex" justifyContent="center" alignItems="center" mb={1.5} width="100%">

                        <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none-temas">
                          <Box mx={1}>
                            <Button variant="contained" className="marginLeft btnColorBluelt" size='small' color="primary">
                              atualizar
                            </Button>
                          </Box>
                        </Link>
                        <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none-temas">
                          <Box mx={1}>
                            <Button variant="contained" size='small' color="secondary" className="btnColorRedlt"> 
                              deletar
                            </Button>
                          </Box>
                        </Link>
                      </Box>
                    </CardActions>
                  </Card>
                </Box>
              ))
            }
          </Box>
        </Grid>
      </Grid>
    </>
  );
}


export default ListaTema; 