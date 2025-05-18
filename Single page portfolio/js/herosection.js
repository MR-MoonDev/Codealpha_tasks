const bgAnimation = document.getElementById('bgAnimation');

const numberOfColorBoxes = 400;

for (let i = 0; i < numberOfColorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox.classList.add('colorBox');
    bgAnimation.append(colorBox)
}
  new Typed('#typed-text', {
    strings: ['I am a Developer.', 'I am a Teacher.', 'I am a Trainer.'],
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 2000,
    loop: true,
   
  });
