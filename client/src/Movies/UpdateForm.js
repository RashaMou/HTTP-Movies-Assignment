import React from "react";

const EditForm = () => {
  return (
    <form>
      <label htmlFor="title"></label>
      <input type="text" name="title" />
      <label htmlFor="director"></label>
      <input type="text" name="director" />
      <label htmlFor="metascore"></label>
      <input type="text" name="metascore" />
      <label htmlFor="stars"></label>
      <input type="text" name="stars" />
      <button>Update movie</button>
    </form>
  );
};
