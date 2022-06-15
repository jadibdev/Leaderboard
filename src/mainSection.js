import gameId from './createGame.js';

const content = document.getElementById('content');

gameId.then((result) => {
  console.log('coming from mainSection', result);

  async function getPlayers() {
    const id = localStorage.getItem('gameId');
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${id}/scores`);
    const data = await response.json();
    console.log(data.result);
    console.log('id from localstorage', id);

    for (let i = 0; i < data.result.length; i++) {
      console.log(data.result[i].user);
      document.querySelector('ul').insertAdjacentHTML('beforeend', `<li>${data.result[i].user}: ${data.result[i].score}</li>`);
    }
  }

  getPlayers();
});

const mainSectionComponent = `
    <div class="scores-container">
    <div class="recent-scores-container">
      <div class="recent-scores">
        <h2>Recent scores</h2>
        <button id="refresh">Refresh</button>
      </div>
      <div>
        <ul>
          
        </ul>
      </div>
    </div>
    <div class="add-your-score">
      <h2>Add your score</h2>
      <form>
        <input type="text"/>
        <input type="text"/>
        <button id="submit">Submit</button>
      </form>
    </div>
  </div>
`;

const renderMainSectionComponent = () => {
  content.insertAdjacentHTML('beforeend', mainSectionComponent);
};

export default renderMainSectionComponent;