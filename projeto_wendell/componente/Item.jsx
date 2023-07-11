import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Produto from './Produto';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  const navigate = useNavigate()
  return (

    <h1> Cardapio</h1>,

    <Box id="Card" sx={{ flexGrow: 1 }}>
      <Grid container spacing={10}>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/beijinho1.png"} texto={"Beijinho"}/> </Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/amendoim.png"} texto={"Crocante de amendoim"}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/brigadeiro.png"} texto={"Brigadeiro"}/></Item>
        </Grid>
        <Grid xs={4}><Item><Produto imagem={"src/img/casadinho.png"} texto={"Casadinho"}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/ninho.png"} texto={"Ninho"}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/churros.png"} texto={"Churros"}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/ferreiro.png"} texto={"Ferreiro Rocher"}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/nutela.png"} texto={"Ninho e nutella"}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/bandeja.png"} texto={"Bandeja com 12 doces com eltras de chocolate"}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/bandeja1.png"} texto={"bandeja com 12 doces para revenda"}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/barra.png"} texto={"Barra de chocolate"}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/docinhos.png"} texto={"Docinhos de festa "}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/barcap.png"} texto={"barca com 20 doces grandes"}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/barcag.png"} texto={"barca com 60 doces pequenos"}/></Item>
        </Grid>
        <Grid xs={4}>
          <Item><Produto imagem={"src/img/Ovo_de_colher.png"} texto={"Ovos de colher"}/></Item>
        </Grid>
      </Grid>
      <ul>
        <li><Button variant="contained" color="info" style={{"width": "150px", "margin": "10px", "backgroundColor": "aqua"}} onClick={() => navigate('/Cliente')}>Cadastre-se</Button></li>
        <li><Button variant="contained" color="info" style={{"width": "150px", "margin": "10px", "backgroundColor": "aqua"}} onClick={() => navigate('/')}>Voltar ao menu</Button></li>
      </ul>
      
    </Box>
    
  );
  
 
}
