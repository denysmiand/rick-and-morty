"use client";

import { Episode } from "@/utils/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { SingleEpisode } from "./single-episode";
import { EpisodeModal } from "./episode-modal";

export const EpisodesPage = () => {
  const [maxPages, setMaxPages] = useState(0);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Episode[]>([]);
  const [selectedEpisode, setSelectedEpisode] = useState<null | Episode>(null);

  const handleEpisodeClick = (episode: Episode) => {
    setSelectedEpisode(episode);
  };

  const handleCloseModal = () => {
    setSelectedEpisode(null);
  };

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/episode/?page=${page}`)
      .then((response) => {
        setData(response.data.results);
        setMaxPages(response.data.info.pages);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const pages = Array.from({ length: maxPages }, (_, index) => index);

  return (
    <>
      {selectedEpisode && (
        <EpisodeModal
          episode={selectedEpisode}
          closeModalEvent={handleCloseModal}
        />
      )}
      <div
        className={`h-fit px-[20%] py-5 grid grid-cols-4 gap-4 mob:px-[5%] mob:grid-cols-3`}
      >
        {data.map((episode) => (
          <SingleEpisode
            episode={episode}
            key={episode.id}
            episodeClickEvent={handleEpisodeClick}
          />
        ))}
      </div>
      {pages.length > 1 && (
        <div className="px-[20%] py-5 flex flex-row  justify-end gap-3 mob:px-[5%]">
          {pages.map((_, i) => (
            <div
              key={i}
              className={`size-8 border-2 cursor-pointer flex flex-row items-center justify-center leading-none hover:bg-neutral-200  ${
                i + 1 === page && "bg-neutral-300"
              }`}
              onClick={() => {
                setPage(i + 1);
              }}
            >
              <p>{i + 1}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
