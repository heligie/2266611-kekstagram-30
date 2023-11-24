const BASE_URL = 'https://30.javascript.pages.academy/kekstagram';
const GET_DATA_URL = `${BASE_URL}/data`;

const getData = (onSuccess, onFail) => {
  fetch(GET_DATA_URL)
    .then((response) => response.json())
    .then((data) => onSuccess(data))
    .catch(() => onFail());
};

const sendData = (onSuccess, onFail, body) => {
  fetch(BASE_URL, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return;
      }
      onFail();
    })
    .catch(() => onFail());
};

export {getData, sendData};
