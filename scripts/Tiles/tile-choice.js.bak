///function main()

///functions///
const prompt = require('prompt-sync')();

const universal = require('../modules/universal-functions.js');

const classes = require ('../modules/classes.js');
const tileClass = classes.tileClass
const tileType = classes.tileType

const randomArray = universal.randomArray;

const diceRoll = universal.diceRoll;

const timer = universal.sleep;

const tileMenu = function(array){
  x=1
  for (let x = 0; x < array.length; x++) {  
    console.log("Tile " + x);
    tileArray[x].display2();
    console.log()
    timer(1500)
  };
};

const areaCalc = function(width, length){
  const area = width * length;
    return area;
};

const totalTiles = function( areaOne, areaTwo){
    let tiles = areaOne/(areaTwo/144);
      return tiles;
};

const totalPrice = function(tiles, price){
  price = tiles*price;
    return price
};

///variables
const color = ["Blue" , "Green", "Gray", "Red", "Yellow", "White"];
const material = ["Wood" , "Plastic", "Vynil", "concrete", "ceramic"];


const tileArray=[];



///prompting & results///

console.log("Hello welcome to tile picker pro.");
  console.log("Here you will be inputting the type of tyle you are wanting, and the width and length of the room you are tile to help calculate the total area of the room.")
console.log()

console.log("What type of tile are you wanting?");
let userType = prompt("Floor, Ceiling, or Wall?")

while (userType.toLowerCase() != 'floor' && userType.toLowerCase() != `ceiling` && userType.toLowerCase() != `wall`){
  console.log("What type of tile are you wanting?");
 userType = prompt("Floor, Ceiling, or Wall?")
}

///TileMake///
    const tile1 = new tileType(6, 12, 2.25, randomArray(color), userType, randomArray(material), randomArray(color));
      tile1.tileArea = 0
    const tile2 = new tileType(12, 12, 4.25, randomArray(color), userType, randomArray(material), randomArray(color));
      tile2.tileArea = 0
    const tile3 = new  tileType(12, 24, 6.00, randomArray(color), userType, randomArray(material), randomArray(color));
      tile3.tileArea = 0
    const tile4 = new  tileType(24, 24, 8.69, randomArray(color), userType, randomArray(material), randomArray(color));
      tile4.tileArea = 0
    const tile5 = new  tileType(32, 32, 10.79, randomArray(color), userType, randomArray(material), randomArray(color));
      tile5.tileArea = 0

tileArray.push(tile1)
tileArray.push(tile2)
tileArray.push(tile3)
tileArray.push(tile4)
tileArray.push(tile5)

let roomLength = parseInt(prompt(`What is the length of the ${userType} in feet?`));
let roomWidth = parseInt(prompt(`What is the width of the ${userType} in feet?`));

  const roomArea = areaCalc(roomWidth, roomLength)
  console.log(`Your room has an area of ${roomArea} square feet.`);

console.log();
   tileMenu(tileArray);

let desiredCarpet = parseInt(prompt("Select what tile you want. Input Number Only***"));

  while (desiredCarpet != 0 && desiredCarpet != 1 && desiredCarpet != 2 && desiredCarpet != 3 && desiredCarpet != 4){
     desiredCarpet = parseInt(prompt("Select what tile you want. Input Number Only***"));
  }
console.log();

console.log(`You will need an estimated ${Math.ceil(totalTiles(roomArea, tileArray[desiredCarpet]._area))} ${userType} tiles for the estimated price of $${Math.ceil(totalPrice(totalTiles(roomArea, tileArray[desiredCarpet]._area), tileArray[desiredCarpet]._price))}.`);





