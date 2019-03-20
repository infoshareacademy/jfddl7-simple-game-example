function Game(container) {
  this.container = container || document.body
  this.boardEl = null

  this.gameBoard = [
    [0, 1],
    [1, 1],
  ]
  
  this.init()
}

Game.prototype.init = function () {
  this.makeGameBoard()
  this.render()
}

Game.prototype.render = function () {
  this.boardEl.innerHTML = ''

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