import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Typography, Grid, Button } from '@mui/material';
import useLocalStorage from 'react-use-localstorage';
import { busca, post, } from '../../../services/Service';
import Postagem from '../../../models/Postagem';
import "./ListaPostagem.css";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
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

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])

    return (
        <div>
            <Grid className='fundo-listap'>

                {
                    posts.map(post => (
                        <Grid container >
                            <Grid item xs={12} display='flex' justifyContent='center' alignItems='center'>
                                <Box className='containerListPost'>
                                    <Box alignItems='center' justifyContent='center' p={5}>
                                        <Typography variant="body2" textAlign='left' style={{ fontWeight: 'bold', color: '#224a59' }}>
                                            {post.usuario?.nome}
                                        </Typography>
                                        <Typography variant="h5" gutterBottom align='center' justifyContent='center'>
                                            {post.titulo}
                                        </Typography>
                                        <Typography variant="body1" align='center' textAlign='justify' component="p" marginBottom="10px">
                                            {post.texto}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <img src={post.imagemUrl} alt="" width="500px" />
                                    </Box>
                                    <Typography variant="body2" textAlign='right'>
                                        {post.tema?.nome}
                                    </Typography>
                                    <Typography variant="body2" textAlign='left'>
                                        {post.data}
                                    </Typography>
                                    <Box display="flex" justifyContent="right" mb={1.2}>
                                        <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                            <Box>

                                                <a href="" target="_blank">
                                                    <ModeEditIcon className='iconListaPost' />
                                                </a>

                                            </Box>
                                        </Link>
                                        <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                            <Box>
                                                <a href="" target="_blank">
                                                    <DeleteIcon className='iconListaPost2' />
                                                </a>
                                            </Box>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    )
}

export default ListaPostagem;