import { formatDate } from "@/utils/functions";
import { Character } from "@/utils/types";

type CharacterProps = {
  character: Character;
};

export const SingleCharacter = ({ character }: CharacterProps) => {
  return (
    <div className="z-30  shadow-around-sm p-3 flex flex-col place-items-center gap-1 text-sm hover:shadow-around ">
      <img width={"100%"} src={character.image} alt="ep image" />
      <CharacterInfo character={character} />
    </div>
  );
};

const CharacterInfo = ({ character }: { character: Character }) => {
  return Object.entries(character).map(([label, value]) => {
    if (typeof value === "object") return;
    if (value.toString().includes("https")) return null;

    return (
      <p key={label}>
        <b className="capitalize">{`${label}: `}</b>
        {label === "created" ? formatDate(value) : value}
      </p>
    );
  });
};
