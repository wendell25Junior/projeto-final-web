import { Box } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Form } from "react-router-dom";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Cliente() {
    
    function CadastroCliente(e){
        Console.log(name)
        console.log("Cliente cadastrado")
    }
    const [name, setName] = useState()
    
    
    return (
      <>
      <div>
        <h1 id="Topo">
            Preencha este formulário:
        </h1>

      </div>
      
      <div id="Formulario">
        <form  id="cli" method="post" onSubmit={CadastroCliente}>
             <Box> 
                 <label htmlFor="name">Nome:    </label>           
                <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Digite seu nome:"
                onChange={(e)=>setName(e.target.value)} />
                
            </Box>
            <Box> 
                <label htmlFor="Email">Email:  </label>           
                <input 
                type="Email" 
                id="Email" 
                name="Email" 
                placeholder="Digite seu e-mail:"
                onChange={(e)=>setName(e.target.value)} />
                
            </Box>
            <Box>  
            <label htmlFor="password" >Senha:   </label>          
                <input 
                type="password" 
                id="password" 
                name="password" 
                placeholder="Digite sua senha:"
                onChange={(e)=>setPassword(e.target.value)} />
            </Box>
            <Box>
                <RowRadioButtonsGroup/>
            </Box>
            <ul>
              <li><Button variant="contained" color="info" style={{"width": "150px", "margin": "10px", "backgroundColor": "black"}} href="/Item">Finalizar cadastro</Button></li>
            </ul>
            
        </form>
        </div>
      </>


    )

}
function RowRadioButtonsGroup() {
    return (
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Qual seu doce tradicional favorito?</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="Brigadeiro" control={<Radio />} label="Brigadeiro" />
          <FormControlLabel value="Casadinho" control={<Radio />} label="Casadinho" />
          <FormControlLabel value="Ninho" control={<Radio />} label="Ninho" />
          <FormControlLabel value="Amendoim" control={<Radio />} label="Amendoim" />
          <FormControlLabel value="Beijinho" control={<Radio />} label="Beijinho" />
        </RadioGroup>
        
      </FormControl>

    );
}
