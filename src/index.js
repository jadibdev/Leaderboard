/* eslint-disable no-restricted-globals */
import './style.css';
import renderMainSectionComponent from './mainSection.js';
import addPlayer from './addPlayer.js';

renderMainSectionComponent();

document.getElementById('refresh').addEventListener('click', () => {
  location.reload();
});

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  addPlayer(name, score);
  document.getElementById('name').value = '';
  document.getElementById('score').value = '';
});
