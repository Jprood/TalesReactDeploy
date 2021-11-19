import React, { useEffect, useState } from 'react'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './DeletarTema.css';
import { useHistory, useParams } from 'react-router-dom';
import { buscaId, deleteId } from '../../../services/Service';
import Tema from '../../../models/Tema';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function DeletarTema() {
  let history = useHistory();
  const { id } = useParams<{ id: string }>();
  const [tema, setTema] = useState<Tema>()
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

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    buscaId(`/temas/${id}`, setTema, {
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    history.push('/temas')
    deleteId(`/temas/${id}`, {
      headers: {
        'Authorization': token
      }
    });
    toast.success('Tema deletado com sucesso!', {
      position: 'top-right',
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false, 
      draggable: false, 
      theme: 'colored', 
      progress: undefined 
  })
  }

  function nao() {
    history.push('/temasadmin')
  }

  return (
    <>
      <Grid container xs={12} className='fundo-listap' justifyContent='center' alignItems='center'>
        <Grid item xs={6} display='flex' justifyContent='center' alignItems='center'>
          <Box className='containerListPost'>
            <Box justifyContent="center" alignItems="center">
              <Typography variant="h5" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography variant="h5" style={{ fontWeight: 'bold', color: '#224a59' }}>
                {tema?.nome}
              </Typography>
              <Typography variant="body1">
                {tema?.descricao}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="center">
              <Box mx={2} my={2}>
                <Button onClick={sim} variant="contained" className="marginLeft btnColorBlue" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2} my={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary" className="btnColorRed">
                  Não
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
export default DeletarTema;