import { about } from '../assets/data/content.js';

document.getElementById('about-intro').textContent = about.intro;
document.querySelector('.about-overview').textContent = about.overview;
document.querySelector('.about-content').innerHTML = about.description;

const btnLinks = document.querySelectorAll('.about-btn a');
btnLinks[0].href = about.links.resume;
btnLinks[1].href = about.links.linkedin;
btnLinks[2].href = about.links.github;
