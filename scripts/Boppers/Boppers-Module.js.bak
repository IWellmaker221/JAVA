
///function main()

///functions///
const prompt = require('prompt-sync')();

const universal = require('./universal.js');
  const arrayPicker = universal.randomArray;

const diceRoll = universal.diceRoll;

const timer = universal.sleep;

const boopers = require('./bops.js');

const coinToss = function(firstBopper, secondBopper, firstBopperName, secondBopperName){
  const coin= diceRoll(2);
    for (let i=0; i<5; i++){
      console.log("FLIP...");
        timer(500);
    };
  if (coin === 1){
    secondBopper.bopperOrder= 1
    firstBopper.bopperOrder= 2
    console.log(`${secondBopperName} will go first`)
  }else if (coin === 2){
    secondBopper.bopperOrder= 2
    firstBopper.bopperOrder= 1
    console.log(`${firstBopperName} will go first`)
  }
};

let round =0;
const fight = function(firstBopper, firstBopperOrder, secondBopper){
      console.log("let the fight begin")
  while (firstBopper.health != 0 && secondBopper.health !=0){
    console.log();
    round = round + 1;
    firstBopper.defense=diceRoll(8)
    secondBopper.defense=diceRoll(8)
    console.log(`Round: ${round}`)
      if (firstBopperOrder === 1){
          extraPower1=diceRoll(10)
          extraPower2=diceRoll(10)
        
        secondBopper.healthLevel= firstBopper.primaryAttack + extraPower1 - secondBopper.defense
          console.log(`${firstBopper.name} threw a ${arrayPicker(words)} hit of ${firstBopper.primaryAttack + extraPower1} hit points with the right hand`);
        firstBopper.energyLevel= diceRoll(4);

        timer(2000);

       secondBopper.healthLevel= firstBopper.secondaryAttack + extraPower1 - secondBopper.defense;
          console.log(`${firstBopper.name} threw a ${arrayPicker(words)} hit of ${firstBopper.secondaryAttack + extraPower1} hit points with the left hand`);
        firstBopper.energyLevel= diceRoll(4);

        console.log();
        timer(2000);
        
        firstBopper.healthLevel= secondBopper.primaryAttack + extraPower2 - firstBopper.defense;
          console.log(`${secondBopper.name} threw a ${arrayPicker(words)} hit of ${secondBopper.primaryAttack + extraPower2} hit points with the right hand`);
        secondBopper.energyLevel= diceRoll(4);

        timer(2000);

        firstBopper.healthLevel= secondBopper.secondaryAttack + extraPower2 - firstBopper.defense;
          console.log(`${secondBopper.name} threw a ${arrayPicker(words)} hit of ${secondBopper.secondaryAttack + extraPower2} hit points with the left hand`);
        secondBopper.energyLevel= diceRoll(4);

        
      }else if (firstBopperOrder === 2){
          extraPower1=diceRoll(10)
          extraPower2=diceRoll(10)
        
        firstBopper.healthLevel= secondBopper.primaryAttack + extraPower2 - firstBopper.defense;
          console.log(`${secondBopper.name} threw a ${arrayPicker(words)} hit of ${secondBopper.primaryAttack + extraPower2} hit points with the right hand`);
        secondBopper.energyLevel= diceRoll(4);

        timer(2000);

                firstBopper.healthLevel= secondBopper.secondaryAttack + extraPower2 - firstBopper.defense;
          console.log(`${secondBopper.name} threw a ${arrayPicker(words)} hit of ${secondBopper.secondaryAttack + extraPower2} hit points with the left hand`);
        secondBopper.energyLevel= diceRoll(4);

        console.log()
        
        timer(2500);

        secondBopper.healthLevel= firstBopper.primaryAttack + extraPower1 - secondBopper.defense;
          console.log(`${firstBopper.name} threw a ${arrayPicker(words)} hit of ${firstBopper.primaryAttack + extraPower1} hit points with the right hand`);
        firstBopper.energyLevel= diceRoll(4);

        timer(2500);
        
                secondBopper.healthLevel= firstBopper.secondaryAttack + extraPower1 - secondBopper.defense;
          console.log(`${firstBopper.name} threw a ${arrayPicker(words)} hit of ${firstBopper.secondaryAttack + extraPower1} hit points with the left hand`);
        firstBopper.energyLevel= diceRoll(4);
      }else{
        console.log("ERROR");
      }

if (firstBopper.health <= 0){
  firstBopper.health = 0;
}else{
}

if (secondBopper.health <= 0){
  secondBopper.health = 0;
}
    
timer(2000)
    if(firstBopper.energy <=0){
      firstBopper.healthLevel = firstBopper.health;
        console.log(`${firstBopper.name} has depleted their energy source and is out cold.`)
    }else{};
    if (secondBopper.energy <=0){
      secondBopper.healthLevel = secondBopper.health;
        console.log(`${secondBopper.name} has depleted their energy source and is out cold.`)
    }else{
    }

///round display///
    console.log()
    console.log(firstBopper.healthLevel);
        console.log(firstBopper.energyLevel);
    console.log()
    console.log(secondBopper.healthLevel);
        console.log(secondBopper.energyLevel);

    const nextRound = prompt("Hit Enter to continue...");
          extraPower1=extraPower1-1
          extraPower2=extraPower1-1
  }
};

const winner = function(firstBopper, secondBopper){
  console.log()
  if (firstBopper.health === secondBopper.health){
    console.log ("You both have tied, and will be splitting the billion dollar prize.");
  }else if (secondBopper.health === 0){
    console.log(`Congradulations ${firstBopper.name}, the ${firstBopper.texture} ${firstBopper.color} Bopper, you have taken the trophy, and will be rich forever.`);
  }else if (firstBopper.health === 0){
    console.log(`Congradulations ${secondBopper.name}, the ${secondBopper.texture} ${secondBopper.color} Bopper, you have taken the trophy, and will be rich forever.`);
  }else{
    console.log('error');
  }
}

///variables///
const color = ["Blue" , "Green", "Gray", "Red", "Yellow", "White"];

const words = [`mighty`, `powerful`, `rough`, `striking`, `stinging`, `killing`]

const texture = ["Slimy" , "Ridged", "Rough", "Smooth", "Grainy", "Wet"];



console.log("The arena is packed, the fans are chanting. It is your time to become the boppers. You will input 2 names for 2 boppers. You shall then fight until you health is at inactive or your energy is depleted. Be mindful that you have no combat control of the boppers for a fair fight. You will be a spectator, and watch your two boppers fight til the death. Now lets get this match on!");

nextRound = prompt("Hit Enter to continue...");
console.log();

const player1 = prompt ("What would you like to name your first bopper?")
const player2 = prompt ("What would you like to name your second bopper?")
console.log();

console.log("Below are your boppers stats that will help determine the outcome of the match, but dont be fooled by the numbers");
console.log()

const bopper1= new boopers.boppers(player1);
bopper1.energyLevel = 0;
bopper1.healthLevel = 0;
bopper1.display();
console.log()
const bopper2= new boopers.boppers(player2);
bopper2.energyLevel = 0;
bopper2.healthLevel = 0;
bopper2.display();

nextRound = prompt("Hit Enter to continue to the coin toss...");
coinToss(bopper1, bopper2, bopper1.name, bopper2.name)

nextRound = prompt("Hit Enter to continue to the fight that you have been waiting for...");

fight(bopper1,bopper1.order, bopper2);
      winner(bopper1, bopper2);

///final///
console.log("thank you for playing the one and only boppers, I am very sad to see you go. I forgot to introduce my self at the begining, I am Borat. You do very good in thi bopping. I cannot wait to see again.")