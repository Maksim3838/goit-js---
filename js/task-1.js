function isEnoughCapacity(products, containerSize){
      const quan = Object.values(products);  
     const tot = quan.reduce((total, quan) => total + quan, 0);
     return tot <= containerSize;
} 
 
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
);