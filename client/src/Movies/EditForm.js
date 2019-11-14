import React, { useState } from "react";
import axios from "axios";

const EditForm = props => {
  console.log("id", props.location.state.id);
  const [editedMovie, setEditedMovie] = useState({
    id: props.location.state.id,
    title: props.location.state.title,
    director: props.location.state.director,
    metascore: props.location.state.metascore,
    stars: props.location.state.stars
  });

  const handleChange = event => {
    setEditedMovie({
      ...editedMovie,
      [event.target.name]: event.target.value
    });
  };

  const sendEdit = e => {
    e.preventDefault();
    console.log("editedMovie", editedMovie);
    axios
      .put(
        `http://localhost:5000/api/movies/${props.location.state.id}`,
        editedMovie
      )
      .then(res => props.history.push(`/movies/${props.location.state.id}`))
      .catch(err => console.log(err));
  };

  return (
    <form>
      <label htmlFor="title"></label>
      <input
        type="text"
        name="title"
        value={editedMovie.title}
        onChange={handleChange}
      />
      <label htmlFor="director"></label>
      <input
        type="text"
        name="director"
        value={editedMovie.director}
        onChange={handleChange}
      />
      <label htmlFor="metascore"></label>
      <input
        type="text"
        name="metascore"
        value={editedMovie.metascore}
        onChange={handleChange}
      />
      <label htmlFor="stars"></label>
      <input
        type="text"
        name="stars"
        value={editedMovie.stars}
        onChange={handleChange}
      />
      <button type="submit" onClick={sendEdit}>
        Update movie
      </button>
    </form>
  );
};

export default EditForm;
