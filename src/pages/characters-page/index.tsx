"use client";

import { Paginating } from "../../components/paginating";
import { SingleCharacter } from "./components/single-character";
import { Checkbox } from "./components/checkbox";
import { useFetchCharacters } from "@/utils/useFetchCharacters";

export const CharactersPage = () => {
  const {
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
  } = useFetchCharacters();

  const statuses = [
    {
      id: "no-selected-status",
      name: "None",
      checked: !statusToFind,
      onChange: () => {
        setStatusToFind(null);
      },
    },
    {
      id: "status-alive",
      name: "Alive",
      checked: statusToFind === "Alive",
      onChange: () => {
        setStatusToFind(statusToFind === "Alive" ? null : "Alive");
      },
    },
    {
      id: "status-dead",
      name: "Dead",
      checked: statusToFind === "Dead",
      onChange: () => {
        setStatusToFind(statusToFind === "Dead" ? null : "Dead");
      },
    },
    {
      id: "status-unknown",
      name: "Unknown",
      checked: statusToFind === "unknown",
      onChange: () => {
        setStatusToFind(statusToFind === "unknown" ? null : "unknown");
      },
    },
  ];

  const genders = [
    {
      id: "no-selected-gender",
      name: "None",
      checked: !genderToFind,
      onChange: () => {
        setGenderToFind(null);
      },
    },
    {
      id: "gender-male",
      name: "Male",
      checked: genderToFind === "Male",
      onChange: () => {
        setGenderToFind(genderToFind === "Male" ? null : "Male");
      },
    },
    {
      id: "gender-female",
      name: "Female",
      checked: genderToFind === "Female",
      onChange: () => {
        setGenderToFind(genderToFind === "Female" ? null : "Female");
      },
    },
    {
      id: "gender-genderless",
      name: "Genderless",
      checked: genderToFind === "Genderless",
      onChange: () => {
        setGenderToFind(genderToFind === "Genderless" ? null : "Genderless");
      },
    },
    {
      id: "gender-unknown",
      name: "Unknown",
      checked: genderToFind === "unknown",
      onChange: () => {
        setGenderToFind(genderToFind === "unknown" ? null : "unknown");
      },
    },
  ];

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

          {statuses.map((status) => (
            <Checkbox
              key={status.id}
              id={status.id}
              name={status.name}
              checked={status.checked}
              onChange={status.onChange}
            />
          ))}
        </div>

        <div className="flex items-center flex-wrap gap-3">
          <p className="font-bold">{"Gender:"}</p>
          {genders.map((gender) => (
            <Checkbox
              key={gender.id}
              id={gender.id}
              name={gender.name}
              checked={gender.checked}
              onChange={gender.onChange}
            />
          ))}
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
