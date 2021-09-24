import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuth } from "../context/appContext";

const Cards = ({ item }) => {
  const { setCurrentAnime } = useAuth();
  const trim = (str, len) => {
    return str.length > len ? str.substring(0, len).concat("...").trim() : str;
  };

  const genres = () => {
    let str = "";
    for (let i = 0; i < item.genres.length; i++) {
      str += `${item.genres[i]}, `;
    }

    return str.trim().substring(0, str.length - 2);
  };

  const openWindow = (url) => {
    let myWindow = window.open(url);
    if (!url) {
      myWindow.document.write("Video not available :(");
    }
  };

  return (
    <Link
      to={{
        pathname: `/${item.anilist_id}`,
        id: item.anilist_id,
      }}
      style={{
        textDecoration: "none",
      }}
    >
      <Card
        style={{ width: "18rem" }}
        className="card-container"
        onClick={() => {
          setCurrentAnime({ ...item, hashTags: genres() });
        }}
      >
        <Card.Img
          variant="top"
          src={item.cover_image}
          alt={item.titles["en"]}
        />
        <span className="score-badge">Score: {`${item.score}`}</span>

        <Card.Body className="card-body">
          <Card.Title style={{ height: "30px", fontSize: "18px" }}>
            {trim(item.titles["en"], 50)}
          </Card.Title>
          <Card.Text className="anime-genres">{trim(genres(), 90)}</Card.Text>
          <Button size="sm" onClick={() => openWindow(item.trailer_url)}>
            Watch trailer
          </Button>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default Cards;
