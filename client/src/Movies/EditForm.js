import React, { useState } from "react";

const EditForm = props => {
  const [editedMovie, setEditedMovie] = useState({
    title: props.history.location.state.title,
    director: props.history.location.state.director,
    metascore: props.history.location.state.metascore,
    stars: props.history.location.state.stars
  });

  const handleChange = event => {
    setEditedMovie({
      ...editedMovie,
      [event.target.name]: event.target.value
    });
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
      <button>Update movie</button>
    </form>
  );
};

export default EditForm;
