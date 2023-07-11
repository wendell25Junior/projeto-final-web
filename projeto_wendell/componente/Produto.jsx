export default function Produto({ imagem, texto}) {
    return (
        <>
            <img src={imagem} alt="amendoim" width="300px" height="250px" />
            <h1>{texto}</h1>
        </>
    )
}