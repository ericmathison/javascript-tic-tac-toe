class Board {
  constructor() {
    this.state = '---------';
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
}
