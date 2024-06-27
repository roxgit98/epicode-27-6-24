import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const BookList = (props) => (
  <Container>
    <Row>
      {props.books.map((book) => (
        <SingleBook key={book.asin} img={book.img} title={book.title} />
      ))}
    </Row>
  </Container>
);

export default BookList;
