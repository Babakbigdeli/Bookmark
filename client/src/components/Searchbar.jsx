import React from "react";

function Searchbar({ q, handleChange, handleSubmit }) {
  return (
    <div>
      <input type="text" value={q} onChange={handleChange} />
      <button onClick={handleSubmit} type="submit" className="submitbutton">
        Search
      </button>
    </div>
  );
}

export default Searchbar;
