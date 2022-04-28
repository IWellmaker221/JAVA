const diceRoll = function (sides){
  let roll = Math.ceil(Math.random()*sides);
    return roll
};




class tileClass {
  constructor(length, width, price, color){
  this._tileID= diceRoll(1000);
  this._length= length; 
  this._width= width;
  this._area= 0;
  this._color= color;
  this._price= price;
    }

    ///getters///
    get id(){
       if(typeof this._tileID === 'number'){
      return 'tile ID:' + this._tileID;
       }else{
                return("ERROR")
       };
  }

    get tileLength(){
        if(typeof this._length === 'number'){
      return 'tile Length:' + this._length + ' Inches';
        }else{
                return("ERROR")
        };
  }
  
    get tileWidth(){
        if(typeof this._width === 'number'){
      return 'tile Width:' + this._width + ' Inches';
        }else{
                return("ERROR")

        };
  }
  
    get tileArea(){
        if(typeof this._area === 'number'){
      return 'tile Area:' + this._area +' Square Inches';
        }else{
                 return("ERROR")
        }
  }
      get tileColor(){
      return 'tile Color:' + this._color;
  }
  
    get tilePrice(){
       if(typeof this._area === 'number'){
      return 'tile Price: $' + this._price + ' Per section of tile';
       }else{
                return("ERROR")
       }
  }

    ///setters///
  set ID(zero){
    this._tileID = this._tileID + zero;
  }
    set tileLength(zero){
    this._length = this._length + zero;
  }
    set tileWidth(zero){
    this._width = this._width + zero;
  }
    set tileArea(zero){
     if(typeof zero === 'number'){
    this._area = this._width * this._length + zero
     }else{
       return("ERROR")
     }
  }
    set tileColor(color){
    this._tileColor = color
  }
    set tilePrice(zero){
    this._price = this._price + zero;
  }

    ///display methods///
  display(){
    console.log(this.id);
    console.log(this.tileLength);
    console.log(this.tileWidth);
    console.log(this.tileArea);
    console.log(this.tileColor);
    console.log(this.tilePrice);
  }
}
class tileType extends tileClass{
  constructor (length, width, price, color, type, material){
      super(length, width, price, color);
    this.type = type;
    this.material = material;
  }
    get materialType(){
    return(`Material: ${this.material}`)
  }

  get typeOfTile(){
    return(`Type: ${this.type}`)
  }
    display2(){
    console.log(this.id);
    console.log(this.typeOfTile)
    console.log(this.materialType)
    console.log(this.tileLength);
    console.log(this.tileWidth);
    console.log(this.tileArea);
    console.log(this.tileColor);
    console.log(this.tilePrice);
  }
}

module.exports.tileClass = tileClass;
module.exports.tileType = tileType;