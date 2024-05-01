import { atom } from "jotai";
import { CardData } from "../../../shared/typings";

export const cardsAtom = atom<CardData[]>([]);
