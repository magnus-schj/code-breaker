import { FC, useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";
import { makeCode } from "../../features/code/code.slice";
import { colourData } from "../../initialData";

import { AppBar, Toolbar, Button, IconButton } from "@mui/material";
import { Help } from "@mui/icons-material/";
import { generateCode } from "./utils";
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
