/*Sleep*/

const sleep = function (milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};


/*diceRoll*/

const diceRoll = function (sides){
  let roll = Math.ceil(Math.random()*sides);
    return roll
};

/*randomArray*/

const randomArray = function (array){
    arrayNumber=Math.floor(Math.random()*array.length);
        const message = array[arrayNumber];
    return message;
}

module.exports.diceRoll = diceRoll;

module.exports.randomArray = randomArray;

module.exports.sleep = sleep;