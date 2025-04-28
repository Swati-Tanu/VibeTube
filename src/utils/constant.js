const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://thingproxy.freeboard.io/fetch/http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const LIVE_CHAT_COUNT = 25;

export default YOUTUBE_API;

// https://cors-anywhere.herokuapp.com
// https://thingproxy.freeboard.io/fetch
