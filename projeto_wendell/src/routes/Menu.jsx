
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';



export default function Root() {
  const navigate = useNavigate()
    return (
      <>
        <div id='cabeça'>
         <h1 id='Top'>DEJU DOCES</h1>
        </div>
        <div id='Imagem'>
          <img src="src/img/Logo.png" alt="amendoim" width="300px" height="200px"/>          
        </div>
     
      <ul>
        <li><Button variant="contained" color="info" style={{"width": "150px", "margin": "10px", "backgroundColor": "black"}} onClick={() => navigate('/Cliente')}>Cadastre-se</Button></li>
        <li><Button variant="contained" color="info" style={{"width": "150px", "margin": "10px", "backgroundColor": "black"}} onClick={() => navigate('/Item')}>Cardapio</Button></li>
        <li><Button variant="contained" color="info" style={{"width": "150px", "margin": "10px", "backgroundColor": "black"}}><a href='https://www.instagram.com/dejudoces1/' target="_blank">Instagram</a></Button></li>
      </ul>
      
        
      </>
    );
}
