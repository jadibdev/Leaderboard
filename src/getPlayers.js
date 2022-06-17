const getPlayers = async () => {
  const id = localStorage.getItem('gameId');
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`);
  const data = await response.json();

  for (let i = 0; i < data.result.length; i += 1) {
    document.querySelector('ul').insertAdjacentHTML('beforeend', `<li class="border-white">${data.result[i].user}: ${data.result[i].score}</li>`);
  }
};

export default getPlayers;