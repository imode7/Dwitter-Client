/**
 * service/tweet.js에서 중복되는 부분을 분리하기위한 클래스
 * baseURL과 주소, header들을 분리할 예정
 */
export default class HttpClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async fetch(url, options) {
    const res = await fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options.headers,
      },
    });
    let data;
    try {
      data = await res.json();
    } catch (error) {
      console.error(error);
    }
    if (res.status > 299 || res.status < 200) {
      const message =
        data && data.message ? data.message : "Something went wrong!";
      throw new Error(message);
    }
    return data;
  }
}

const baseURL = process.env.REACT_APP_BASE_URL;

export function fetchUrl(option) {
  const url = `${baseURL}/tweets${option}`;
  return url;
}

export function fetchOptions(option) {
  const options = {
    ...option,
    headers: { "Content-Type": "application/json" },
  };
  return options;
}
