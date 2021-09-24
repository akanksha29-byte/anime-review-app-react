import React, { useState } from "react";
import Cards from "./Cards";
import { Button, FormControl } from "react-bootstrap";

const Home = ({ anime, search, setSearch }) => {
  const [temp, setTemp] = useState("");
  if (search !== "") {
    anime = anime.filter((item) =>
      item.titles["en"].toLowerCase().includes(search.toLowerCase())
    );
  }

  return (
    <div className="main">
      <div className="search">
        <FormControl
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={temp}
          onChange={(e) => setTemp(e.target.value)}
        />
        <Button
          type="submit"
          className="ml-2"
          onClick={() => {
            setSearch(temp);
            setTemp("");
          }}
        >
          Search
        </Button>
      </div>
      <div className="recipe-container">
        {anime.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
