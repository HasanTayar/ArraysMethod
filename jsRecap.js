//if else shortcut
//!Ternaries
let message;
let bottle={
    fullOfSode:true
};
if(bottle.fullOfSode){
    message = "The bottle has Soda";
}
else{
    message = "The bottle may not have soda";
}
//Ternaries
let message2=bottle.fullOfSode? "The bottle has Soda" : "The bottle may not have soda";

//! Array methods
const dogs = [
    {
        id:"dog-1",
        name:"Poodle",
        temperament:[
            "Intelligent",
            "Active",
            "Alert",
            "Faithfull",
            "Trainable",
            "Instinctful"
        ]
    },
    {
        id:"dog-2",
        name:"Bernese Mountain Dog",
        temperament:[
            "Affectionate",
            "Intelligent",
            "Loyal",
            "Faithfull",

        ]
    },
    {
        id:"dog-3",
        name:"Labrador",
        temperament:[
            "Intilligent",
            "Even tempered",
            "Kind",
            "Agile",
            "Outgoing",
            "Trusting",
            "Gentle"
        ]
    }
]
//The find() method  returns the first element in the provided array that satisfies the
//provided testing function. if no values satfiy the function , undfiend is returend
dogs.find((dog)=> dog.name === "Bernese Mountain Dog");
//! Some Method
dogs.some((dog) => dog.temperament.includes("Aggresive"));
//False
// The some() method tests whether at least one element in the array passes  the test implemented 
// by the provided functtion. it returns true if , in the array its finds an element for which the provided functions returns
// true otherwise it reurns false;

//! Every Method
dogs.every((dog) => dog.temperament.includes("trusting"));
// false

dogs.every((dog) => dog.temperament.includes("intelligent"));
//true

// ! Map Method
dogs.map((dog) =>dog.name);
//['Proodle' , "Bernese" , "Labrador"]
//The map() method creaates a new array populated with the result of calling a provided function
//on every element in the calling array

// ! Filter 
const filtrend = dogs.filter((dog) => dog.temperament.includes("Faithful"));
//the filter() method creates a shallow copy of a portion a  given array , filtered
//down to just the elements from the given array that pass the test implemntrd by the provided
//function

//! Reduce 
const reduced = dogs.reduce((acc , dog) =>{
    return [...acc,...dog.temperament]
},[])

console.log(reduced)
// [
//   'Intelligent',  'Active',
//   'Alert',        'Faithfull',
//   'Trainable',    'Instinctful',
//   'Affectionate', 'Intelligent',
//   'Loyal',        'Faithfull',
//   'Intilligent',  'Even tempered',
//   'Kind',         'Agile',
//   'Outgoing',     'Trusting',
//   'Gentle'
// ]
