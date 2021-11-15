import { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { setCode } from "../../features/code/code.slice";
import { initialOutputs } from "../../initialData";

import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { generateCode } from "./utils";
import Attempts from "../Attempts/Attempts.component";
import DragDrop from "../DragDrop/DragDrop.component";
import { Help } from "@mui/icons-material";

const Game: FC = () => {
  const dispatch = useAppDispatch();

  const [displayWrongCodeMessage, setDisplayWrongCodeMessage] = useState(false);

  const inputs = useAppSelector((state) => state.inputs);

  useEffect(() => {
    dispatch(setCode(generateCode(Object.keys(inputs), initialOutputs)));
  }, []);

  return (
    <div className="game">
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <span style={{ flexGrow: 1 }}>
            <Button variant="contained">Quit</Button>
          </span>
          <IconButton color="default" aria-label="help">
            <Help />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Attempts />

      {/* dragdrop */}
      <DragDrop setDisplayWrongCodeMessage={setDisplayWrongCodeMessage} />
    </div>
  );
};

export default Game;
