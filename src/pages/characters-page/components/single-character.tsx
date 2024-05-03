import { formatDate } from "@/utils/functions";
import { Character } from "@/utils/types";

type CharacterProps = {
  character: Character;
};

export const SingleCharacter = ({ character }: CharacterProps) => {
  return (
    <div className="z-30  shadow-around-sm p-3 flex flex-col place-items-center gap-1 text-sm hover:shadow-around ">
      <img width={"100%"} src={character.image} alt="ep image" />

      <p>
        <b>{"Name: "}</b>
        {character.name}
      </p>

      <p>
        <b>{"Id: "}</b> {character.id}
      </p>

      <p>
        <b>{"Created: "}</b>
        {formatDate(character.created)}
      </p>

      <p>
        <b>{"Gender: "}</b>
        {character.gender}
      </p>

      <p>
        <b>{"Species: "}</b> {character.species}
      </p>

      <p>
        <b>{"Type: "}</b> {character.type || "No type"}
      </p>

      <p>
        <b>{"Origin: "}</b> {character.origin.name}
      </p>

      <p>
        <b>{"Location: "}</b> {character.location.name}
      </p>

      <p>
        <b>{"Status: "}</b> {character.status}
      </p>
    </div>
  );
};
