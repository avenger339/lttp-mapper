const Box = require('./locationbox')

var clickLocation
var curOffset

function handleSwitchClick () {
  if (this._map.classList.contains('lightworld')) {
    this._map.classList.remove('lightworld')
    this._map.classList.add('darkworld')
  } else if (this._map.classList.contains('darkworld')) {
    this._map.classList.remove('darkworld')
    this._map.classList.add('lightworld')
  } else {
    console.log('what?????')
  }
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
    this._holder = document.getElementsByClassName('mapholder')[0]
    this._map = document.getElementsByClassName('map')[0]
    this._map.style.left = this._map.style.top = '0'
    this._handleMouseMove = handleMouseMove.bind(this)

    this._switch.addEventListener('click', handleSwitchClick.bind(this))

    this._draggable = document.getElementsByClassName('draggable')[0]
    this._draggable.addEventListener('mousedown', handleMapDrag.bind(this))
    document.addEventListener('mouseup', handleMapDrop.bind(this))
    // window.addEventListener('resize', handleWindowResize.bind(this))
    
    var box = new Box('up', -80)
    box.width = 200
    box.height = 50
    box.left = 62
    box.top = 130
    box.content = 'Pedestal Item!  Whatever I hope it\'s Flippers'
    box.show()
  }
}

module.exports = Map
