import { http, HttpResponse, PathParams } from "msw";
import { BASE_DATA } from "../shared/constants";
import { CardData } from "../shared/typings";
import { delay } from "../shared/utils/delay";

export const handlers = [
  http.get(`/cards`, async () => {
    const localData = localStorage.getItem("cards");
    await delay(2000);
    return HttpResponse.json({
      cards: localData ? JSON.parse(localData) : BASE_DATA,
    });
  }),
  http.post<PathParams, { cards: CardData[] }>(
    `/cards`,
    async ({ request }) => {
      const data = await request.json();
      await delay(2000);
      localStorage.setItem("cards", JSON.stringify(data.cards));
      return HttpResponse.json(
        {
          data,
        },
        { status: 201 }
      );
    }
  ),
  http.put<PathParams, { card: CardData }>(
    `/cards/:id`,
    async ({ request, params }) => {
      const data = await request.json();
      const localData = localStorage.getItem("cards");
      if (!localData) {
        return HttpResponse.json(
          {
            message: "Card not found",
          },
          { status: 404 }
        );
      }
      const cards = JSON.parse(localData);
      const cardIndex = cards.findIndex(
        (card: CardData) => card.id === params.id
      );
      if (cardIndex === -1) {
        return HttpResponse.json(
          {
            message: "Card not found",
          },
          { status: 404 }
        );
      }
      cards[cardIndex] = data.card;
      localStorage.setItem("cards", JSON.stringify(cards));
      return HttpResponse.json(
        {
          data,
        },
        { status: 200 }
      );
    }
  ),
];
