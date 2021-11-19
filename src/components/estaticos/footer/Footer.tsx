import React from 'react'
import './Footer.css';

import { Typography, Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

function Footer() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
      );

    var footerComponent;

    if(token != ''){
        footerComponent= <Grid container>
        <Grid item xs={12} >
            <Box display="flex" flexDirection="row" className="box1" justifyContent='center'>
                <img src="https://i.imgur.com/kjX8SxB.png" alt="" className="logo-footer" />
            </Box>
        </Grid>
        <Grid item xs={12}>
            <Box className="box2">
                <Box paddingTop={1}>
                    <Typography variant="subtitle2" align="center" className="textos"> Todos os direitos reservados Tales© </Typography> 
                </Box>
            </Box>
        </Grid>
    </Grid>
    }

    return (
        <>
            {footerComponent}
        </>
    )
}

export default Footer
