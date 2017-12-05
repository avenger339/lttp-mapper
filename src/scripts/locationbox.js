let arrowWidth = 16
let arrowHeight = 20
let padding = 5

function positionDiv () {
  let mapHeight = Math.abs(this._map.offsetTop)
  let mapWidth = Math.abs(this._map.offsetLeft)

  if (this._icon.offsetTop - this._dialogBoxContainer.offsetHeight - arrowHeight - (padding * 2) >= mapHeight) {
    this._arrow.classList.remove('up')
    this._arrow.classList.add('down')
    this._dialogBoxContainer.style.top = (this._icon.offsetTop - this._dialogBoxContainer.offsetHeight - arrowHeight - padding) + 'px'
  } else {
    this._arrow.classList.remove('down')
    this._arrow.classList.add('up')
    this._dialogBoxContainer.style.top = (this._icon.offsetTop + this._icon.offsetHeight + arrowHeight + padding) + 'px'
  }

  if (this._icon.offsetLeft - this._dialogBoxContainer.offsetWidth - arrowWidth - (padding * 2) < mapWidth) {
    this._arrow.classList.remove('right')
    this._arrow.classList.add('left')
    this._dialogBoxContainer.style.left = (this._icon.offsetLeft - arrowWidth) + 'px'
  } else {
    this._arrow.classList.remove('left')
    this._arrow.classList.add('right')
    this._dialogBoxContainer.style.left = (this._icon.offsetLeft - this._dialogBoxContainer.offsetWidth + arrowWidth * 2) + 'px'
  }
  /* if (this.arrowPosition === 'up') {
    this._arrow.style.left = ((this._width - this._arrow.offsetWidth) / 2 + this.arrowOffset) + 'px'
    this._arrow.style.top = (-this._arrow.offsetHeight) + 'px'
    this._arrow.classList.add('up')
  } else if (this.arrowPosition === 'left') {
    this._arrow.style.left = (-this._arrow.offsetWidth) + 'px'
    this._arrow.style.top = ((this._height - this._arrow.offsetHeight) / 2 + this.arrowOffset) + 'px'
    this._arrow.classList.add('left')
  } else if (this.arrowPosition === 'right') {
    this._arrow.style.left = (this._width) + 'px'
    this._arrow.style.top = ((this._height - this._arrow.offsetHeight) / 2 + this.arrowOffset) + 'px'
    this._arrow.classList.add('right')
  } else {
    this._arrow.style.left = ((this._width - this._arrow.offsetWidth) / 2 + this.arrowOffset) + 'px'
    this._arrow.style.top = (this._height) + 'px'
    this._arrow.classList.add('down')
  }

  */
}

function changeIcon () {
  if (this._checked.checked) {
    this._icon.classList.add('open')
    this._icon.classList.remove('closed')
  } else {
    this._icon.classList.add('closed')
    this._icon.classList.remove('open')
  }
}

class LocationBox {
  constructor (point) {
    this.arrowPosition = 'up'
    this.arrowOffset = 0

    this._icon = document.createElement('div')
    this._icon.classList.add('icon')
    this._icon.classList.add('closed')
    this._icon.addEventListener('click', this.show.bind(this))

    this._dialogBoxContainer = document.createElement('div')
    this._dialogBoxContainer.classList.add('locationbox')

    this._arrow = document.createElement('div')
    this._arrow.classList.add('arrow')

    this._controlsContainer = document.createElement('span')
    this._controlsContainer.classList.add('controlsContainer')

    this._close = document.createElement('div')
    this._close.classList.add('closebutton')
    this._close.addEventListener('click', this.hide.bind(this))

    this._checked = document.createElement('input')
    this._checked.classList.add('checked')
    this._checked.setAttribute('type', 'checkbox')
    this._checked.addEventListener('change', changeIcon.bind(this))

    this._content = document.createElement('span')
    this._content.classList.add('content')

    this._controlsContainer.appendChild(this._close)
    this._controlsContainer.appendChild(this._checked)

    this._dialogBoxContainer.appendChild(this._content)
    this._dialogBoxContainer.appendChild(this._controlsContainer)
    this._dialogBoxContainer.appendChild(this._arrow)

    this._map = document.getElementsByClassName('map')[0]
    this._map.appendChild(this._icon)

    this._icon.style.left = point.x + 'px'
    this._icon.style.top = point.y + 'px'
  }

  set content (content) {
    this._content.innerHTML = content
  }

  show () {
    this._map.appendChild(this._dialogBoxContainer)
    positionDiv.bind(this)()
  }

  hide () {
    if (this._map.contains(this._dialogBoxContainer)) this._map.removeChild(this._dialogBoxContainer)
  }
}

module.exports = LocationBox
