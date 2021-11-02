import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

export default class TweetService {
  async getTweets(username) {
    return axios
      .get(`${baseURL}/tweets`)
      .then((response) => {
        const tweets = response.data.tweets;
        return username
          ? tweets.filter((tweet) => tweet.username === username)
          : tweets;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async postTweet(text) {
    const params = {
      id: Date.now(),
      createdAt: new Date(),
      name: "Ellie",
      username: "ellie",
      text,
    };
    return axios
      .post(`${baseURL}/tweets`, {
        params,
      })
      .then((response) => {
        return params;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async deleteTweet(tweetId) {
    axios
      .delete(`${baseURL}/tweets/${tweetId}`)
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  }

  async updateTweet(tweetId, text) {
    return axios
      .put(`${baseURL}/tweets/${tweetId}&${text}`)
      .then((response) => {
        return response.data.tweets;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
