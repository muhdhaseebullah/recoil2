import { atom } from "recoil";

const textState = atom({
  key: "textState",
  default: "Haseeb",
});

const arrayState = atom({
  key: "arrayState",
  default: [1, 2, 3, 4],
});

export { textState, arrayState };
