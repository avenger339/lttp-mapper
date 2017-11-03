//Important Items needed for one reason or another.

module.exports = function () {
  getLvl1RequiredItems: {
    return [
      {
        type: "Defeat Red Eyegore"
        items: [["Bow"]]
      },
      {
        type: "Defeat Armos Knight",
        items: [["L1Sword", "L2Sword", "L3Sword", "L4Sword", "FireRod", "IceRod", "Hammer", "Bow", "Boomerang", "CaneOfSomaria", "StaffOfByrna", "RedBoomerang", "Bomb"]]
      }
    ]
  }
  
  getLvl2RequiredItems: {
    return [
      {
        type: "Enter Dungeon",
        items: [["BookOfMudora"], [["Ocarina"], ["TitansMitt"], ["Mirror"]]]
      },
      {
        type: "Enter Back of Dungeon",
        items: [["PowerGlove", "TitansMitt"], [["Ocarina"], ["TitansMitt"], ["Mirror"]]]
      },
      {
        type: "Lantern Item",
        items: [["PegasusBoots"]]
      },
      {
        type: "Light Torches",
        items: [["Lamp", "FireRod"]]
      },         
      {
        type: "Defeat Lanmolas",
        items: [["L1Sword", "L2Sword", "L3Sword", "L4Sword", "FireRod", "IceRod", "Hammer", "Bow","CaneOfSomaria", "StaffOfByrna", "Bomb"]]
      }
    ]
  }
  
  getLvl3RequiredItems: {
    return [
      {
        type: "Enter Dungeon",
        items: [["Mirror"], [["Hookshot"], ["Hammer"]]]
      },  
      {
        type: "Light Torches",
        items: [["Lamp", "FireRod"]]
      },                 
      {
        type: "Defeat Moldorm",
        items: [["L1Sword", "L2Sword", "L3Sword", "L4Sword", "FireRod", "IceRod", "Hammer", "Bow","CaneOfSomaria", "StaffOfByrna", "Bomb"]]
      }
    ]
  }
  
  getLvl4RequiredItems: {
    return [
      {
        type: "Enter Dungeon",
        rupees: 110
        items: [
          ["MoonPearl"],
          ["AgahnimDefeated", [
            ["Hammer"], 
            ["PowerGlove", "TitansMitt"]
          ],
          ["TitansMitt"]
        ]
      },
      {
        type: "Defeat Red Goriya / Shoot eye in statue",
        items: [["Bow"]]
      },
      {
        type: "Pound pegs after stairs",
        items: [["Hammer"]]
      },      
      {
        type: "Defeat Helmasaur King",
        items: [["MoonPearl"], ["Hammer", "Bomb"], ["L1Sword", "L2Sword", "L3Sword", "L4Sword", "Hammer", "Bow"]]
      }
    ]
  }
  
  getLvl5RequiredItems: {
    return [
      {
        type: "Enter Dungeon",
        items: [
          ["MoonPearl"], 
          [
            [
              ["AgahnimDefeated"], 
              ["Hammer"]
            ], 
            [
              ["Hammer"], 
              ["TitansMitt", "PowerGlove"]
            ],
            ["TitansMitt"]
          ]
        ]
      },
      {
        type: "Swim through dungeon",
        items: [["Flippers"]]
      },
      {
        type: "Get to Second part of dungeon",
        items: [["Hookshot"]]
      },      
      {
        type: "Defeat Arrghus",
        items: [["Hookshot"], ["L1Sword", "L2Sword", "L3Sword", "L4Sword", "Hammer", "FireRod", "IceRod","Bow"]]
      }
    ]
  }
  
  getLvl6RequiredItems: {
    return [
      {
        type: "Enter Dungeon",
        items: [
          ["MoonPearl"], 
          [
            [
              ["AgahnimDefeated"], 
              ["Hookshot"]
            ], 
            [
              ["Hammer"], 
              ["TitansMitt", "PowerGlove"]
            ],
            ["TitansMitt"]
          ]
        ]
      },
      {
        type: "Get into Final part of dungeon",
        items: [["FireRod"]]
      },
      {
        type: "Cut Vines",
        items: [["L1Sword", "L2Sword", "L3Sword", "L4Sword"]]
      },   
      {
        type: "Defeat Mothula",
        items: [["L1Sword", "L2Sword", "L3Sword", "L4Sword", "Hammer", "CaneOfSomaria", "StaffOfByrna", "FireRod"]]
      }
    ]
  },
  
  getLvl7RequiredItems: {
    return [
      {
        type: "Enter Dungeon",
        items: [
          ["MoonPearl"], 
          [
            [
              ["AgahnimDefeated"], 
              ["Hookshot"]
            ], 
            [
              ["Hammer"], 
              ["TitansMitt", "PowerGlove"]
            ],
            ["TitansMitt"]
          ]
        ]
      },
      { type: "Enter Dungeon",
        items: [["MoonPearl"], [["AgahnimDefeated"], ["Hammer"]], [["Hammer"], ["TitansMitt", "PowerGlove"], ["TitansMitt"]]
      },
      {
        type: "Pound posts by Big Chest",
        items: [["Hammer"]]
      },
      {
        type: "Defeat Blind",
        items: [["L1Sword", "L2Sword", "L3Sword", "L4Sword", "Hammer", "CaneOfSomaria", "StaffOfByrna"]]
      }
    ]
  }
  
  getLvl8RequiredItems: {
    return [
      { 
        type: "Enter Dungeon",
        items: [
          ["MoonPearl"], 
          ["TitansMitt"]
        ]
      },
      {
        type: "Melt Ice Enemies",
        items: [["FireRod", "Bombos"]]
      },
      {
        type: "Defeat Kholdstare",
        items: [["FireRod", "Bombos"], ["L1Sword", "L2Sword", "L3Sword", "L4Sword", "Hammer", "FireRod"]]
      }
    ]
  }
  
 getLvl9RequiredItems: {
    return [
      { type: "Enter Dungeon",
        items: [
          ["MoonPearl"], 
          ["Ocarina"], 
          ["TitansMitt"], 
          ["Flippers"], 
          [getLvl9PedestalItem()]
        ]
      }, 
      {
        type: "Light Torches",
        items: [["Lamp", "FireRod"]]
      },
      {
        type: "Press Basement Tile",
        items: ["CaneOfSomaria"]
      },
      {
        type: "Defeat Vitreous",
        items: [["L1Sword", "L2Sword", "L3Sword", "L4Sword", "Hammer", "Bow"]]
      }
    ]
  }
  getLvl10RequiredItems: {
    return [
      { type: "Enter Dungeon",
        items: [
          ["MoonPearl"],
          ["TitansMitt"],
          ["Hammer"],
          ["Mirror", "Hookshot"],
          [getLvl10PedestalItem()]
        ]
      }, 
      {
        type: "Create Platforms",
        items: [["CaneOfSomaria"]]
      },
      {
        type: "Light Torches",
        items: ["FireRod"]
      },
      {
        type: "Defeat Trinexx",
        items: ["FireRod", "L1Sword", "L2Sword", "L3Sword", "L4Sword", "Hammer"], ["IceRod", "L1Sword", "L2Sword", "L3Sword", "L4Sword", "Hammer"], ["L1Sword", "L2Sword", "L3Sword", "L4Sword", "Hammer"]]
      }
    ]
  }
  
  getLvl11RequiredItems: {
    return [
      { type: "Enter Dungeon",
        items: [
          ["Crystal1"],
          ["Crystal2"],
          ["Crystal3"],
          ["Crystal4"],
          ["Crystal5"],
          ["Crystal6"],
          ["Crystal7"],
          ["MoonPearl"],
          ["TitansMitt"],
          ["Hammer"],
          ["Mirror", "Hookshot"],
        ]
      }, 
      {
        type: "Lantern Item",
        items: [["PegasusBoots"]]
      },  
      {
        type: "Navigate island platforms",
        items: [["Hookshot"]]
      },
      {
        type: "Light Torches",
        items: ["Lamp", "FireRod"]
      },
      {
      type: "Defeat Armos Knight",
        items: [["L1Sword", "L2Sword", "L3Sword", "L4Sword", "FireRod", "IceRod", "Hammer", "Bow", "Boomerang", "CaneOfSomaria", "StaffOfByrna", "RedBoomerang", "Bomb"]]
      },
      {
        type: "Defeat Lanmolas",
        items: [["L1Sword", "L2Sword", "L3Sword", "L4Sword", "FireRod", "IceRod", "Hammer", "Bow","CaneOfSomaria", "StaffOfByrna", "Bomb"]]
      },                 
      {
        type: "Defeat Moldorm",
        items: [["L1Sword", "L2Sword", "L3Sword", "L4Sword", "FireRod", "IceRod", "Hammer", "Bow","CaneOfSomaria", "StaffOfByrna", "Bomb"]]
      },
      {
        type: "Defeat Agahnim 2",
        items: [["L1Sword", "L2Sword", "L3Sword", "L4Sword", "BugCatchingNet"]]
      }
    ]
  }
  
  getGanonRequiredItems: {
    return [
      { type: "Enter Dungeon",
        items: [
          ["Agahnim2Defeated"],
          ["MoonPearl"]
        ]
      }, 
      {
        type: "Defeat Ganon",
        items: [["Bow"], ["SilverArrows"], ["L2Sword", "L3Sword", "L4Sword"]]
      }
    ]
  }
  
  getAgahnimRequiredItems: {
    return [
      {
        type: "Enter Dungeon",
        items: [["L2Sword", "L3Sword", "L4Sword", "MagicCape"]]
      },
      {
        type: "Defeat Agahnim",
        items: [["L1Sword", "L2Sword", "L3Sword", "L4Sword", "BugCatchingNet"]]
      }
    ]
  }
  
  getPyramidFairyRequiredItems: {
    return [
      {
        type: "Get Mega Bomb for crack in Pyramid",
        rupees: 50,
        items: [["MoonPearl"], ["Crystal5"], ["Crystal6"], ["Hammer", [["AgahnimDefeated"], ["Mirror"]]]]
      }
    ]
  }
  
  getWaterfallFairyRequiredItems: {
    return [
      {
        type: "Get Into Waterfall",
        items: [["PowerGlove", "TitansMitt"], ["Flippers"]]
      }
    ]
  }
  
  getVendorRequiredItems: {
    return [
      {
        type: "Buy Item",
        rupees: 100
      }
    ]
  }
  
  getZoraRequiredItems: {
    return [
      {
        type: "Buy Item",
        rupees: 500,
        items: [["PowerGlove", "TitansMitt"]]
      }
    ]
  }
  
  getHoboRequiredItems: {
    return [
      {
        type: "Get Item",
        items: [["Flippers"]]
      }
    ]
  }
  
 getTabletDesertRequiredItems: {
    return [
      {
        type: "Get Item",
        items: [["L2Sword", "L3Sword", "L4Sword"], ["Mirror"]]
      }
    ]
  }
  
 getTabletMountainRequiredItems: {
    return [
      {
        type: "Get Item",
        items: [["L2Sword", "L3Sword", "L4Sword"], [["Mirror"], [["Hookshot"], ["Hammer"]]]]
      }
    ]
  }
}