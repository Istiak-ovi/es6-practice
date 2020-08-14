const ages = [12,14,15,16];
const ages2 = [32,45,67,43];
const ages3 = [60,70,80,90];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages,...ages2,555,...ages3]; //same as allAges
// console.log(allAges2);
const business = 450;
const minister = 780;
const shocib = 230;
const takaPoysha = [450,780,230];
// const maximum = Math.max(business,minister,shocib);
const maximum = Math.max(...takaPoysha);
console.log(maximum);