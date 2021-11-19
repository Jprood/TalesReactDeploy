import React, { useState, useEffect, ChangeEvent } from 'react'
import { Box, Grid, Typography, TextField, Button } from '@mui/material'
import { Link, useHistory } from 'react-router-dom';
import { login } from '../../services/Service';
import './Login.css';
import UserLogin from '../../models/UserLogin';
import { useDispatch } from 'react-redux';
import { addName, addTipoUsuario, addToken } from '../../store/tokens/actions';
import {toast} from 'react-toastify';



function Login() {

    let history = useHistory();
    const dispatch = useDispatch();
    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome:'',
            usuario: '',
            tipoUsuario: '',
            senha: '',
            token: ''
        }
    )

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome:'',
            usuario:'',
            tipoUsuario: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }



    useEffect(() => {
       
        if (respUserLogin.token != '') {
            dispatch(addToken(respUserLogin.token));
            dispatch(addName(respUserLogin.nome));
            dispatch(addTipoUsuario(respUserLogin.tipoUsuario));
            history.push('/home')
        }
    }, [respUserLogin.token])
    

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/logar`, userLogin, setRespUserLogin)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        console.log('userLogin: ' + Object.values(userLogin)) 
    }

    return (
        <div>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="colorlogin-background">
                <Grid item xs={3} alignItems="center">
                    <Box paddingX="20px" border={1} borderRadius={9} className="boxlogin1">
                        <Box> 
                            <form onSubmit={onSubmit}>
                                <img src="https://i.imgur.com/lkhAgRt.png" alt="" className="tamanho-logo-login"/>   
                                <Typography className='txtFieldColorLogin' align="left">Usuario</Typography>
                                <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="usuario" label="digite seu email" variant="outlined" name="usuario" fullWidth className="campo-de-texto" />
                                <Typography className='txtFieldColorLogin'align="left">Senha</Typography>
                                <TextField  value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id="senha" label="digite sua senha" variant="outlined" name="senha" type="password" fullWidth className="campo-de-texto" />
                            </form> 
                        </Box>
                        <Box marginTop={1} textAlign="center">
                            <form onSubmit={onSubmit}> 
                                <Button type="submit" variant="contained" className="botao">
                                    Entrar
                                </Button>
                            </form>
                            <Box display="flex" justifyContent="center" marginTop={2}>
                                <Box>
                                    <Typography variant="subtitle1"  align="center" className='txtFieldColorLogin'>Não possui um cadastro?</Typography>
                                    <Link to='/cadastrousuario'  className='text-decoration-none'> 
                                    <Typography variant="subtitle1" gutterBottom align="center" className="boldColor cursorCad">Cadastrar-se</Typography>
                                    </Link> 
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </div>
    )
}

export default Login;