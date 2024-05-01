export interface CardData {
  type: BaseDataTypes;
  title: string;
  id: string;
}

export enum BaseDataTypes {
  BANK_DRAFT = "bank-draft",
  BILL_OF_LADING = "bill-of-lading",
  INVOICE = "invoice",
  BANK_DRAFT_2 = "bank-draft-2",
  BILL_OF_LADING_2 = "bill-of-lading-2",
}

export interface ImageData {
  img: string;
  placeholder?: string;
}

export interface MediaViewerData {
  isOpen: boolean;
  data: CardData | null;
}
