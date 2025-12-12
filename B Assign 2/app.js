
const mainStoreInventory = [
    { name: "Laptop", price: 1200, stock: 5 },
    { name: "Mouse", price: 25, stock: 0 },
    { name: "Keyboard", price: 100, stock: 12 }
];

const acquiredStoreInventory = [
    { name: "Monitor", price: 300, stock: 8 },
    { name: "Headphones", price: 50, stock: 0 },
    { name: "Webcam", price: 75, stock: 20 }
];


// Step 1: Merge the Arrays
let unifiedInventory = [...mainStoreInventory, ...acquiredStoreInventory];
// console.log(unifiedInventory);


// Step 2: Clean the Data (Filter)

let inStockItems = unifiedInventory.filter((item, idx) => {
    return item.stock > 0;
});

// console.log(inStockItems);

// Step 3: Apply a Price Adjustment (Map)

let discountedInventory = inStockItems.map((item, idx) => {
   return {
    ...item,
    price: item.price - (item.price * 0.10)
   }
});

// console.log(discountedInventory);



// Step 4: Calculate Total Value (Reduce)

let TotalValue = discountedInventory.reduce((total, item) => {
  return total + (item.stock * item.price);
}, 0);


// 3. Expected Output
// When you log your final result to the console, it should look close to this:

console.log(`Total Inventory Value: ${TotalValue}`);


