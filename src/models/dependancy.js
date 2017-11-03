//Class used to help find depenencies.  WIP

Class Dependency {
  constructor(requiredItems, requiredTypes) {
    this.requiredItems = requiredItems
    this.requiredTypes = requiredTypes
  }
  
  function check(currentItems) {
    requiredItems.forEach(function(curRequiredItem) {
      var curItem = currentItems.find(function(item) {
        return curRequiredItem.id === item.id
      })
      
      if(!curItem || !curItem.hasItem) return false
    })
    
    //TODO
    requiredTypes.forEach(function(curRequiredType) {
    })
    
    return true
  }
}