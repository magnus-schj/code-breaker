import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";

import "./game.styles.css";
import { colourData } from "../../initialData";
import { makeCode } from "../../features/code/code.slice";
import { generateCode } from "./utils";
import { Button, IconButton } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";
import DragDrop from "../DragDrop.component";
import Attempts from "../Attempts/Attempts.component";

const Game: FC = () => {
  const dispatch = useAppDispatch();

  const [displayWrongCodeMessage, setDisplayWrongCodeMessage] = useState(false);

  const inputs = useAppSelector((state) => state.inputs);
  const codeSlice = useAppSelector((state) => state.code);

  useEffect(() => {
    // make a code
    const keys = Object.keys(inputs);
    dispatch(makeCode(generateCode(keys, colourData)));
  }, []);

  return (
    <div className="game">
      {/* header */}
      <header id="game-header">
        <Button variant="contained">Quit</Button>

        <IconButton color="primary" aria-label="help">
          <HelpIcon />
        </IconButton>
      </header>

      <Attempts />

      {/* dragdrop */}
      <DragDrop setDisplayWrongCodeMessage={setDisplayWrongCodeMessage} />
    </div>
  );
};

export default Game;
