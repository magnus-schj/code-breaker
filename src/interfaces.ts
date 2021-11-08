// colours
export interface Colour {
  hsl: string;
  id: string;
}

export interface ColoursType {
  [key: string]: Colour;
}

export interface NewColourOrigin extends Colour {
  dropId?: string;
}

// peg
export interface Peg {
  id: string;
  peg: Colour[];
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
  code: null | ColoursType;
  codeBroken: boolean;
  numTries: number;
  attempts: Attempt[];
  limit: number;
}
