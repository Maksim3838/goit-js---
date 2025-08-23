class Car {

constructor(brend, tap, cent) {
this.brend = brend;
this.tap = tap;
this.cent = cent;
}
getcent() {
  return this.cent;
}
tytyty (newcent) {
this.cent = newcent;
}

}




const audi = new Car (`audi`, `retro`, 1700);
const bmw = new Car (`bmw`, `lala`, 2577);

audi.tytyty(500)
console.log(`audi`, audi.cent);
bmw.tytyty(6666666666666);
console.log(`bmw`, bmw.cent);
console.log(Car);

