import { atom, selector } from "recoil";

export const selectedMenuItem = atom({
  key: "selectedMenuItem",
  default: 0
});

export const elapsedTimeState = selector({
  key: "currentTimeSelector",
  get: ({ get }) => new Date().getTime() - get(selectedMenuItem)
});
