import React, { useState, useEffect } from "react";
import Rating from "./Rating";

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
    <div>
      <h2>Formulario de Comentarios</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="comment">Comentario:</label>
          <textarea
            id="comment"
            value={comment}
            onChange={handleCommentChange}
            required
          />
        </div>
        <div>
          <label>Puntuación:</label>
          <Rating defaultRating={rating} onRatingChange={handleRatingChange} />
        </div>
        <button type="submit">Enviar Comentario</button>
      </form>

      {comments.length > 0 ? (
        <div className="border">
          {comments.map((comment, index) => (
            <div className="d-flex" key={index}>
              <strong className="nosotros-text">{comment.name}</strong>
              <p className="desc-text">{comment.comment}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No hay comentarios aún.</p>
      )}
    </div>
  );
};

export default Comentarios;
