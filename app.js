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
const randomMove = () => Math.floor(Math.random() * moves.length)
const makeMove = (playerMove, aiMove) => `
  ${moves[playerMove].name} VS ${moves[playerMove.name]}
  ${(playerMove === aiMove ? 'TIE' : moves[playerMove].win === aiMove ? 'WIN' : 'LOSE')}
`
const play = playerMove => {
  document.getElementById('result').textContent = makeMove(playerMove, randomMove())
}