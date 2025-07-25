function fillArray(min, max) {
    let arr = [];
    for (let i = min; i <= max; i += 5) {
       arr.push(i)
      
    }
    return arr ;
}

console.log(fillArray(5, 40));