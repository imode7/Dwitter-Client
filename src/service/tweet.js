/**
 * 연구일지
 * throw ner Error(undefined)일때 error로 출력된다.
 */

import axios from "axios";
const baseURL = process.env.REACT_APP_BASE_URL;

export default class TweetService {
  async getTweets(username) {
    /**쿼리문을 적어서 보낼것
     * fetch를 사용할것
     * fetch의 두번째 파라미터는 method와 header가 들어감(경우에 따라서는 body도 들어감)
     *  보낼때 stringify해서 보낼것
     */
    let query = username
      ? `${baseURL}/tweets?username=${username}`
      : `${baseURL}/tweets`;

    const response = await axios.get(query, {});
    if (response.status !== 201) {
      throw new Error("get method Error");
    }
    return response.data;
  }

  async getTweetsId(id) {}

  async postTweet(text) {
    const response = await axios.post(`${baseURL}/tweets`, {
      text,
      username: "ellie",
      name: "Ellie",
    });

    if (response.status !== 201) {
      throw new Error(response);
    }

    return response.data;
  }

  async deleteTweet(tweetId) {
    const response = await axios.delete(`${baseURL}/tweets/${tweetId}`);
    if (response.status !== 201) {
      throw new Error(`${tweetId} is Not exists`);
    }
  }

  async updateTweet(tweetId, text) {
    const response = await axios.put(`${baseURL}/tweets/${tweetId}`, {
      text,
    });
    if (response.status !== 200) {
      throw new Error(response.data.message);
    }
    const tweet = response.data;
    return tweet;
  }
}
