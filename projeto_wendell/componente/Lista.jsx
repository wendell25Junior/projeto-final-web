

import Item from "./Item"
export default function Lista(){
    return(
        <>
            <H1>Sabores Tradicionais:</H1>
            <ul>
                <Item Sabor="Brigadeiro"/>
                <Item sabor="Casadinho"/>
                <Item sabor="Ninho"/>
                <Item sabor="Amendoim"/>
                <Item sabor ="Beijinho"/>
            </ul>
        </>
    )

}
