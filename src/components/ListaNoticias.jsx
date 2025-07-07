import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardNoticia from "./CardNoticia"

const ListaNoticias = ({noticias}) => {
    return (
        <Container className='px-5'>
            <Row  xs={1} md={3} className='d-flex justify-content-between'>
                {
                    noticias.map((item, indice)=> <CardNoticia key={indice} noticia={item}></CardNoticia>)
                }             
            </Row>
        </Container>
    );
};

export default ListaNoticias;