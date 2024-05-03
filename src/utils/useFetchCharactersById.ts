import axios from "axios";
import { useEffect, useState } from "react";
import { Character } from "./types";

export const useFetchCharactersById = (characterIds: (string | null)[]) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/character/${characterIds}`
      )
      .then((response) => {
        setCharacters(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    // I thought of two ways of handling rendering of three characters and then rendering the rest of them:
    // either requesting all characters of the episode at once, or requesting first three and then the rest later when load more button is clicked.
    // After checking the response time, I've come to conclusion that there is no sense in splitting it into two separate requests as response time hasn't changed so I sticked with the first option.
  }, []);
  return { characters };
};
