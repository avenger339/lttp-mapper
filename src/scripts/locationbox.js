function positionArrow() {
  if (this.arrowPosition === "up") {
    this._arrow.style.left = ((this._width - this._arrow.offsetWidth) / 2 + this.arrowOffset) + "px" 
    this._arrow.style.top = (-this._arrow.offsetHeight) + "px"
    this._arrow.classList.add('up')
  } else if (this.arrowPosition === "left") {
    this._arrow.style.left = (-this._arrow.offsetWidth) + "px" 
    this._arrow.style.top = ((this._height - this._arrow.offsetHeight) / 2 + this.arrowOffset) + "px" 
    this._arrow.classList.add('left')
  } else if (this.arrowPosition === "right") {
    this._arrow.style.left = (this._width) + "px" 
    this._arrow.style.top = ((this._height - this._arrow.offsetHeight) / 2 + this.arrowOffset) + "px" 
    this._arrow.classList.add('right')
  } else {
    this._arrow.style.left = ((this._width - this._arrow.offsetWidth) / 2 + this.arrowOffset) + "px" 
    this._arrow.style.top = (this._height) + "px"
    this._arrow.classList.add('down')
  }
}

class LocationBox {
  constructor (arrowPosition, arrowOffset) {
    if(!arrowPosition) arrowPosition = 'up'
    if(!arrowOffset) arrowOffset = 0
    
    this.arrowPosition = arrowPosition
    this.arrowOffset = arrowOffset
    
    this._box = document.createElement('div')
    this._box.classList.add('locationbox')
    this._arrow = document.createElement('div')
    this._arrow.classList.add('arrow')
    this._close = document.createElement('div')
    this._close.classList.add('closebutton')
    this._close.addEventListener('click', this.hide.bind(this))
    this._content = document.createElement('div')
    this._content.classList.add('content')
    
    this._box.appendChild(this._content)
    this._box.appendChild(this._close)
    this._box.appendChild(this._arrow)
    
    this._map = document.getElementsByClassName('map')[0]
    this._map.appendChild(this._box)
          
    this.width = 200
    this.height = 200
    this.top = 0
    this.left = 0
  }
  
  set width(width) {
    this._width = width
    this._box.style.width = width + "px"
    positionArrow.bind(this)()
  }
  
  get width() {
    return this._width
  }
  
  set height(height) {
    this._height = height
    this._box.style.height = height + "px"
    positionArrow.bind(this)()
  }
  
  get height() {
    return this._height
  }
  
  set left(left) {
    this._left = left
    this._box.style.left = left + "px"
  }
  
  get left() {
    return this._left
  }
  
  set top(top) {
    this._top = top
    this._box.style.top = top + "px"
  }
  
  get top() {
    return this._top
  }
  
  set content(content) {
    this._content.innerHTML = content
  }
  
  show() {
    this._box.style.visibility = "visible"
  }
  
  hide() {
    this._box.style.visibility = "hidden"
  }
}

module.exports = LocationBox