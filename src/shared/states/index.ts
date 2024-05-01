import { atom } from "jotai";
import { CardData, MediaViewerData } from "../typings";

export const cardsAtom = atom<CardData[]>([]);

export const mediaViewerAtom = atom<MediaViewerData>({
  isOpen: false,
  data: null,
});
