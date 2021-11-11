/**
 * service/tweet.js에서 중복되는 부분을 분리하기위한 클래스
 * baseURL과 주소, header들을 분리할 예정
 */

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
