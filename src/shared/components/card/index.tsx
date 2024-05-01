import { useCallback } from "react";
import { CardData, ImageData } from "../../typings";
import ProgressiveImage from "../progressive-image";
import { cardsAtom, mediaViewerAtom } from "../../states";
import { useSetAtom } from "jotai";
import { useDrag, useDrop } from "react-dnd";

interface CardProps {
  data: CardData;
  imageData: ImageData;
}

const Card = ({ data, imageData }: CardProps) => {
  const setMediaViewerState = useSetAtom(mediaViewerAtom);
  const setCards = useSetAtom(cardsAtom);
  const handleOnClickCard = useCallback(() => {
    setMediaViewerState({ isOpen: true, data });
  }, [data, setMediaViewerState]);

  const [{ isDragging }, drag] = useDrag({
    type: "CARD",
    item: { id: data.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "CARD",
    hover: (item: { id: string }) => {
      const dragIndex = item.id;
      const hoverIndex = data.id;
      if (dragIndex === hoverIndex) {
        return;
      }
      setCards((prev) => {
        const newCards = [...prev];
        const dragCard = prev.find((card) => card.id === dragIndex);
        const hoverCard = prev.find((card) => card.id === hoverIndex);
        if (!dragCard || !hoverCard) {
          return prev;
        }
        const dragIndexInArray = prev.indexOf(dragCard);
        const hoverIndexInArray = prev.indexOf(hoverCard);
        newCards.splice(dragIndexInArray, 1);
        newCards.splice(hoverIndexInArray, 0, dragCard);
        return newCards;
      });
    },
  });

  return (
    <div
      onClick={handleOnClickCard}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      ref={(node) => drag(drop(node))}
      className="w-full cursor-grab overflow-hidden border border-gray-200 rounded-lg shadow text-black bg-slate-100"
    >
      <ProgressiveImage
        src={imageData.img}
        placeholder={imageData.placeholder}
        alt={data.title}
      />
      <div className="p-5">
        <h5 className="mb-2 text-md text-center font-bold ">{data.title}</h5>
      </div>
    </div>
  );
};

export default Card;
