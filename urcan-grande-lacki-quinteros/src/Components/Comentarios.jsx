import React, { useState, useEffect } from "react";
import Rating from "./Rating";
import { Form, Button, ListGroup } from "react-bootstrap";

const Comentarios = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleRatingChange = (selectedRating) => {
    setRating(selectedRating);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      name: name,
      comment: comment,
      rating: rating,
    };
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
    localStorage.setItem("comments", JSON.stringify(updatedComments));
    setName("");
    setComment("");
    setRating(0);
  };

  return (
    <div className="">
      <h2 className="nosotros-text">Danos tu opinion!</h2>
      <div className=" w-100 d-flex align-items-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="name" className="w-75">
            <Form.Label className="desc-text">Nombre:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={handleNameChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="comment" className="w-75">
            <Form.Label className="desc-text">Comentario:</Form.Label>
            <Form.Control
              as="textarea"
              value={comment}
              onChange={handleCommentChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="rating">
            <Rating
              defaultRating={rating}
              onRatingChange={handleRatingChange}
            />
          </Form.Group>
          <Button type="submit">Enviar Comentario</Button>
        </Form>

        {comments.length > 0 ? (
          <ListGroup className="w-50">
            {comments.map((comment, index) => (
              <ListGroup.Item className="m-2" key={index}>
                <strong>{comment.name}</strong>
                {/* <Rating defaultRating={comment.rating} readOnly /> -{" "} */}
                {comment.comment}
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p className="desc-text">No hay comentarios aún.</p>
        )}
      </div>
    </div>
  );
};

export default Comentarios;
