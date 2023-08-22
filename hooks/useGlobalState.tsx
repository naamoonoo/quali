import { atoms } from "@/atoms";
import { RecoilState, atom, useRecoilState } from "recoil";

export const useGlobalState = <T extends object>(
  key: string,
  initialState: T
) => {
  const atom = getAtom<T>(key, initialState) as RecoilState<T>;
  return useRecoilState(atom);
};

const getAtom = <T extends object>(key: string, initialState: T) => {
  const storedAtom = atoms.get(key);
  if (storedAtom) return storedAtom;
  const createdAtom = atom<T>({
    key,
    default: initialState,
  });
  atoms.set(key, createdAtom);
  return createdAtom;
};
