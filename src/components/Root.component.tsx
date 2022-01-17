import { Typography, Button } from "@mui/material";
import React, { FC, useState } from "react";
import { theme } from "../themes";
import Game from "./Game/Game.component";
import Header from "./Header.component";

interface Props {}

const Root: FC<Props> = () => {
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
        <div
          className="title-screen"
          style={{ background: theme.palette.background.default }}
        >
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
};

export default Root;
