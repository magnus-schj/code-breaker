import { useState } from "react";
import "./App.css";
import { Typography, Button, useMediaQuery } from "@mui/material";
import Game from "./components/Game/Game.component";
import ThemeSwitch from "./components/ThemeSwitch.component";
import Header from "./components/Header.component";

function App() {
  const [gameInitialized, setGameInitialized] = useState(false);

  return (
    <div className="App">
      <Header
        gameInitialized={gameInitialized}
        setGameInitialized={setGameInitialized}
      />
      {gameInitialized ? (
        <Game setGameInitialized={setGameInitialized} />
      ) : (
        <div className="title-screen">
          <Typography variant="h3" color="initial">
            Code breaker
          </Typography>
          <div className="button-container">
            <Button
              variant="contained"
              onClick={() => setGameInitialized(true)}
              sx={{
                margin: "0.5rem",
                padding: "1rem",
                minWidth: "50vw",
                marginTop: "2rem",
              }}
            >
              Start game
            </Button>

            <a
              style={{
                minWidth: "50vw",
                margin: "auto",
                textDecoration: "none",
              }}
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
        </div>
      )}
    </div>
  );
}

export default App;
