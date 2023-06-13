import React from "react";

const Comentarios = () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <div>
      <h1>COMMENTS</h1>
    </div>
  );
};

export default Comentarios;
