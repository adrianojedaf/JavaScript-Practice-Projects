const container = document.querySelector('.container');
const playersListContainer = document.querySelector('.container');
const addPlayerButton = document.querySelector('.add-player-button');
let playersList = [];

let domController = {
  createDomCard(name, points) {
    let cardContainer = document.createElement('div');
    let cardName = document.createElement('h2');
    let cardPoints = document.createElement('span');

    cardContainer.classList.add('player-card');
    cardName.classList.add('name');
    cardPoints.classList.add('points');

    cardName.textContent = name;
    cardPoints.textContent = points;

    cardContainer.append(cardName, cardPoints);

    this.addPlayerToDom(cardContainer);
  },

  addPlayerToDom(playerElement) {
    playersListContainer.prepend(playerElement);
  }
}

let game = {
  createNewPlayer(name, points) {
    let newPlayer = new Player(name, points);
    playersList.unshift(newPlayer);
  }
}

class Player {
  constructor(name, points) {
    this.name = name;
    this.points = points;
    this.isActive = false;
  };
}

function clickHandler() {
  let playerName = document.querySelector('.add-player-form .name').value;
  let initialPoints = document.querySelector('.add-player-form .points').value;
  game.createNewPlayer(playerName, initialPoints);
  domController.createDomCard(playersList[0].name, playersList[0].points);
}

addPlayerButton.addEventListener('click', clickHandler);
