import { Colour, InitialOutputs } from "../../interfaces";
import DragDrop from "../DragDrop/DragDrop.component";
import GameOver from "../GameOver.component";
import Victory from "../Victory.component";

export const generateCode = (keys: string[], colours: InitialOutputs) => {
  const code: InitialOutputs = {};

  const pickRandomColour = (obj: InitialOutputs) => {
    const colourKeys = Object.keys(obj);
    return obj[colourKeys[Math.floor(colourKeys.length * Math.random())]];
  };

  const usedColours: Colour[] = [];
  let i = 0;
  while (usedColours.length < keys.length) {
    const newColour = pickRandomColour(colours);
    const isColourUsed = usedColours.find((colour) => colour === newColour);

    if (isColourUsed) continue;
    code[keys[i]] = newColour;
    usedColours.push(newColour);
    i++;
  }
  return code;
};

// decides wherever to render the inputs and outputs, a game over screen or victory screen
export const renderDragDrop = (gameOver: boolean, codeBroken: boolean) => {
  if (codeBroken) return <Victory />;
  return gameOver ? <GameOver /> : <DragDrop />;
};
