/*You will probably not have to take destructuring to such a level as this but this is for you to really wrap your brains around the mechanics. 
EVERY EXERCISE SHOULD USE DESTRUCTURING*/

//3.  Destructure this object literal so that each value can be called by its key. Re-name the array values for the 'names' key of the ocean object to AT, PA, IN, and AR
    const water = {
    lake: {
    description: 'surrounded by land',
    popular: { state: 'Michigan', name: 'Lake Michigan' },
    },
    river: {
    definition: 'flows towards ocean',
    known: { place: 'New York', label: 'Hudson River' },
    },
    ocean: {
    context: 'body of water that composes much of a planet hydrosphere',
    names: ['Atlantic', 'Pacific', 'Indian', 'Arctic'],
    },
    };

//'solution'
    const {lake, river, ocean} = water;

    const { Atlantic = 'AT', Pacific = 'PA' , Indian  ='IN', Arctic = 'AR'} = water;


//testing
console.log(river);
console.log(Atlantic);
console.log(ocean);
console.log(Arctic);
//to space
console.log( )

    

//4.  Using destructuring create a new array that maps through the items array and from each item in the loop, a string of the color and shape values should be logged. for example one loop should return 'blue circle' from the items array. This is not a function. you will just map and use the items array as the only array.
    let items = [
    { color: 'blue', shape: 'circle' },
    { color: 'orange', shape: 'triangle' },
    { color: 'red', shape: 'square' },
    ];


// const [{color, shape}] = items
// const [{color},{shape}] = items

// const [color, shape] = items
// const {blue, orange, red} = color
// const {circle, triangle, square } = shape

// items.map(({color, shape}))

/* solution */
items.map((items) =>{
    const {color, shape} = items;
    console.log(`${color} ${shape}`)
})
//to space
console.log()


    // console.log(color, shape)
    // console.log(color, shape)
    // console.log(shape)
    // console.log(items)
// let newArr = items.map((element) =>{
// console.log(`${element.color} ${element.shape}`)
// })



//5.  Deconstruct the complete car object literal
    //Find a way to call just one variable name for each of the carTypes
    //rename the array values inside the otherShops array to third, fourth, and for the last two values they should be in an array called fifth
    const car = {
    carTypes: {
    one: { make: 'Mercedes', model: 'Meybach', year: 2020 },
    two: {
    make: 'toyota',
    model: 'Landcruiser',
    year: 2018,
    },
    },
    numWheels: 4,
    gps: true,
    autoSteer: true,
    repairPlaces: {
    main: 'Dealership',
    second: 'Roe Park Car Shop',
    otherShops: [
    'Bozo Repair',
    'Johnson Body',
    'Fixer Upper Central', 
    'Last Chance Repairs',
    ],
    },
    };

    // const{mak} = car

    // console.log(make)


/*6.  Create a class Cars that takes make, color, and year
    Instantiate 4 cars, car1,car2, car3, car4
    Using destructuring declare the make, color and year variables for each car and console.log the variables
    OR SHOULD I SAY declare the make, color and year and list a string for each showing their values.*/
    
    // let Cars = new car(/)
// class Cars extends car{
    // constructor()
// }

class Cars{
    constructor(make, color, year){
        this.make = make,
        this.color = color,
        this.year = year
    }
}

// const {make, color, year} = Cars/;
//Instantiation 
let car1 = new Cars ('Jeep', 'White', '2014')
let car2 = new Cars ('Toyota', 'Green', '2002')
let car3 = new Cars ('Mazda', 'blue', '2020')
console.log(car1);
console.log(car2);
console.log(car3)
//logging
console.log(`My ${year} ${make} is ${color}`)


 //7. Using destructuring, choose all the schools with a gpa higher than 3.5,
      //and list the chosen object ascending by major and log the average gpa,
      //use method chaining if you can

let schoolArray = [
  { school: 'Pataway', major: 'comp sci', year: 'sophomore', gpa: 3.2 },
  { school: 'Bronxville', major: 'medicine', year: 'junior', gpa: 4.0 },
  { school: 'Scarsdale', major: 'accounting', year: 'freshman', gpa: 2.6 },
  { school: 'Peekskill', major: 'liberal arts', year: 'freshman', gpa: 4.0 },
  { school: 'Anopram', major: 'accounting', year: 'senior', gpa: 3.7 },
];
const { school, major, gpa } = schoolArray


// console.log(school, major, gpa)