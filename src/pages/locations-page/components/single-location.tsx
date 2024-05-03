import { Location } from "@/utils/types";
import ImagePlaceholder from "@/assets/location_placeholder.png";
import { formatDate } from "@/utils/functions";

type LocationProps = {
  location: Location;
  locationClickEvent: (location: Location) => void;
};

export const SingleLocation = ({
  location,
  locationClickEvent,
}: LocationProps) => {
  return (
    <div
      className="z-30  shadow-around-sm p-3 cursor-pointer flex flex-col place-items-center gap-1 text-sm hover:shadow-around "
      onClick={() => {
        locationClickEvent(location);
      }}
    >
      <img width={"100%"} src={ImagePlaceholder.src} alt="ep image" />
      <p>
        <b>{"Name: "}</b>
        {location.name}
      </p>
      <p>
        <b>{"Id: "}</b>
        {location.id}
      </p>
      <p>
        <b>{"Created: "}</b> {formatDate(location.created)}
      </p>
    </div>
  );
};
