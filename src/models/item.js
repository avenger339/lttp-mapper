class Item {
  constructor (id, name, vanillaOnly = false, randomizerOnly = false) {
    this.id = id
    this.name = name
    this.vanillaOnly = vanillaOnly
    this.randomizerOnly = randomizerOnly
    this.hasItem = false
  }
}