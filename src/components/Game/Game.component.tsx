import { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { setCode } from "../../features/code/code.slice";
import { generateCode } from "./utils";
import { initialOutputs } from "../../initialData";
import Attempts from "../Attempts/Attempts.component";
import DragDrop from "../DragDrop/DragDrop.component";
import HelpComponent from "../Help/Help.component";

import { AnimatePresence, motion } from "framer-motion";

import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { Help } from "@mui/icons-material";

interface Props {
  setGameInitialized: React.Dispatch<React.SetStateAction<boolean>>;
}
const Game: FC<Props> = ({ setGameInitialized }) => {
  const dispatch = useAppDispatch();

  const [displayWrongCodeMessage, setDisplayWrongCodeMessage] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);

  const inputs = useAppSelector((state) => state.inputs);

  useEffect(() => {
    dispatch(setCode(generateCode(Object.keys(inputs), initialOutputs)));
  }, []);

  const handleClick = () => {
    setGameInitialized(false);
    dispatch(setCode(null));
  };

  const onMotionClick = () => {
    console.log(helpOpen);
    setHelpOpen(!helpOpen);
  };

  return (
    <div className="game">
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

      {/* dragdrop */}
      <DragDrop setDisplayWrongCodeMessage={setDisplayWrongCodeMessage} />
      {/* help window */}
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {helpOpen && <HelpComponent handleClose={() => setHelpOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Game;
