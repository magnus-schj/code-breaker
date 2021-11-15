import { FC } from "react";
import { useAppSelector } from "../../App/hooks";
import { Box, Paper, Typography } from "@mui/material";
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
    width: "80%",
    margin: "auto",
    paddingLeft: "0.6rem",
    background: theme.palette.primary.main,
  },
}));

interface Props {}

const Attempts: FC<Props> = () => {
  const classes = useStyles();

  const code = useAppSelector((state) => state.code);
  const renderPegs = (num: number, isBlack: boolean) => {
    const pegs = [];
    for (let i = 0; i < num; i++) {
      const element = (
        <div
          key={i}
          style={{
            margin: "0.1rem",
            height: "2rem",
            width: "2rem",
            background: isBlack ? "black" : "white",
          }}
        ></div>
      );
      pegs.push(element);
    }
    return pegs;
  };
  return (
    <Paper elevation={3} className={classes.root}>
      <Typography variant="h4" color="initial">
        Attempts left: {code.limit - code.numTries}
      </Typography>
      <Box className={classes.attempts}>
        {code.attempts.map(({ black, white, colours }, i) => (
          <div className="attempt" key={i}>
            <Typography variant="h5" color="initial">
              {i + 1}:
            </Typography>
            <div className="history">
              {colours?.map((colour, j) => (
                <div
                  key={j}
                  style={{
                    margin: "0.1rem",
                    height: "2rem",
                    width: "2rem",
                    border: "1px solid black",
                    background: colour,
                  }}
                ></div>
              ))}
            </div>
            <div className="attempt-pegs">
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
