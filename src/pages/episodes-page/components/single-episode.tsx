import { Episode } from "@/utils/types";
import ImagePlaceholder from "@/assets/episode_placeholder.jpg";

type EpisodeProps = {
  episode: Episode;
  episodeClickEvent: (episode: Episode) => void;
};

export const SingleEpisode = ({ episode, episodeClickEvent }: EpisodeProps) => {
  return (
    <div
      className="z-30  shadow-around-sm p-3 cursor-pointer flex flex-col place-items-center gap-1 text-sm hover:shadow-around "
      onClick={() => {
        episodeClickEvent(episode);
      }}
    >
      <img width={"100%"} src={ImagePlaceholder.src} alt="ep image" />
      <p>{episode.name}</p>
      <p>
        <b>{"Release date: "}</b> {episode.air_date}
      </p>
      <p>
        <b>{"Episode id: "}</b>
        {episode.episode}
      </p>
    </div>
  );
};
