import { atom } from "jotai";
import { MediaViewerData } from "../typings";

export const mediaViewerAtom = atom<MediaViewerData>({
  isOpen: false,
  data: null,
});
