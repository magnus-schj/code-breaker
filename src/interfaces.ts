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
}
export interface InputsData {
  [key: string]: Input;
}

// peg
export interface Peg {
  id: string;
  peg: Colour;
}

export interface PegsType {
  [key: string]: Peg;
}

// code slice
export interface Attempt {
  black: number;
  white: number;
  colours?: string[];
}

export interface CodeSlice {
  code: null | InitialOutputs;
  codeBroken: boolean;
  numTries: number;
  attempts: Attempt[];
  limit: number;
}
