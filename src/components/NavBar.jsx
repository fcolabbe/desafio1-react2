import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar
            bg=""
            variant="dark"
        >
            <Container>
                <Container className="justify-content-between">
                    <Link
                        to="/"
                        className="text-white ms-3 text-decoration-none"
                    >
                        Home
                    </Link>
                    <Link
                        to="/contacto"
                        className="text-white ms-3 text-decoration-none">
                        Contacto
                    </Link>
                </Container>
                <Container className="justify-content-end">
                <Navbar.Brand>Happy Cake</Navbar.Brand>
                </Container>
            </Container>
        </Navbar>
    );
};
export default NavBar