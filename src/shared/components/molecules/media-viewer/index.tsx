import { useAtom } from "jotai";
import { mediaViewerAtom } from "../../../states";
import { useEffect, useRef } from "react";
import { CARD_IMAGE_MAP } from "../../../constants";

const MediaViewer = () => {
  const [state, setState] = useAtom(mediaViewerAtom);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setState({ isOpen: false, data: null });
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  if (!state.isOpen || !state.data) return null;

  return (
    <div className="w-screen h-screen px-6 bg-slate-100 z-50 absolute top-0 text-black">
      <div className="flex justify-between p-6">
        <h1 className="text-xl font-bold">{state.data.title ?? "Image"}</h1>
        <button
          onClick={() => setState({ isOpen: false, data: null })}
          className="text-xl font-bold"
        >
          X
        </button>
      </div>
      <img
        ref={imgRef}
        src={CARD_IMAGE_MAP[state.data.type]?.img}
        alt={state.data.title}
        className="w-full max-w-full h-auto max-h-[650px] object-contain"
      />
    </div>
  );
};

export default MediaViewer;
