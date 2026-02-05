import fantasy from "./dataBooks/fantasy.json";
import { Card, Col, Container, Row } from "react-bootstrap";

const AllTheBooks = () => {
  return (
    <Container>
      <Row className="g-2">
        {fantasy.map((book) => (
          <Col xs={12} md={4} lg={3} key={book.asin}>
            <Card className="h-100">
              <Card.Img variant="top" src={book.img} />
              <Card.Body>
                <Card.Title className="text-truncate">{book.title}</Card.Title>
                <Card.Text>€{book.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
