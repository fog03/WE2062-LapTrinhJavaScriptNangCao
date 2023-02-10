'use strict';
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavati 23, Firenze, Italy',
    categories: ['Italian', 'Pizzerian', 'Vegatarian',
        'Organic'],
    starterMenu: ['Focacian', 'Bruschetta', 'Garlic Bread',
        'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        },
    },



    oder: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },
    oderDelivery: function ({
        starterIndex = 1,
        mainIndex = 0,
        time = '20:00',
        addres }) {
        console.log(`Oder received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}
        will be delivered to ${addres} and ${time}`);
    },

    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your declicious pasta with
        ${ing1}, ${ing2},${ing3}`);
    }
};

// restaurant.oderDelivery({
//     time: '22:30',
//     addres: 'Via del sole, 21',
//     mainIndex: 1,
//     starterIndex: 2,
// });
// restaurant.oderDelivery({
//     addres: 'Via del sole, 21',
//     starterIndex: 1,
// })
// restaurant.oder()
// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);


// const {
//     name: restaurantName,
//     openingHours: hours,
//     categories: tags
// } = restaurant;
// console.log(restaurantName, hours, tags);

// //default values
// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// //Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 27, b: 4, c: 14 };
// ({ a, b } = obj)
// console.log(a, b);

// const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);
// ----------------------------------------------------------------------------
// Distructuring arrays
//Distructuring is  an ESX feature and it's basically a way of unpacking values from
//an array or an  object into separate variables.
//so in other words destructuring is to break a complex data structure like a variables
// const arr = [2,3,4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x,y,z]=arr;
// console.log(x,y,z);
// console.log(arr);

// let [main,,secondary] = restaurant.categories;
// console.log(main,secondary);
// chuyển đổi biến
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main,secondary] = [secondary,main];
// console.log(main,secondary);

// const [starter,mainCouse] = restaurant.oder(1,2);
// console.log(starter,mainCouse);

// const nested = [3,4,[5,6]];
// // const [i,,j] = nested;
// const [i,,[j,k]] = nested;
// console.log(i,j,k)

// const [p=1,q=1,r=1]=[8,9];
// console.log(p,q,r);
const arr = [7, 8, 9];
const badNewarr = [1, 2, arr[0], arr[2]];
console.log(badNewarr);

const newArr = [1, 2, ...arr];
console.log(newArr);


console.log(...newArr);
console.log(1, 2, 7, 8, 9);


const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);


//copy array

const mainMenucopy = [...restaurant.mainMenu];

// join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);


//Iterables: arrays, strings, maps, sets. NOT objects

const str = "Jonas";
const letter = [...str, '', 'S.'];
console.log(letter);
console.log('j', 'o');
// console.log(`${...str} Schmedmann`);
// real-world example
const ingredients = [
// prompt("'Let\'s make pasta! Ingredient 1?"),
// prompt('Ingredient 2'),
// prompt('Ingredient 3')
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0],ingredients[1],ingredients[2]);
restaurant.orderPasta(...ingredients);


// Objects 
const newRestaurant = {fouder:1998,...restaurant, fouder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristorante Rome";
console.log(restaurantCopy.name);
console.log(restaurant.name);