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
