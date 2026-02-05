import { Card, Col, Container, Row } from "react-bootstrap";
import { Component } from "react";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    const { book } = this.props;
    return (
      <Card
        className="h-100 d-flex flex-column bg-light"
        onClick={() => this.setState({ selected: !this.state.selected })}
        style={{ border: this.state.selected ? "3px solid red" : "none" }}
      >
        <Card.Img src={book.img} className="w-auto " style={{ height: "300px", objectFit: "cover" }}></Card.Img>
        <Card.Body>
          <Card.Title className="fs-6">{book.title}</Card.Title>
          <Card.Text>{book.price} €</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
