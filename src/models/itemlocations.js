var types = {
  ALTAR: 'Altar',
  BIGCHEST: 'Big Chest',
  CHEST: 'Chest',
  DASH: 'Dash',
  DIG: 'Dig',
  DROP: 'Drop',
  FOUNTAIN: 'Fountain',
  MEDALLION: 'Medallion',
  NPC: 'NPC',
  PRIZE: 'Prize',
  STANDING: 'Standing'
}

class ItemLocation {
  constructor (location, type, vanilla) {
    this.location = location
    this.type = type
    this.vanilla = vanilla
}