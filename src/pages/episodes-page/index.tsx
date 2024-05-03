"use client";

import { Episode } from "@/utils/types";
import axios from "axios";
import { useEffect, useState } from "react";
import { SingleEpisode } from "./components/single-episode";
import { EpisodeModal } from "./components/episode-modal";
import { Paginating } from "../../components/paginating";

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
    <div className="px-[20%] mob:px-[5%]">
      {selectedEpisode && (
        <EpisodeModal
          episode={selectedEpisode}
          closeModalEvent={handleCloseModal}
        />
      )}
      <div className={`h-fit py-5 grid grid-cols-4 gap-4 mob:grid-cols-2`}>
        {data.map((episode) => (
          <SingleEpisode
            episode={episode}
            key={episode.id}
            episodeClickEvent={handleEpisodeClick}
          />
        ))}
      </div>
      {maxPages > 1 && (
        <Paginating
          currentPage={page}
          pagesQty={maxPages}
          setPageEvent={setPage}
        />
      )}
    </div>
  );
};
