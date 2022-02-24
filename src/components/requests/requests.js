export const getRequest = async (query, setData) => {
  const url =
    "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party";
  const token = "c40fef3d1609f56aa0cc22d49aa5c5b1ef5b3dcf";
  const options = {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Token " + token,
    },
    body: JSON.stringify({ query }),
  };
  const resultsJson = await fetch(url, options);
  const results = await resultsJson.json();
  setData(results.suggestions);
  return results;
};
