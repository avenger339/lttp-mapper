const Box = require('./locationbox')

var clickLocation
var curOffset

function handleSwitchClick () {
  if (this._map.classList.contains('lightworld')) {
    this._map.classList.remove('lightworld')
    this._map.classList.add('darkworld')
    this._switch.innerHTML = 'Light'
  } else if (this._map.classList.contains('darkworld')) {
    this._map.classList.remove('darkworld')
    this._map.classList.add('lightworld')
    this._switch.innerHTML = 'Dark'
  } else {
    console.log('what?????')
  }
}

function handleInfoClick () {
  this._infocontainer.style.visibility = 'visible'
}

function handleInfoCloseClick () {
  this._infocontainer.style.visibility = 'hidden'
}

function handleMapDrag (e) {
  clickLocation = {x: e.clientX, y: e.clientY}
  curOffset = {x: this._map.offsetLeft, y: this._map.offsetTop }
  document.addEventListener('mousemove', this._handleMouseMove)
}

function handleMapDrop () {
  document.removeEventListener('mousemove', this._handleMouseMove)
}

function handleMouseMove (e) {
  if (this._holder.offsetWidth < 2007) this._map.style.left = (e.clientX - clickLocation.x + curOffset.x < 0 ? (e.clientX - clickLocation.x + curOffset.x > -2007 + this._holder.offsetWidth ? e.clientX - clickLocation.x + curOffset.x : -2007 + this._holder.offsetWidth) : 0) + 'px'
  if (this._holder.offsetHeight < 2007) this._map.style.top = (e.clientY - clickLocation.y + curOffset.y < 0 ? (e.clientY - clickLocation.y + curOffset.y > -2007 + this._holder.offsetHeight ? e.clientY - clickLocation.y + curOffset.y : -2007 + this._holder.offsetHeight) : 0) + 'px'
}

// TODO - adjust map if window is resized
function handleWindowResize () {
  if (this._holder.offsetWidth >= 2007) this._map.style.left = '50%'
  if (this._holder.offsetHeight >= 2007) this._map.style.top = '50%'
  this._map.style.margin = (this._holder.offsetWidth >= 2007 ? '-1003.5px' : '0') + ' 0 0 ' + (this._holder.offsetHeight >= 2007 ? '-1003.5px' : '0')
}

class Map {
  constructor () {
    console.log('ALTTP Map 0.1 Javascript....')
    this._switch = document.getElementsByClassName('switch')[0]
    this._info = document.getElementsByClassName('info')[0]
    this._infocontainer = document.getElementsByClassName('infocontainer')[0]
    this._closepane = document.getElementsByClassName('closepane')[0]
    this._holder = document.getElementsByClassName('mapholder')[0]
    this._map = document.getElementsByClassName('map')[0]
    this._map.style.left = this._map.style.top = '0'
    this._handleMouseMove = handleMouseMove.bind(this)

    this._switch.addEventListener('click', handleSwitchClick.bind(this))
    this._info.addEventListener('click', handleInfoClick.bind(this))
    this._closepane.addEventListener('click', handleInfoCloseClick.bind(this))

    this._draggable = document.getElementsByClassName('draggable')[0]
    this._draggable.addEventListener('mousedown', handleMapDrag.bind(this))
    document.addEventListener('mouseup', handleMapDrop.bind(this))

    var box = new Box({x: 504, y: 96})
    box.content = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

    document.onkeydown = function (e) {
      e = e || window.event

      if ((e.key && (e.key === 'Escape' || e.key === 'Esc')) || e.keyCode === 27) {
        box.hide()
      }
    }
  }
}

module.exports = Map
