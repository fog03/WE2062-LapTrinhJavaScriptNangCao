'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location:'Via Angelo Tavati 23, Firenze, Italy',
    categories: ['Italian','Pizzerian','Vegatarian',
                'Organic'],
    starterMenu:['Focacian','Bruschetta','Garlic Bread',
                'Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto'],
    oder:function (starterIndex,mainIndex) {
        return[this.starterMenu[starterIndex],this.mainMenu[mainIndex]]
    }
};
//Distructuring is  an ESX feature and it's basically a way of unpacking values from
//an array or an  object into separate variables.
//so in other words destructuring is to break a complex data structure like a variables
const arr = [2,3,4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x,y,z]=arr;
console.log(x,y,z);
console.log(arr);

let [main,,secondary] = restaurant.categories;
console.log(main,secondary);
// chuyển đổi biến
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[main,secondary] = [secondary,main];
console.log(main,secondary);

const [starter,mainCouse] = restaurant.oder(1,2);
console.log(starter,mainCouse);

const nested = [3,4,[5,6]];
// const [i,,j] = nested;
const [i,,[j,k]] = nested;
console.log(i,j,k)

const [p=1,q=1,r=1]=[8,9];
console.log(p,q,r);