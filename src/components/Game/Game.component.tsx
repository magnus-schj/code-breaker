import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../App/hooks";

import "./game.styles.css";
import { colourData } from "../../initialData";
import { makeCode } from "../../features/code/code.slice";
import { generateCode } from "./utils";
import { Button } from "@material-ui/core";
import DragDrop from "../DragDrop.component";

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
      <header id="game-header">
        <Button variant="contained">Quit</Button>
        <Button variant="contained">Help</Button>
      </header>
      <DragDrop setDisplayWrongCodeMessage={setDisplayWrongCodeMessage} />
      {codeSlice.codeBroken && (
        <>
          <h1>Gratulerer! du vant!</h1>
          <h2>Du klarte det på {codeSlice.numTries} forsøk</h2>
        </>
      )}
      {displayWrongCodeMessage && <h1>Feil! Prøv igjen!</h1>}
    </div>
  );
};

export default Game;
