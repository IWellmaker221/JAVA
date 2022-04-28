
const universal = require('../../modules/universal-functions.js');
  const arrayPicker = universal.randomArray;

const diceRoll = universal.diceRoll;

const timer = universal.sleep;

const color = ["Blue" , "Green", "Gray", "Red", "Yellow", "White"];

const words = [`mighty`, `powerful`, `rough`, `striking`, `stinging`, `killing`]

const texture = ["Slimy" , "Ridged", "Rough", "Smooth", "Grainy", "Wet"];


///bopper factory///
class boppers{
  constructor(name){
    this.name = name;
    this.color=arrayPicker(color);
    this.texture= arrayPicker(texture);
    this.primaryAttack=diceRoll(20);
    this.secondaryAttack=diceRoll(12);
    this.energy=diceRoll(30);
    this.defense=diceRoll(6);
    this.health=100;
    this.order=0;
  }
///getters & setters///
    get energyLevel(){
      if (this.energy === 30){
        return(`${this.name}, your energy level is full`);
      } else if (this.energy > 15){
        return(`${this.name}, your energy level is high`);
      }else if (this.energy < 15 && this.energy > 0) {
        return(`${this.name}, your energy level is low`);
      }else if (this.energy <= 0){
        return(`${this.name}, your energy level is inactive`);
      }else {
        return(`${this.name}, your energy level is moderate`);
      }
    }

  set energyLevel(number){
    this.energy = this.energy - number
  }

    get healthLevel(){
      if (this.health === 100){
        return(`${this.name}, your health is full`);
      } else if (this.health > 50){
        return(`${this.name}, your health is high`);
      }else if (this.health < 40 && this.health > 0) {
        return(`${this.name}, your health is low`);
      }else if (this.health <= 0){
        return(`${this.name}, your health is inactive`);
      }else {
        return(`${this.name}, your health is moderate`);
      }
    }

  set healthLevel(number){
    this.health = this.health - number
  }

set bopperOrder(order){
  this.order = order;
}
///display method///

display(){
  console.log(`${this.name}, the ${this.texture} ${this.color} Bopper`);
  console.log(`Right Hand: ${this.primaryAttack}`);
  console.log(`Left Hand: ${this.secondaryAttack}`);
  console.log(this.energyLevel);
  console.log(this.healthLevel);
  console.log (`Defense: ${this.defense}`);
}

entrance(){
  console.log(`${this.name}, the ${this.texture} ${this.color} Bopper comes in ready to fight!`)
}
};

module.exports.boppers = boppers;