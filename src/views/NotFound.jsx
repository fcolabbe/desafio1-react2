import { Container } from "react-bootstrap";

const NotFound = () => {
    return (
        <Container className="text-center">
          <h1 className="pt-5">La ruta que intentas consultar no existe :/</h1>
        </Container>
      );
    };

export default NotFound