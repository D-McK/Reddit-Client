export const getFrontPage = async (subreddit) => {
  const response = await fetch(`https://www.reddit.com/r/${subreddit}.json`);
  const json = await response.json();
  return json.data.children;
};

export const getComments = async (post) => {
  const response = await fetch(`https://www.reddit.com${post}.json`);
  const json = await response.json();
  return json[1].data.children;
};
