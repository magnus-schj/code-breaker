export interface Colour {
  hsl: string;
  id: string;
}

export interface ColoursType {
  [key: string]: Colour;
}

export interface PegInputType {
  id: string;
  peg: Colour[];
}

export interface PegInputsType {
  [key: string]: PegInputType;
}

export interface NewColourOrigin extends Colour {
  dropId?: string;
}

// ------------------------------------------------

export interface Attempt {
  black: number;
  white: number;
}

export interface CodeSlice {
  code: null | ColoursType;
  codeBroken: boolean;
  numTries: number;
  attempts: Attempt[];
}
