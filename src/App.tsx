import { useState } from "react";
import "./App.css";
import { Typography, Button } from "@mui/material";
import Game from "./components/Game/Game.component";

function App() {
  const [gameInitialized, setGameInitialized] = useState(false);

  return (
    <div className="App">
      {gameInitialized ? (
        <Game setGameInitialized={setGameInitialized} />
      ) : (
        <div className="title-screen">
          <Typography variant="h3" color="initial">
            Code breaker
          </Typography>
          <Button
            variant="contained"
            onClick={() => setGameInitialized(true)}
            sx={{
              margin: "0.5rem",
              padding: "1rem",
              minWidth: "50%",
            }}
          >
            Start game
          </Button>

          <a
            style={{ minWidth: "50%", margin: "auto" }}
            href="https://github.com/magnus-schj/code-breaker"
          >
            <Button
              variant="contained"
              sx={{
                minWidth: "100%",
                padding: "1rem",
              }}
            >
              Source
            </Button>
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
