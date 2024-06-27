import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

//  const SingleBook = (props) => (
//    <Col xxl={4}>
//      <Card>
//        <Card.Img variant="top" src={props.img} className="img-fluid" />
//        <Card.Body>
//          <Card.Title>{props.title}</Card.Title>
//        </Card.Body>
//      </Card>
//    </Col>
//  );

class SingleBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    };
  }

  toggleSelected = () => {
    this.setState((prevState) => ({
      selected: !prevState.selected,
    }));
  };

  render() {
    return (
      <Col xxl={4}>
        <Card onClick={this.toggleSelected}>
          <Card.Img variant="top" src={this.props.img} className="img-fluid" />
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            {this.state.selected && <Badge bg="success">Compra ora!</Badge>}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
