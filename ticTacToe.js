class Board {
  constructor(state = '---------') {
    this.state = state;
  }

  move(index, player) {
    if (index == 0) {
      this.state = player + this.state.slice(index + 1, this.state.length + 1);
    } else if (index == 8) {
      this.state = this.state.slice(0, index) + player;
    } else {
      this.state = this.state.slice(0, index) + player + this.state.slice(index + 1, this.state.length + 1);
    }
  }

  turn() {
    if ((this.state.match(/O/g) || []).length > (this.state.match(/X/g) || []).length) {
      return 'X';
    } else {
      return 'O';
    }
  }

  is_winner(piece) {
    let possibleWins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
                        [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

    for(let i = 0; i < possibleWins.length; i++) {
      if(possibleWins[i].every(n => this.state[n] === piece)) {
        return true;
      }
    }
    return false;
  }
}
