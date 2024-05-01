import { CardData } from "../typings";

export async function fetchCards(): Promise<CardData[]> {
  const response = await fetch(`/cards`);
  const data: { cards: CardData[] } = await response.json();
  return data.cards;
}

export async function saveCards(cards: CardData[]): Promise<Response> {
  return await fetch(`/cards`, {
    method: "POST",
    body: JSON.stringify({ cards }),
  });
}

export async function updateCard(card: CardData): Promise<Response> {
  return await fetch(`/cards/${card.id}`, {
    method: "PUT",
    body: JSON.stringify({ card }),
  });
}
