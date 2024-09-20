console.log('Assignment🔽');

// Assignment One ==>

// Array Of Fruits ==>

const fruits = [
    'apple', 'banana', 'orange', '', 'watermelon', 'pawpaw'
]

// (1) Function To Remove The Last Element ==>

const removeFn = () => {
    fruits.pop()
}
removeFn()
console.log(fruits);


// (2) Function To Replace Banana With Kiwi ==>

const replaceFn = () => {
    fruits[1] = 'Kiwi'
}
replaceFn()
console.log(fruits);



// Assignment Two ==>

// Object Of Person

const person = {
    name : 'Rodiyat',
    age : 10,
    location : 'Ogun State, Nigeria'
}

// (1) Function To Access And Print

const accessInfo = () => {
    // Using Dot Notation

    console.log('Name:', person.name);
    console.log('Age:', person.age);
    console.log('Location:', person.location);

    // Using Square Bracket

    console.log('Name:', person['name']);
    console.log('Age:', person['age']);
    console.log('Location:', person['location']);
}
accessInfo();

// (2) Function To Update And Add

const addFn = () => {
    console.log('Age:', person.age = 25);                                      // To Update Age

    console.log('Profession:', person.profession = 'Developer');              // To Add Profession
}
addFn()

// (3) Funtion To Return As An Array

const arrayFn = () => {
    console.log(Object.entries(person));
}
arrayFn()


// (4) Function To Prevent Adding New Properties
Object.seal(person);

const sealFn = () => {
    person['location'] = 'Pegamut'           // To Update Location
    person['username'] = 'Doyin'             // To add username
}
sealFn()
console.log(person);


