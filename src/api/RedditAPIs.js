export const getFrontPage = async () => {
  const response = await fetch("https://www.reddit.com/r/all.json");
  const json = await response.json();
  return json.data.children;
};
