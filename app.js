const moves = [
  {
    win: 2,
    name: 'Rock'
  },
  {
    win: 0,
    name: 'Paper'
  },
  {
    win: 1,
    name: 'Scissors'
  }
]
const randomMove = () => Math.floor((Math.random() * 100) % moves.length)
const makeMove = (playerMove, aiMove) => playerMove === aiMove ? 'TIE' : playerMove.win === aiMove ? 'WIN' : 'LOSE'
const play = playerMove => {
  document.getElementById('result').textContent = makeMove(playerMove, randomMove())
}