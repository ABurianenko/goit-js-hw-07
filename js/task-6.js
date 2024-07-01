function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
      const boxesContainer = document.querySelector('#boxes');
      boxesContainer.innerHTML = ''; 

      const fragment = document.createElement(`div`);
      let boxSize = 30;
      for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${boxSize}px`;
        div.style.height = `${boxSize}px`;
        div.style.backgroundColor = getRandomHexColor();
        fragment.appendChild(div);
        boxSize += 10;
      }
      boxesContainer.appendChild(fragment);
    }

    function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
      boxesContainer.innerHTML = ''; 
    }

    document.querySelector('[data-create]').addEventListener('click', () => {
      const input = document.querySelector('#controls input');
      const amount = input.value;

      if (amount >= 1 && amount <= 100) {
        createBoxes(amount);
        input.value = ''; 
      } else {
        alert('Please enter a number between 1 and 100');
      }
    });

    document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);