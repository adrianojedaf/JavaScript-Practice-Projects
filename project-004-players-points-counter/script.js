const container = document.querySelector('.container');
const playersListContainer = document.querySelector('.players-list-container');
const addPlayerButton = document.querySelector('.add-player-button');

let domController = {
  createDomPlayerCard(name, points, id) {
    let cardContainer = document.createElement('div');
    let cardName = document.createElement('h2');
    let cardPoints = document.createElement('span');
    cardContainer.classList.add('player-card');
    cardContainer.setAttribute("id", id);
    cardName.classList.add('name');
    cardPoints.classList.add('points');
    cardName.textContent = name;
    cardPoints.textContent = points;
    cardContainer.append(cardName, cardPoints);
    this.addPlayerToDom(cardContainer);
  },

  addPlayerToDom(playerElement) {
    playersListContainer.append(playerElement);
  }
};

let dashboard = {
  playersList: [],
  nextId: 0,
  createNewPlayer(name, points, id) {
    let newPlayer = new Player(name, points, id);
    this.nextId = this.nextId + 1;
    this.playersList.unshift(newPlayer);
  }
}
class Player {
  constructor(name, points, id) {
    this.name = name;
    this.points = points;
    this.id = id;
    this.isActive = false;
  };
}

function handleCreatePlayer() {
  let playerName = document.querySelector('.add-player-form .name').value;
  let initialPoints = document.querySelector('.add-player-form .points').value;
  dashboard.createNewPlayer(playerName, initialPoints, dashboard.nextId);
  domController.createDomPlayerCard(dashboard.playersList[0].name, dashboard.playersList[0].points, dashboard.playersList[0].id);
}

function handlePlayerCard(event) {
  let actualCard = event.target.closest(".player-card");
  console.log(dashboard.playersList);
}

addPlayerButton.addEventListener('click', handleCreatePlayer);
playersListContainer.addEventListener('click', handlePlayerCard);
