import { BaseDataTypes, CardData, ImageData } from "../typings";

export const API_URL = "https://example.com";

export const BASE_DATA: CardData[] = [
  {
    id: "b69aa6a1-31bd-43f3-be69-7470deb2ba62",
    type: BaseDataTypes.BANK_DRAFT,
    title: "Bank Draft",
  },
  {
    id: "ec6278be-9811-48c5-967e-26f2d11bc33f",
    type: BaseDataTypes.BILL_OF_LADING,
    title: "Bill of Lading",
  },
  {
    id: "712ffa1f-8636-44c7-ae21-01a8c0a2a04a",
    type: BaseDataTypes.INVOICE,
    title: "Invoice",
  },
  {
    id: "51ea793b-f248-4551-a214-c889659200c9",
    type: BaseDataTypes.BANK_DRAFT_2,
    title: "Bank Draft 2",
  },
  {
    id: "81c24d11-d217-46b3-8885-056c2f1be23f",
    type: BaseDataTypes.BILL_OF_LADING_2,
    title: "Bill of Lading 2",
  },
];

export const CARD_IMAGE_MAP: Record<BaseDataTypes, ImageData> = {
  [BaseDataTypes.BANK_DRAFT]: {
    img: "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    placeholder: "https://placehold.co/400",
  },
  [BaseDataTypes.BILL_OF_LADING]: {
    img: "https://images.unsplash.com/photo-1714415573193-1c6ac4c6674b?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    placeholder: "https://placehold.co/400",
  },
  [BaseDataTypes.INVOICE]: {
    img: "https://images.unsplash.com/photo-1714182370418-a22ee27e11ea?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    placeholder: "https://placehold.co/400",
  },
  [BaseDataTypes.BANK_DRAFT_2]: {
    img: "https://images.pexels.com/photos/1645668/pexels-photo-1645668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    placeholder: "https://placehold.co/400",
  },
  [BaseDataTypes.BILL_OF_LADING_2]: {
    img: "https://images.unsplash.com/photo-1714182370392-a32d43080717?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    placeholder: "https://placehold.co/400",
  },
};
