import { useQuery } from "react-query";
import { BACKEND_DATA_QUERY } from "../graphql-query";

export const useDataHooks = () => {
  const endpoint = "https://aitecell.herokuapp.com/graphql/";

  return useQuery("launches", () => {
    return fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: BACKEND_DATA_QUERY }),
    })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("Error fetching data");
        } else {
          return response.json();
        }
      })
      .then((data) => {
        return data.data;
      });
  });
};
