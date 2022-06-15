const addPlayer = async (playerName, playerScore) => {
  const url = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${localStorage.getItem('gameId')}/scores`;

  const data = {
    user: playerName,
    score: playerScore,
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

export default addPlayer;