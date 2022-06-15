const content = document.getElementById('content');

const mainSectionComponent = `
    <div class="scores-container">
    <div class="recent-scores-container">
      <div class="recent-scores">
        <h2>Recent scores</h2>
        <button id="refresh">Refresh</button>
      </div>
      <div>
        <ul>
          <li>Name: 100</li>
          <li>Name: 20</li>
          <li>Name: 50</li>
          <li>Name: 78</li>
          <li>Name: 125</li>
          <li>Name: 77</li>
          <li>Name: 42</li>
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