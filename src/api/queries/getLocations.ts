import { gql, useQuery } from "@apollo/client";

export const useGetLocations = (page: number) => {
  const { loading, error, data } = useQuery(getLocations, {
    variables: {
      page,
    },
  });
  return { loading, error, data };
};

const getLocations = gql`
  query ($page: Int!) {
    locations(page: $page) {
      info {
        pages
      }
      results {
        id
        name
        type
        dimension
        residents {
          id
          name
          image
        }
        created
      }
    }
  }
`;
