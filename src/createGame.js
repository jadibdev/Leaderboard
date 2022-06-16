const createNewGame = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

  const data = {
    name: 'leaderboard',
  };

  const param = {

    method: 'Post',

    headers: {

      'content-type': 'application/json;charset = UTF-8',

    },

    body: JSON.stringify(data),

  };

  const sendRequest = await fetch(url, param);

  const response = await sendRequest.json();

  return response;
};

const gameId = createNewGame().then((data) => {
  let id;
  if (localStorage.getItem('gameId')) {
    id = localStorage.getItem('gameId');
  } else {
    id = data.result.substring(14, 34);
    localStorage.setItem('gameId', id);
  }
  return id;
});

export default gameId;