import { InitialOutputs, InputsData, PegsType } from "./interfaces";
import { v4 } from "uuid";

// available colours
// export const colourData: ColoursType = {
//   pinkOrigin: {
//     hsl: "hsl(329, 83%, 53%)",
//     id: "pinkOrigin",
//   },
//   purpleOrigin: {
//     hsl: "hsl(300, 100%, 14%)",
//     id: "purpleOrigin",
//   },
//   blueOrigin: {
//     hsl: "hsl(226, 65%, 35%)",
//     id: "blueOrigin",
//   },
//   greenOrigin: {
//     hsl: "hsl(149, 39%, 49%)",
//     id: "greenOrigin",
//   },
//   yellowOrigin: {
//     hsl: "hsl(54, 100%, 54%)",
//     id: "yellowOrigin",
//   },
//   orangeOrigin: {
//     hsl: "hsl(22, 100%, 56%)",
//     id: "orangeOrigin",
//   },
//   redOrigin: {
//     hsl: "hsl(356, 100%, 41%)",
//     id: "redOrigin",
//   },
// };

// // available inputs
// export const pegInputsData: PegsType = {
//   [v4()]: { id: "one", peg: [] },
//   [v4()]: { id: "two", peg: [] },
//   [v4()]: { id: "three", peg: [] },
//   [v4()]: { id: "four", peg: [] },
//   [v4()]: { id: "five",  },
// };

export const initialOutputs: InitialOutputs = {
  pink: {
    hsl: "hsl(329, 83%, 53%)",
    name: "pink",
  },
  pinker: {
    hsl: "hsl(354, 83%, 53%)",
    name: "pink",
  },
};

export const inputsData: InputsData = {
  [v4()]: {
    hsl: null,
    index: 0,
  },
  [v4()]: {
    hsl: null,
    index: 1,
  },
  [v4()]: {
    hsl: null,
    index: 2,
  },
};
