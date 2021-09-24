import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AnimeModal from "./components/Modal/AnimeModal";
import { AuthProvider } from "./context/appContext";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjI4MyIsIm5iZiI6MTYzMjQwNTA3NiwiZXhwIjoxNjM0OTk3MDc2LCJpYXQiOjE2MzI0MDUwNzZ9.bxLfYp7z49wSONTZfnPOHtuZ9S7He5dGFb_Wm5-fXj8";
const App = () => {
  const [anime, setAnime] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchApi = async () => {
      const result = await axios.get(
        "https://api.aniapi.com/v1/anime?per_page=20",
        {
          method: "GET",
          headers: {
            Authorization: `${API_KEY}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      setAnime(result.data.data.documents);
    };
    fetchApi();
  }, []);

  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/signup" component={SignUp} />

            <Route path="/login" component={LogIn} />

            <Route exact name="animeInfo" path="/:id">
              <AnimeModal />
            </Route>
            <Route path="/" exact>
              <Home anime={anime} search={search} setSearch={setSearch} />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default App;
