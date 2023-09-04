function calculateTotalPrice(items) {
  if (!Array.isArray(items)) {
    throw new TypeError('Items must be an array');
  }

  if (items.length === 0) {
    return 0;
  }

  let totalPrice = 0;

  items.forEach(item => {
    if (typeof item !== 'object' || !item.hasOwnProperty('price') || typeof item.price !== 'number') {
      throw new TypeError('Each item must be an object with a numeric price property');
    }

    if (item.price < 0) {
      throw new Error('Item price cannot be negative');
    }

    totalPrice += item.price;
  });

  return totalPrice;
}

const items = [
  { name: 'item 1', price: 10 },
  { name: 'item 2', price: 20 },
  { name: 'item 3', price: 30 },
];

console.log('Total price of items is: ', calculateTotalPrice(items));