const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ];
    //Create a function that returns all the names from the array.
   function getName(){
    obj={};
    data.forEach((elemnt , index)=>{
        obj[`name ${index + 1}:`] = elemnt.name;
    });
    return obj;
    }
    // Create a function that returns all the objects that are born before 1990.
    function getOlder(){
        obj={};
    data.forEach((elemnt , index)=>{
        if(elemnt.birthday < '1990'){
            obj[`name ${index + 1}:`] = elemnt;
        }
      
    });
    return obj;
    }
// Create a function that returns an object of all the different
// foods from all the objects as the key and the number of
// times that food is present in all the objects as the value.
function getAllFoodType(){
    const arr1=data.map((data) => data.favoriteFoods.meats);
    const arr2=data.map((data) => data.favoriteFoods.fish);
    const children = arr1.concat(arr2);
    var result_object = {}; 
 
    for(var i = 0; i < children.length; i++){ 
        current_key = children[i][Object.keys(children[i])[0]]; 
        if(typeof result_object[current_key] != 'undefined'){ 
            result_object[current_key]++; 
            continue; 
        }   
        result_object[current_key] = 1; 
        
    }   
    return result_object;
}



    console.log(getAllFoodType());