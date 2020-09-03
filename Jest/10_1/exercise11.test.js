
// setPrice(item: Object, price: Number) => item: Object
const setPrice = (item, price) => {
  // TODO: implement
  const result = Object.assign({}, item);
  result.price = price;
  return result;
};

setPrice({name: 'test', price: 30,}, 50);

// addToCart(cart: Array, item: Object) => cart: Array
const addToCart = (cart = [], item) => {
  // TODO: implement
  const newCart = [];
  newCart.push(item);
  return newCart;
};

addToCart([], {name: 'test', price: 30,});

describe('setPrice()', () => {
  it('should set the price in the given item object, immutably.', () => {
    const item = {
      name: 'test',
      price: 30,
    };
    const copy = Object.assign({}, item);

    const actual = setPrice(item, 50);
    const expected = {
      name: 'test',
      price: 50,
    };

    expect(actual).toEqual(expected);
    expect(item).toEqual(copy);
  });
});

describe('addToCart()', () => {
  it('should add item to cart, immutably', () => {
    const originalCart = [];
    const item = {
      name: 'Violator',
      price: 30,
    };
    const copy = originalCart.slice();

    const actual = addToCart(originalCart, item);
    const expected = [item];

    expect(actual).toEqual(expected);
    expect(originalCart).toEqual(copy);
  });
});