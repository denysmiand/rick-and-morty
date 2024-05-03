type ModalCharacterProps = {
  image: string;
  name: string;
};

export const ModalCharacter = ({ image, name }: ModalCharacterProps) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <img width={"100%"} src={image} alt={`${name}`} />
      <p>
        <b>{"Name: "}</b>
        {name}
      </p>
    </div>
  );
};
