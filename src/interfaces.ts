export interface Colour {
  hsl: string;
  id: string;
}

export interface ColourData {
  redOrigin: Colour;
  blueOrigin: Colour;
}

export interface PegInputType {
  id: string;
  peg: Colour[];
}

export interface PegInputs {
  one: PegInputType;
  two: PegInputType;
}
