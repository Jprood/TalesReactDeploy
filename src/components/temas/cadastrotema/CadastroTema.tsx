import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom'
import { buscaId, post, put } from '../../../services/Service';
import Tema from '../../../models/Tema';
import './CadastroTema.css';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import ListaTemaAdmin from '../listatema/ListaTemaAdmin';


function CadastroTema() {

    let history = useHistory();
    const { id } = useParams<{ id: string }>();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [tema, setTema] = useState<Tema>({
        id: 0,
        nome: '',
        descricao: ''

    })

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

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if (id == undefined && tema.nome != '' && tema.descricao != '') {

            post(`/temas`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema cadastrado com sucesso!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            })
            back()
        }
        else if (id != undefined && tema.nome != '' && tema.descricao != '') {

            put('/temas', tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Tema atualizado com sucesso!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            })
            back()
        }
        else {
            toast.error("Preencha os campos corretamente!", {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
        }

    }

    function back() {
        history.push('/temas')
    }


    return (
        <Grid container xs={12} justifyContent="center" alignItems="center" className='planoDeFundo'>

            <Grid item xs={5}>
                <Box className="containerCadastroTema" >
                    <form onSubmit={onSubmit}>
                        <Typography variant="h3" color="textSecondary" component="h1" align="center" className="text1 margem-descricao-tema" >Formulário de cadastro tema</Typography>
                        <Typography variant="h6" className="txtFieldColor-post" marginTop="10px" align="left">Titulo</Typography>
                        <TextField className="caixa-de-texto-fundo margem-descricao-tema" value={tema.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="nome do tema" label="nome do tema" variant="outlined" name="nome" fullWidth />
                        <Typography variant="h6" className="txtFieldColor-post" marginTop="10px" align="left">Descrição</Typography>
                        <TextField className="caixa-de-texto-fundo margem-descricao-tema" value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="descrição" variant="outlined" name="descricao" fullWidth />
                        <Button type="submit" variant="contained" color="primary" className="btnColorBluect">
                            Cadastrar
                        </Button>
                    </form>
                </Box>
            </Grid>
            <ListaTemaAdmin />
        </Grid>
    )
}

export default CadastroTema;