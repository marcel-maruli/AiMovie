import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Form, Button, FormControl, Image, Card, Modal } from 'react-bootstrap'
// import { logo } from '../img'

function Detail(props) {
  const [show, setShow] = useState(false);
  console.log(props);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)} style={{ marginRight: "5px" }}>
        Detail
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Card>
          <Card.Img variant="top" src={props.data.Poster} style={{ maxHeight: "70vh" }} />
          <Card.Body>
            <Card.Title>{props.data.Title}</Card.Title>
            <Card.Text>
              Production: {props.data.Production}
            </Card.Text>
            <Card.Text>
              Actors: {props.data.Actors}
            </Card.Text>
            <Card.Text>
              Director: {props.data.Director}
            </Card.Text>
            <Card.Text>
              Awards: {props.data.Awards}
            </Card.Text>
            <Card.Text>
              Score: {props.data.Score}
            </Card.Text>
            <Card.Text>
              Genre: {props.data.Genre}
            </Card.Text>
            <Card.Text>
              Runtime: {props.data.Runtime}
            </Card.Text>
            <Card.Text>
              Plot: {props.data.Plot}
            </Card.Text>
            <Card.Text>
              Released: {props.data.Released}
            </Card.Text>
            <Card.Text>
              imdbRating: {props.data.imdbRating}
            </Card.Text>
          </Card.Body>
        </Card>
      </Modal>
    </>
  );
}

export default Detail;
