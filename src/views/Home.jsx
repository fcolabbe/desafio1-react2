import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="text-center">
          <h1 className="pt-5">
            Bienvenido a <span className="fw-bold">Happy Cake</span>
          </h1>

          <h6> El lugar de los pasteles felices </h6>
          <img src="./src/assets/img/cake.png" alt="Happy Cake" className="img-fluid mt-5" />
        </Container>
      );
    };

export default Home