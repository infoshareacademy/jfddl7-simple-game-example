function Game(container) {
  this.container = container || document.body
  this.boardEl = null

  this.playerPosition = {
    x: 0,
    y: 1,
  }
  this.initialGameBoard = [
    [1, 1],
    [1, 1],
  ]
  this.gameBoard = null

  this.init()
}

Game.prototype.init = function () {
  this.makeGameBoard()
  this.render()
}

Game.prototype.prepareBoard = function () {
  this.gameBoard = JSON.parse(JSON.stringify(this.initialGameBoard))

  this.gameBoard[this.playerPosition.y][this.playerPosition.x] = 0
}

Game.prototype.render = function () {
  this.boardEl.innerHTML = ''

  this.prepareBoard()

  this.gameBoard.forEach(
    row => row.forEach(
      cell => this.renderSingleCell(cell)
    )
  )
}

Game.prototype.renderSingleCell = function (cell) {
  const cellEl = document.createElement('div')

  cellEl.style.width = '50%'
  cellEl.style.height = '50%'
  cellEl.style.backgroundColor = cell ? 'grey' : 'black'

  this.boardEl.appendChild(cellEl)
}

Game.prototype.makeGameBoard = function () {
  this.boardEl = document.createElement('div')

  this.boardEl.style.width = '200px'
  this.boardEl.style.height = '200px'
  this.boardEl.style.display = 'flex'
  this.boardEl.style.flexWrap = 'wrap'
  this.boardEl.style.backgroundColor = 'red'

  this.container.appendChild(this.boardEl)
}

Game.prototype.moveRight = function () {
  if (this.playerPosition.x + 1 >= this.initialGameBoard[0].length)
    return

  this.playerPosition = {
    x: this.playerPosition.x + 1,
    y: this.playerPosition.y,
  }

  this.render()
}