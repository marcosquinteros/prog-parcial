import React, { useState, useEffect } from "react";

const Rating = ({ defaultRating, readOnly }) => {
  const [rating, setRating] = useState(defaultRating);

  useEffect(() => {
    setRating(defaultRating);
  }, [defaultRating]);

  const handleStarClick = (selectedRating) => {
    if (!readOnly) {
      setRating(selectedRating);
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "star active" : "star"}
          onClick={() => handleStarClick(star)}
          style={{
            cursor: "pointer",
            color: star <= rating ? "gold" : "gray",
            fontSize: "2.7rem",
          }}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
