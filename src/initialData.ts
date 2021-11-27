import { InitialOutputs, InputsData } from "./interfaces";
import { v4 } from "uuid";

// available colours
export const initialOutputs: InitialOutputs = {
  purple: {
    hsl: "hsl(280, 83%, 53%)",
    name: "purple",
  },
  pink: {
    hsl: "hsl(329, 83%, 53%)",
    name: "pink",
  },
  red: {
    hsl: "hsl(354, 83%, 53%)",
    name: "red",
  },
  yellow: {
    hsl: "hsl(400, 83%, 53%)",
    name: "yellow",
  },
  green: {
    hsl: "hsl(450, 83%, 53%)",
    name: "green",
  },
};

// inputs
export const inputsData: InputsData = {
  zero: {
    hsl: null,
    name: null,
    index: 0,
  },
  one: {
    hsl: null,
    name: null,
    index: 1,
  },
  two: {
    hsl: null,
    name: null,
    index: 2,
  },
  three: {
    hsl: null,
    name: null,
    index: 3,
  },
  four: {
    hsl: null,
    name: null,
    index: 4,
  },
};
