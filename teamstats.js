const team = {
  _players: [
    {
      firstName: 'Bob',
      lastName: 'Pinciotti',
      age: 40
    },
    {
      firstName: 'Eric',
      lastName: 'Foreman',
      age: 18
    },
    {
      firstName: 'Micheal',
      lastName: 'Kelso',
      age: 18
    }
  ],
  _games: [
    {
      opponent: 'Packers',
      teamPoints: 13,
      opponentPoints: 50
    },
    {
      opponent: 'Broncos',
      teamPoints: 22,
      opponentPoints: 12
    },
    {
      opponent: '49ers',
      teamPoints: 72,
      opponentPoints: 10
    }
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName,
      lastName,
      age
    };
    this.players.push(player);
  },
  addGame(opponent, teamPoints, opponentPoints) {
    const game = {
      opponent,
      teamPoints,
      opponentPoints
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players);

team.addGame('Warriors', 14, 39);
team.addGame('Lakers', 71, 67);
team.addGame('Celtics', 61, 93);

console.log(team.games);
