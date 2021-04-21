const ages = [10, 20, 30];
const ages2 = [50, 60, 70];
const ages3 = [90, 100];
const allAges = ages.concat(ages2).concat(ages3);
const allAges2 = [ ...ages, ...ages2, ...ages3];
console.log(allAges2);

// ... = spread Operator;

const business = 650;
const minister = 450;
const sochib = 250;
const takaPoisa = [650, 450, 250];
const maximum = Math.max(business, minister, sochib);
const maximum2 = Math.max(...takaPoisa);
console.log(maximum2);