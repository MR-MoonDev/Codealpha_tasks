const display = document.getElementById('display');
const buttonContainer = document.getElementById('buttonContainer');

const buttons = [
  'C', '/', '*', '⌫',
  '7', '8', '9', '-',
  '4', '5', '6', '+',
  '1', '2', '3', '=',
  '0', '.'
];

buttons.forEach(label => {
  const button = document.createElement('button');
  button.textContent = label;

  button.addEventListener('click', () => handleClick(label));

  buttonContainer.appendChild(button);
});

function handleClick(label) {
  if (label === 'C') {
    display.value = '';
  } else if (label === '⌫') {
    display.value = display.value.slice(0, -1);
  } else if (label === '=') {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  } else {
    display.value += label;
  }
}
