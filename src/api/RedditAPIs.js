export const getFrontPage = async (subreddit = "r/all") => {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  const json = await response.json();
  return json.data.children;
};

export const getComments = async (post) => {
  const response = await fetch(`https://www.reddit.com${post}.json`);
  const json = await response.json();
  return json.data.children;
};
