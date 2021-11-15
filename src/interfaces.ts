import { TypeBackground } from "@mui/material/styles/createPalette";
import { v4 } from "uuid";

// colours
export interface Colour {
  hsl: string;
  name: string;
}

export interface InitialOutputs {
  [key: string]: Colour;
}
export interface NewColourOrigin extends Colour {
  dropId?: string;
}

// input
export interface Input {
  hsl: string | null | undefined;
  index: number;
  name: string | null | undefined;
}
export interface InputsData {
  [key: string]: Input;
}

// code slice
export interface Attempt {
  black: number;
  white: number;
  colours?: (string | number | undefined)[];
}

export interface CodeSlice {
  code: null | InitialOutputs;
  codeBroken: boolean;
  numTries: number;
  attempts: Attempt[];
  limit: number;
}
