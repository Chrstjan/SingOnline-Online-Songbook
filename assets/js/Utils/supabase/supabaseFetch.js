export const apiFetch = async (endpoint, key) => {
  let res = "";

  try {
    res = await fetch(endpoint, {
      headers: {
        apikey: key,
        Authorization: `Bearer ${key}`,
      },
    });
    if (res.ok) {
      const json = await res.json();
      return json;
    } else {
      throw new Error(`API request failed with status: ${response.status}`);
    }
  } catch (error) {
    console.error(`Error in data fetch: ${error}`);
  }
};
