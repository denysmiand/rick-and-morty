"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { Paginating } from "../../Components/paginating";
import { SingleCharacter } from "./components/single-character";
import { Character, Gender, Status } from "@/utils/types";
import { Checkbox } from "./components/checkbox";

export const CharactersPage = () => {
  const [maxPages, setMaxPages] = useState(0);
  const [page, setPage] = useState(1);
  const [data, setData] = useState<Character[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [genderToFind, setGenderToFind] = useState<null | Gender>(null);
  const [statusToFind, setStatusToFind] = useState<null | Status>(null);

  useEffect(() => {
    axios
      .get(
        `${process.env.NEXT_PUBLIC_REST_API_ENDPOINT}/character/?page=${page}${
          searchInput ? "&name=" + searchInput : ""
        }${genderToFind ? "&gender=" + genderToFind : ""}${
          statusToFind ? "&status=" + statusToFind : ""
        }`
      )
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

  return (
    <div className="px-[20%] mob:px-[5%] flex flex-col grow justify-between">
      <div className="py-[20px] flex flex-col gap-2">
        <b>{"Search by name"}</b>

        <input
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          className="h-[40px] px-3 border border-blue-600 rounded focus:outline-blue-700"
        />

        <b>{"Filters"}</b>

        <div className="flex items-center  flex-wrap gap-3">
          <p className="font-bold">{"Status: "}</p>
          <Checkbox
            id="no-selected-status"
            name="None"
            checked={!statusToFind}
            onChange={() => {
              setStatusToFind(null);
            }}
          />

          <Checkbox
            id="status-alive"
            name="Alive"
            checked={statusToFind === "Alive"}
            onChange={() => {
              setStatusToFind(statusToFind === "Alive" ? null : "Alive");
            }}
          />
          <Checkbox
            id="status-dead"
            name="Dead"
            checked={statusToFind === "Dead"}
            onChange={() => {
              setStatusToFind(statusToFind === "Dead" ? null : "Dead");
            }}
          />
          <Checkbox
            id="status-unknown"
            name="Unknown"
            checked={statusToFind === "unknown"}
            onChange={() => {
              setStatusToFind(statusToFind === "unknown" ? null : "unknown");
            }}
          />
        </div>

        <div className="flex items-center flex-wrap gap-3">
          <p className="font-bold">{"Gender:"}</p>
          <Checkbox
            id="no-selected-gender"
            name="None"
            checked={!genderToFind}
            onChange={() => {
              setGenderToFind(null);
            }}
          />

          <Checkbox
            id="gender-male"
            name="Male"
            checked={genderToFind === "Male"}
            onChange={() => {
              setGenderToFind(genderToFind === "Male" ? null : "Male");
            }}
          />

          <Checkbox
            id="gender-female"
            name="Female"
            checked={genderToFind === "Female"}
            onChange={() => {
              setGenderToFind(genderToFind === "Female" ? null : "Female");
            }}
          />

          <Checkbox
            id="gender-genderless"
            name="Genderless"
            checked={genderToFind === "Genderless"}
            onChange={() => {
              setGenderToFind(
                genderToFind === "Genderless" ? null : "Genderless"
              );
            }}
          />

          <Checkbox
            id="gender-unknown"
            name="Unknown"
            checked={genderToFind === "unknown"}
            onChange={() => {
              setGenderToFind(genderToFind === "unknown" ? null : "unknown");
            }}
          />
        </div>
      </div>
      {!data.length && (
        <p className="text-center text-[24px] font-bold">{"No Data"}</p>
      )}
      <div className={`h-fit  py-5 grid grid-cols-4 gap-4 mob:grid-cols-2`}>
        {data.map((character) => (
          <SingleCharacter character={character} key={character.id} />
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
