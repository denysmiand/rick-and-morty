import { useEffect, useState } from "react";
import { Character, Gender, Status } from "./types";
import axios from "axios";

export const useFetchCharacters = () => {
  const [maxPages, setMaxPages] = useState(0);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Character[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [genderToFind, setGenderToFind] = useState<null | Gender>(null);
  const [statusToFind, setStatusToFind] = useState<null | Status>(null);

  useEffect(() => {
    const url = new URL(
      `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/character`
    );
    const params = [
      { name: "page", value: page },
      { name: "name", value: searchInput },
      { name: "gender", value: genderToFind },
      { name: "status", value: statusToFind },
    ];
    params
      .filter((param) => param.value)
      .forEach((param) =>
        url.searchParams.append(param.name, `${param.value}`)
      );

    axios
      .get(url.href)
      .then((response) => {
        setData(response.data.results);
        setMaxPages(response.data.info.pages);
      })
      .catch((error) => {
        setData([]);
        setMaxPages(0);
        console.log(error);
      });
  }, [page, searchInput, genderToFind, statusToFind]);

  useEffect(() => {
    setPage(1);
  }, [searchInput, genderToFind, statusToFind]);
  return {
    data,
    page,
    setPage,
    maxPages,
    searchInput,
    setSearchInput,
    genderToFind,
    setGenderToFind,
    statusToFind,
    setStatusToFind,
  };
};
