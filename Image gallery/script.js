const imageSources = [
  './public/src/Images/Birds.webp',
  './public/src/Images/Finsh.jpg',
  './public/src/Images/RedBird.jpg',
  './public/src/Images/YellowFinsh.jpg',
  './public/src/Images/Birds.webp',
  './public/src/Images/Finsh.jpg',
  './public/src/Images/RedBird.jpg',
  './public/src/Images/YellowFinsh.jpg'
];

const gallery = document.getElementById('gallery');
const next = document.getElementById('next');
const back = document.getElementById('back');

for (let i = 0; i < imageSources.length; i += 3) {
  const groupDiv = document.createElement('div');

  for (let j = i; j < i + 3 && j < imageSources.length; j++) {
    const span = document.createElement('span');
    const img = document.createElement('img');
    img.src = imageSources[j];
    img.alt = `Image ${j + 1}`;
    span.appendChild(img);
    groupDiv.appendChild(span);
  }

  gallery.appendChild(groupDiv);
}

// Scroll functionality
next.addEventListener('click', () => {
  gallery.scrollBy({ left: 900, behavior: 'smooth' });
});

back.addEventListener('click', () => {
  gallery.scrollBy({ left: -900, behavior: 'smooth' });
});
