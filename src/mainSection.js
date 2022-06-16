import gameId from './createGame.js';
import getPlayers from './getPlayers.js';

const content = document.getElementById('content');

gameId.then(() => {
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
      <form id="form">
        <input id="name" type="text" placeholder="Your name" required/>
        <input id="score" type="text" placeholder="Your score" required/>
        <button id="submit">Submit</button>
      </form>
    </div>
  </div>
`;

const renderMainSectionComponent = () => {
  content.insertAdjacentHTML('beforeend', mainSectionComponent);
};

export default renderMainSectionComponent;