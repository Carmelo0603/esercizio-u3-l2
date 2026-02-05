import { Container } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";

function Welcome() {
  return (
    <Container>
      <Alert variant="success">
        <Alert.Heading>Benvenuto in EpiBooks!</Alert.Heading>
        <hr></hr>
        <p className="mb-0">Lo shop dove i libri pesano meno della tua voglia di studiare.</p>
      </Alert>
    </Container>
  );
}

export default Welcome;
