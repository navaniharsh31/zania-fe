import { useCallback, useEffect, useState } from "react";

import isEqual from "lodash.isequal";
import { useAtom, useAtomValue } from "jotai";
import { mediaViewerAtom } from "../../../shared/states";
import usePrevious from "../../../shared/hooks/usePrevious";
import { fetchCards, saveCards } from "../requests";
import Card from "../../../shared/components/molecules/card";
import { CARD_IMAGE_MAP } from "../../../shared/constants";
import Spinner from "../../../shared/components/atoms/spinner";
import MediaViewer from "../../../shared/components/molecules/media-viewer";
import { cardsAtom } from "../states";

function HomePage() {
  const [cards, setCards] = useAtom(cardsAtom);
  const mediaViewerState = useAtomValue(mediaViewerAtom);
  const prevCards = usePrevious(cards);
  const [saving, setSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | undefined>(undefined);
  const [loadingData, setLoadingData] = useState(true);

  const fetchInitialData = useCallback(async () => {
    try {
      const data = await fetchCards();
      setCards(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingData(false);
    }
  }, [setCards]);

  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  const handleOnSave = useCallback(async () => {
    try {
      setSaving(true);
      await saveCards(cards);
      setLastSaved(new Date());
    } catch (error) {
      console.error(error);
    } finally {
      setSaving(false);
    }
  }, [cards]);

  useEffect(() => {
    if (!prevCards || !prevCards.length || !cards || !cards.length) return;
    const interval = setInterval(() => {
      if (!isEqual(prevCards, cards)) {
        handleOnSave();
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [cards, handleOnSave, prevCards]);

  useEffect(() => {
    if (mediaViewerState.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [mediaViewerState.isOpen]);

  return (
    <>
      <main className="h-screen bg-white text-black w-screen">
        <nav className="border border-b-slate text-black p-4 flex items-center justify-between">
          <h1 className="text-xl font-bold">Zania</h1>
          <div className="flex gap-4 items-center">
            {!saving ? (
              lastSaved ? (
                <p>Last saved at: {lastSaved.toLocaleString()}</p>
              ) : null
            ) : (
              <Spinner />
            )}
            <button
              disabled={saving || loadingData}
              onClick={handleOnSave}
              type="button"
              className="text-white disabled:bg-gray-200 bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none "
            >
              Save
            </button>
          </div>
        </nav>
        {!loadingData ? (
          <div className="flex flex-wrap justify-center">
            {cards.map((card) => (
              <div
                className="flex-[0_0_calc(33.33%-10px)] p-[10px]"
                key={card.id}
              >
                <Card
                  key={card.id}
                  data={card}
                  imageData={CARD_IMAGE_MAP[card.type]}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center h-full flex-col gap-2 justify-center">
            <Spinner />
            <p>Loading cards...</p>
          </div>
        )}
      </main>
      {mediaViewerState.isOpen ? <MediaViewer /> : null}
    </>
  );
}

export default HomePage;
