import { Button, Typography } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import Game from "./components/Game/Game.component";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  button: {
    margin: "0.5rem",
    padding: "1rem",
    minWidth: "50%",
  },
  linkButton: {
    width: "100%",
    padding: "1rem",
  },
});

function App() {
  const classes = useStyles();
  const [gameInitialized, setGameInitialized] = useState(false);

  return (
    <div className="App">
      {gameInitialized ? (
        <Game />
      ) : (
        <div className="title-screen">
          <Typography variant="h3" color="initial">
            Code breaker
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            onClick={() => setGameInitialized(true)}
          >
            Start game
          </Button>

          <a
            style={{ minWidth: "50%" }}
            href="https://github.com/magnus-schj/code-breaker"
          >
            <Button className={classes.linkButton} variant="contained">
              Source
            </Button>
          </a>
        </div>
      )}
    </div>
  );
}

export default App;
