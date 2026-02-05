import SingleBook from "./SingleBook";
import { Card, Col, Container, Row, Form } from "react-bootstrap";
import { Component } from "react";

class BookList extends Component {
  state = { searchQuery: "" };
  render() {
    const books = this.props.books || [];
    const filteredBooks = books.filter((book) => book.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()));
    return (
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Cerca un libro..."
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-3">
          {filteredBooks.map((book) => (
            <Col xs={6} md={3} lg={2} key={book.asin}>
              <SingleBook book={book}></SingleBook>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
