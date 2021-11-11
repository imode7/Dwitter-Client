/**
 * 연구일지
 * throw ner Error(undefined)일때 error로 출력된다.
 */

export default class TweetService {
  constructor(http) {
    this.http = http;
  }
  async getTweets(username) {
    /**쿼리문을 적어서 보낼것
     * fetch를 사용할것
     * fetch의 두번째 파라미터는 method와 header가 들어감(경우에 따라서는 body도 들어감)
     *  보낼때 stringify해서 보낼것
     */
    const query = username ? `/tweets?username=${username}` : "/tweets";
    return this.http.fetch(query, {
      method: "get",
    });
  }

  async getTweetsId(id) {}

  async postTweet(text) {
    const param = {
      text,
      username: "ellie",
      name: "Ellie",
    };
    return this.http.fetch("/tweets", {
      method: "post",
      body: JSON.stringify(param),
    });
  }

  async deleteTweet(tweetId) {
    return this.http.fetch(`/tweets/${tweetId}`, { method: "delete" });
  }

  async updateTweet(tweetId, text) {
    return this.http.fetch(`/tweets/${tweetId}`, {
      method: "put",
      body: JSON.stringify({ text }),
    });
  }
}
