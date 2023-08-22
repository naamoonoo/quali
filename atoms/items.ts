import { atom } from "recoil";

export interface Item {
  id: string;
  name: string;
}

export const itemsState = atom<Item[]>({
  key: "items",
  default: [],
});
