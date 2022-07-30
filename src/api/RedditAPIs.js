export const getFrontPage = async (subreddit = "r/all") => {
  const response = await fetch(`https://www.reddit.com/${subreddit}.json`);
  const json = await response.json();
  return json.data.children;
};
