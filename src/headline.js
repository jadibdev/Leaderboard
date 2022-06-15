const content = document.getElementById('content');

/*
  Logic
*/

/*
  Component with dynamic values
*/
const headline = `
<h1>Leaderboard</h1>
`;

/*
  Component render
*/
const renderHeadline = () => {
  content.insertAdjacentHTML('beforeend', headline);
};

export default renderHeadline;
