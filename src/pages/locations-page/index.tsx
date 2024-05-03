"use client";

import { Paginating } from "@/Components/paginating";
import { useGetLocations } from "@/api/queries/getLocations";
import { Location, getLocationsResponse } from "@/utils/types";
import { ApolloError } from "@apollo/client";
import { useState } from "react";
import { SingleLocation } from "./components/single-location";
import { LocationModal } from "./components/location-modal";

export const LocationsPage = () => {
  const [page, setPage] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState<null | Location>(
    null
  );

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleCloseModal = () => {
    setSelectedLocation(null);
  };

  const {
    data,
    loading,
    error,
  }: { data: getLocationsResponse; loading: boolean; error?: ApolloError } =
    useGetLocations(page);

  if (loading)
    return (
      <div className="w-full px-[20%] mob:px-[5%] flex flex-row grow justify-center items-center">
        <p className="text-center self-center text-[24px] font-bold ">
          {"Loading..."}
        </p>
      </div>
    );

  if (error)
    return (
      <div className="w-full px-[20%] mob:px-[5%] flex flex-row grow justify-center items-center">
        <p className="text-center text-[24px] font-bold ">{error.message}</p>
      </div>
    );

  const maxPages = data.locations.info.pages;
  const locations = data.locations.results;

  return (
    <div className="px-[20%] mob:px-[5%]">
      {selectedLocation && (
        <LocationModal
          location={selectedLocation}
          closeModalEvent={handleCloseModal}
        />
      )}
      <div className={`h-fit py-5 grid grid-cols-4 gap-4 mob:grid-cols-2`}>
        {locations.map((location) => (
          <SingleLocation
            location={location}
            key={location.id}
            locationClickEvent={handleLocationClick}
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
