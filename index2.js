let uniqueMeats = ['steak', 'lobster', 'veal', 'turkey', 'chicken', 'buffalo'];
let veggie = ['carrots', 'peas', 'corn', 'beets'];
let desserts = ['brownies', 'lava cake', 'cinnamon ice cream'];

uniqueMeats.pop();
veggie.pop();
let desserts = desserts[3]; //string variable that contains one item from the desserts array. 
var mondayMenu =
uniqueMeats.concat(veggie);
mondayMenu.push(desserts);
console.log("Mondays Menu: " + mondayMenu);