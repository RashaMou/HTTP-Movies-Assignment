import React, { useState } from "react";
import axios from "axios";

const AddForm = props => {
  console.log(props.history);
  const [newMovie, setNewMovie] = useState({
    title: "",
    director: "",
    metascore: "",
    stars: ""
  });

  const handleChange = e => {
    let value = e.target.value;
    if (e.target.name === "stars") {
      value = value.split(",");
    }
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value
    });
  };

  const addMovie = e => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/movies", newMovie)
      .then(res => props.history.push("/"))
      .catch(err => console.log(err));
  };

  return (
    <form>
      <label htmlFor="title"></label>
      <input
        type="text"
        name="title"
        value={newMovie.title}
        onChange={handleChange}
      />
      <label htmlFor="director"></label>
      <input
        type="text"
        name="director"
        value={newMovie.director}
        onChange={handleChange}
      />
      <label htmlFor="metascore"></label>
      <input
        type="text"
        name="metascore"
        value={newMovie.metascore}
        onChange={handleChange}
      />
      <label htmlFor="stars"></label>
      <input
        type="text"
        name="stars"
        value={newMovie.stars}
        onChange={handleChange}
      />
      <button type="submit" onClick={addMovie}>
        Add movie
      </button>
    </form>
  );
};

export default AddForm;
