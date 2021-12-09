import { FC, Key } from "react";
import { useAppSelector } from "../../App/hooks";
import "./Attempts.styles.css";
import { Box, Paper, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "45vh",
    width: "80%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0.5rem",
    margin: "5rem auto",
  },
  attempts: {
    overflowY: "scroll",
    height: "clamp(5rem,50%,100rem)",
    margin: "auto",
    paddingLeft: "0.6rem",
    width: "90%",
  },
}));

interface Props {}

const Attempts: FC<Props> = () => {
  const classes = useStyles();

  // media queries
  const iPadWidth = useMediaQuery("(max-width:1250px)");
  const phoneWidth = useMediaQuery("(max-width:670px)");
  const smallWidth = useMediaQuery("(max-width:350px)");
  const heightAndWidth = phoneWidth ? "1rem" : iPadWidth ? "2rem" : "4rem";

  const code = useAppSelector((state) => state.code);
  const renderPegs = (num: number, isBlack: boolean) => {
    const pegs = [];
    for (let i = 0; i < num; i++) {
      const element = (
        <Paper
          elevation={2}
          key={i}
          style={{
            margin: "0.2rem",
            height: heightAndWidth,
            width: heightAndWidth,
            background: isBlack ? "black" : "white",
          }}
        ></Paper>
      );
      pegs.push(element);
    }
    return pegs;
  };
  return (
    <Paper
      elevation={3}
      className={classes.root}
      style={{
        width: smallWidth ? "95%" : "80%",
      }}
    >
      <Typography variant="h4" color="initial">
        Attempts left: {code.limit - code.numTries}
      </Typography>

      <Box className={classes.attempts}>
        {code.attempts.map(({ black, white, colours }, i) => (
          <div className="attempt" key={i}>
            <Typography variant={iPadWidth ? "h5" : "h3"} color="initial">
              {i + 1}:
            </Typography>
            <div className="square-container color-attempt">
              {colours?.map((colour: any, j: Key | null | undefined) => (
                <Paper
                  key={j}
                  style={{
                    margin: "0.2rem",
                    height: heightAndWidth,
                    width: heightAndWidth,
                    background: colour,
                  }}
                ></Paper>
              ))}
            </div>
            <div className="square-container">
              {renderPegs(black, true)}
              {renderPegs(white, false)}
            </div>
          </div>
        ))}
      </Box>
    </Paper>
  );
};

export default Attempts;
