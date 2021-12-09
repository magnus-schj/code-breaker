import { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { resetCode, setCode } from "../../features/code/code.slice";
import { resetColours } from "../../features/inputs/inputs.slice";
import { generateCode, renderDragDrop } from "./utils";
import { initialOutputs } from "../../initialData";
import Attempts from "../Attempts/Attempts.component";
import HelpComponent from "../Help/Help.component";

import { AnimatePresence, motion } from "framer-motion";

import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { Help } from "@mui/icons-material";
import Confetti from "../Confetti/Confetti.component";

interface Props {
  setGameInitialized: React.Dispatch<React.SetStateAction<boolean>>;
}
const Game: FC<Props> = ({ setGameInitialized }) => {
  const dispatch = useAppDispatch();

  const [helpOpen, setHelpOpen] = useState(false);

  const inputs = useAppSelector((state) => state.inputs);
  const codeSlice = useAppSelector((state) => state.code);

  const gameOver = codeSlice.limit - codeSlice.numTries > 0 ? false : true;

  useEffect(() => {
    dispatch(setCode(generateCode(Object.keys(inputs), initialOutputs)));
    return () => {
      dispatch(resetCode());
      dispatch(resetColours());
    };
  }, []);

  const handleClick = () => {
    setGameInitialized(false);
  };

  const onMotionClick = () => {
    setHelpOpen(!helpOpen);
  };

  return (
    <div className="game">
      {codeSlice.codeBroken && <Confetti />}
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <span style={{ flexGrow: 1 }}>
            <Button onClick={handleClick} variant="contained">
              Quit
            </Button>
          </span>
          <motion.div className="motion-container" onClick={onMotionClick}>
            <IconButton color="default" aria-label="help">
              <Help />
            </IconButton>
          </motion.div>
        </Toolbar>
      </AppBar>
      <Attempts />

      {renderDragDrop(gameOver, codeSlice.codeBroken)}

      {/* help window */}
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {helpOpen && <HelpComponent handleClose={() => setHelpOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Game;
