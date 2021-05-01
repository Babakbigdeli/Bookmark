import React from "react";
import './style/Searchbar.css';

function Searchbar({ q, handleChange, handleSubmit }) {
  return (
    <div id="cover">
    <form method="get" action="">
      <div class="tb">
        <div class="td"><input type="text" placeholder="Search" required value={q} onChange={handleChange}></input></div>
        <div class="td" id="s-cover">
          <button onClick={handleSubmit} type="submit">
            <div id="s-circle"></div>
            <span></span>
          </button>
        </div>
      </div>
    </form>
  </div>
  
  );
}


export default Searchbar;
