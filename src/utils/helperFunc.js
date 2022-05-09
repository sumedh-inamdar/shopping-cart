function mergeArrayOfObj(array) {
  let newObj = {};
  for (const obj of array) {
    newObj = { ...newObj, ...obj };
  }
  return newObj;
}

function isSameOptions(options1, options2) {
  options1 = mergeArrayOfObj(options1);
  options2 = mergeArrayOfObj(options2);
  return Object.keys(options1).every((key) => options1[key] === options2[key]);
}

export function findItemInCart(cartItemObj, cart) {
  for (const item of cart) {
    if (
      item.item.id === cartItemObj.item.id &&
      isSameOptions(item.options, cartItemObj.options)
    )
      return item;
  }
  return false;
}

export function calcCartItemPrice(unitPrice, options) {
  const mergedOptions = mergeArrayOfObj(options);
  const optionsPrice = Object.values(mergedOptions)
    .filter((optionString) => optionString.includes('$'))
    .map((option) => Number(option.match(/\$\d+\.?\d+/gm)[0].slice(1)))
    .reduce((prev, curr) => prev + curr, 0);
  return unitPrice + optionsPrice;
}

export function setCartItemQuantity(cart, setCart, qty, cartItemID) {
  const cartCopy = cart.map((cartItem) => Object.assign({}, cartItem));
  const targetCartItem = cartCopy.find(
    (cartItem) => cartItem.id === cartItemID
  );
  targetCartItem.quantity = qty;
  setCart(cartCopy);
}

export function calcCartTotal(cart) {
  return cart
    .map((cartItem) => cartItem.unitPrice * cartItem.quantity)
    .reduce((prev, curr) => prev + curr);
}
