import { Colour, ColourData, PegInputs, PegInputType } from "./interfaces";

export const colourData: { [key: string]: Colour } = {
  redOrigin: {
    hsl: "hsl(356, 100%, 41%)",
    id: "redOrigin",
  },
  blueOrigin: {
    hsl: "hsl(226, 65%, 35%)",
    id: "blueOrigin",
  },
};

export const pegInputsData: { [key: string]: PegInputType } = {
  one: { id: "one", peg: [] },
  two: { id: "two", peg: [] },
};
