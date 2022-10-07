const toys = 
[
{
    id: 1,
    NameOfToy: 'T-Rex',
    Catagory: 'dinosuar',
    Barcode: '0001',
    price: 5.00
},
 {
    id: 2,
    NameOfToy: 'Remote Shark-Truck',
    Catagory: 'electronics',
    Barcode: '0002',
    price: 20.00
},
{
    id: 3,
    NameOfToy: 'Sharks of the Deep',
    Catagory: 'book',
    Barcode: '0003',
    price: 10.00
}
];

// adding two new objects to toys array ussing .push()
const colt1911 = {
    id: 4,
    NameOfToy: 'Colt 1911',
    Catagory: 'airsoft gun',
    Barcode: '0004',
    price: 50.00
};
const minnionsMovie = {
    id: 5,
    NameOfToy: 'Minnions Movie',
    Catagory: 'movie',
    Barcode: '0005',
    price: 10.00
};

toys.push(colt1911);
toys.push(minnionsMovie);
//allows customer to find a specific toy using the id number
let toyToFind = 1;

for (const prices of toys) {
    if (prices.id == toyToFind) {
    //add 5% to each price
    prices.price = prices.price * 1.05
    console.log(`The ${prices.NameOfToy} cost $${prices.price} all summer long.`)
    }
};
