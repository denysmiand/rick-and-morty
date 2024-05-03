export type Episode = {
  air_date: string;
  characters: string[];
  created: string;
  episode: string;
  id: number;
  name: string;
  url: string;
};

export type Character = {
  created: string;
  episode: string[];
  gender: Gender;
  id: number;
  image: string;
  location: { name: string; url: string };
  name: string;
  origin: { name: string; url: string };
  species: string;
  status: Status;
  type: string;
  url: string;
};

export type Gender = "Female" | "Male" | "Genderless" | "unknown";
export type Status = "Alive" | "Dead" | "unknown";

export type getLocationsResponse = {
  locations: {
    info: {
      pages: number;
    };
    results: Location[];
  };
};

export type Location = {
  created: string;
  dimension: string;
  id: string | number;
  name: string;
  residents: {
    id: string | number;
    image: string;
    name: string;
  }[];
  type: string;
};
