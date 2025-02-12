const json = ` {
    "character": {
      "name": "Aria the Brave",
      "class": "Warrior",
      "level": 10,
      "hp": 120,
      "mana": 50,
      "equipment": {
        "weapon": {
          "name": "Flaming Sword",
          "damage": 35,
          "element": "Fire"
        },
        "armor": {
          "name": "Dragon Scale Shield",
          "defense": 50
        }
      },
      "inventory": [
        { "item": "Health Potion", "type": "Consumable", "effect": "+50 HP" },
        { "item": "Mana Potion", "type": "Consumable", "effect": "+30 Mana" },
        {
          "item": "Mystic Gem",
          "type": "Artifact",
          "effect": "Boosts magic power"
        }
      ],
      "quests": [
        { "name": "Slay the Dragon", "status": "Completed" },
        { "name": "Find the Lost Amulet", "status": "In Progress" }
      ]
    }
  }`;

  let javascript = JSON.parse(json);

  
  console.log(`Nombre: ${javascript.character.name}.`);
  console.log(`Clase: ${javascript.character.class}.`);
  console.log(`Nivel: ${javascript.character.level}.`);

  
  console.log("Inventario:");
  javascript.character.inventory.forEach(function(objeto){
    console.log(`- ${objeto.item} : ${objeto.effect}`);
  });

  console.log("Quest en progreso:")
  javascript.character.quests.forEach(function(objeto){
    if (objeto.status === "In Progress"){
        console.log(`- ${objeto.name}`);
    }
  });