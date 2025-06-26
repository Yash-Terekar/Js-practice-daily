// Day 12 - Project 6: Simple RPG Character Battle

class Character {
  constructor(name, health, power) {
    this.name = name;
    this.health = health;
    this.power = power;
  }

  attack(enemy) {
    enemy.health -= this.power;
    if (enemy.health < 0) {
      enemy.health = 0;
    }
  }
}

const hero = new Character("Hero", 100, 10);
const villain = new Character("Villain", 100, 12);

while (hero.health > 0 && villain.health > 0) {
  hero.attack(villain);
  console.log(
    `After Hero's attack -> Hero: ${hero.health}, Villain: ${villain.health}`
  );
  if (villain.health > 0) {
    villain.attack(hero);
    console.log(
      `After Villain's attack -> Hero: ${hero.health}, Villain: ${villain.health}`
    );
  }
}

if (hero.health <= 0 && villain.health <= 0) {
  console.log("It's a tie!");
} else if (villain.health <= 0) {
  console.log("Hero Won");
} else if (hero.health <= 0) {
  console.log("Villain Won");
}

console.log(`Hero: ${hero.health}, Villain: ${villain.health}`);
