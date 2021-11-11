/**
 * 연구일지
 * throw ner Error(undefined)일때 error로 출력된다.
 */

import { fetchUrl, fetchOptions } from "../http/http.js";
const baseURL = process.env.REACT_APP_BASE_URL;

export default class TweetService {
  async getTweets(username) {
    /**쿼리문을 적어서 보낼것
     * fetch를 사용할것
     * fetch의 두번째 파라미터는 method와 header가 들어감(경우에 따라서는 body도 들어감)
     *  보낼때 stringify해서 보낼것
     */

    let query = username ? fetchUrl(`?username=${username}`) : fetchUrl("");

    const response = await fetch(query, fetchOptions({ method: "get" }));

    const data = await response.json();
    if (response.status !== 201) {
      throw new Error("get method Error");
    }

    return data;
  }

  async getTweetsId(id) {}

  async postTweet(text) {
    const param = {
      text,
      username: "ellie",
      name: "Ellie",
    };
    const response = await fetch(
      fetchUrl(""),
      fetchOptions({ method: "post", body: JSON.stringify(param) })
    );
    const data = await response.json();

    if (response.status !== 201) {
      throw new Error(response);
    }
    return data;
  }

  async deleteTweet(tweetId) {
    // const response = await fetch(`${baseURL}/tweets/${tweetId}`, {
    const response = await fetch(
      fetchUrl(`/${tweetId}`),
      fetchOptions({ method: "delete" })
    );
    if (response.status !== 201) {
      throw new Error(`${tweetId} is Not exists`);
    }
  }

  async updateTweet(tweetId, text) {
    const response = await fetch(
      `${baseURL}/tweets/${tweetId}`,
      fetchOptions({ method: "put", body: JSON.stringify({ text }) })
    );
    if (response.status !== 200) {
      throw new Error(response.data.message);
    }
    const tweet = await response.json();
    return tweet;
  }
}
