import { useEffect } from "react";
import {
  Attempt,
  CodeSlice,
  Colour,
  InitialOutputs,
  PegsType,
} from "../../interfaces";

export const generateCode = (keys: string[], colours: InitialOutputs) => {
  const code: InitialOutputs = {};
  const cKeys = Object.keys(colours);

  console.log(cKeys[Math.floor(Math.random() * Object.keys(colours).length)]);

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
