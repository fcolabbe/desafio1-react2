import { Container } from "react-bootstrap";

const Contacto = () => {
    return (
        <Container className="text-center">
            <h1 className="pt-5">
                Cuentanos, ¿En que podemos ayudarte?
            </h1>
            <form action="">
                <div className="d-flex flex-column align-items-center">
                    <label htmlFor="correo" className="mb-2">Correo:</label>
                    <input type="email" id="correo" name="correo" placeholder="name@example.com" />
                </div>
                <br />
                <div className="d-flex flex-column align-items-center">
                    <label htmlFor="descripcion" className="mb-2">Descripcion:</label>
                    <textarea name="descripcion" id="descripcion" cols="30" rows="10"></textarea>
                </div>
                <br />
                <button>Enviar</button>
            </form>
        </Container>
    );
};

export default Contacto