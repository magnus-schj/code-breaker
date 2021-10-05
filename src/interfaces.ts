export interface Colour {
  id: string;
  hsl: string;
}

export interface PegHolder {
  colour: string | null;
  id: string;
}

export interface PegInputs {
  one: PegInput;
  two: PegInput;
  three: PegInput;
}

interface PegInput {
  colour: string | null;
}

export interface Colours {
  pickRed: Colour;
  pickGreen: Colour;
  pickBlue: Colour;
}

export interface Colour {
  id: string;
  hsl: string;
}
