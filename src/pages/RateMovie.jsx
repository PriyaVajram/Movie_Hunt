import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const RateMovie = () => {
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [savedRatings, setSavedRatings] = useState([]);

  // Load saved ratings from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("ratings")) || [];
    setSavedRatings(stored);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRating = {
      movieId: id,
      rating,
      comment,
      date: new Date().toLocaleString(),
    };

    const updatedRatings = [...savedRatings, newRating];
    setSavedRatings(updatedRatings);

    // Save to localStorage
    localStorage.setItem("ratings", JSON.stringify(updatedRatings));

    // Reset form
    setRating(0);
    setComment("");
    alert("Your rating has been saved!");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3 text-primary">Rate Movie (ID: {id})</h2>
      <form onSubmit={handleSubmit} className="border p-3 rounded shadow-sm">
        <div className="mb-3">
          <label className="form-label">Rating (1-5)</label>
          <input
            type="number"
            min="1"
            max="5"
            className="form-control"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Comment</label>
          <textarea
            className="form-control"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-success">
          Submit Rating
        </button>
      </form>

      <h3 className="mt-4">Your Previous Ratings</h3>
      {savedRatings
        .filter((r) => r.movieId === id)
        .map((r, index) => (
          <div key={index} className="border p-2 my-2 rounded bg-light">
            <strong>⭐ {r.rating}/5</strong>
            <p>{r.comment}</p>
            <small className="text-muted">{r.date}</small>
          </div>
        ))}
    </div>
  );
};
