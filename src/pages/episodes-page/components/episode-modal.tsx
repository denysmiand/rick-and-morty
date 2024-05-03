import { Episode } from "@/utils/types";
import CloseIcon from "@/assets/close-icon.svg";
import ImagePlaceholder from "@/assets/episode_placeholder.jpg";
import { useState } from "react";
import { useFetchCharactersById } from "@/utils/useFetchCharactersById";
import { ModalCharacter } from "@/components/modal-character";

type EpisodeModalProps = {
  episode: Episode;
  closeModalEvent: () => void;
};

export const EpisodeModal = ({
  episode,
  closeModalEvent,
}: EpisodeModalProps) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const characterIds = episode.characters.map((char) => {
    const match = char.match(/\/(\d+)$/);
    return match ? match[1] : null;
  });

  const { characters } = useFetchCharactersById(characterIds);

  const charactersToShow = isShowMore
    ? characters
    : characters.filter((char, i) => i < 3);

  return (
    <div className="z-50 fixed top-0 left-0 w-full h-full bg-black/70 flex justify-center items-center">
      <div className="relative w-1/3 h-[90%] bg-gray-100 py-[20px] mob:w-[90%]">
        <button
          className="absolute top-0 right-0 translate-y-[-50%] translate-x-[50%] p-[5px] bg-gray-50 rounded-[50%] shadow-around-sm hover:bg-gray-100 mob:p-[10px]"
          onClick={closeModalEvent}
        >
          <img className="size-4 mob:size-6" src={CloseIcon.src} alt="close" />
        </button>
        <div className="h-full w-full py-[20px] px-[20px] bg-white flex flex-col gap-3 items-center overflow-auto">
          <img width={"60%"} src={ImagePlaceholder.src} alt="ep image" />
          <p>{episode.name}</p>
          <p>
            <b>{"Release date: "}</b> {episode.air_date}
          </p>
          <p>
            <b>{"Episode id: "}</b>
            {episode.episode}
          </p>
          <p>
            <b>{"Characters "}</b>
            {characters.length > 3 && (
              <button
                className=" border border-blue-600 rounded p-2"
                onClick={() => {
                  setIsShowMore((p) => !p);
                }}
              >
                {isShowMore ? "Hide" : "Load more"}
              </button>
            )}
          </p>
          <div className="relative grid grid-cols-3 gap-3">
            {charactersToShow.map((character) => (
              <ModalCharacter
                key={character.id}
                name={character.name}
                image={character.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
