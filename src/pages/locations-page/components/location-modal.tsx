import { Location } from "@/utils/types";
import CloseIcon from "@/assets/close-icon.svg";
import ImagePlaceholder from "@/assets/location_placeholder.png";
import { useState } from "react";
import { formatDate } from "@/utils/functions";
import { ModalCharacter } from "@/components/modal-character";

type LocationModalProps = {
  location: Location;
  closeModalEvent: () => void;
};

export const LocationModal = ({
  location,
  closeModalEvent,
}: LocationModalProps) => {
  const characters = location.residents;
  const [isShowMore, setIsShowMore] = useState(false);

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
          <p>{location.name}</p>
          <p>
            <b>{"Created: "}</b> {formatDate(location.created)}
          </p>
          <p>
            <b>{"Id: "}</b>
            {location.id}
          </p>
          <p>
            <b>{"Residents "}</b>
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
          {!characters.length && <p className="">{"No residents found"}</p>}
          <div className="relative grid grid-cols-3 gap-3">
            {charactersToShow.map((character) => (
              <ModalCharacter
                key={character.id}
                image={character.image}
                name={character.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
