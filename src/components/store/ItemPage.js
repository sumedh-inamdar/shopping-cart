import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { categoryRouteMapping, getItemByID } from '../../data/data';
import ItemOption from './ItemOption';
import uniqid from 'uniqid';
import {
  findItemInCart,
  setCartItemQuantity,
  calcCartItemPrice
} from '../../utils/helperFunc';
import ItemAddedModal from './ItemAddedModal';

export default function ItemPage({ setSection, cart, setCart }) {
  const params = useParams();
  const item = getItemByID(params.id);
  const [cartItemObj, setCartItemObj] = useState({
    item: getItemByID(params.id),
    quantity: 1,
    options: item.options.map((option) => ({
      [Object.keys(option)[0]]: Object.values(option)[0][0]
    })),
    unitPrice: item.price,
    id: uniqid()
  });
  const [viewModal, setViewModal] = useState(false);

  useEffect(() => {
    setSection(categoryRouteMapping.get(item.category));
  });

  function increaseQuantity() {
    setCartItemObj({ ...cartItemObj, quantity: cartItemObj.quantity + 1 });
  }
  function decreaseQuantity() {
    setCartItemObj({
      ...cartItemObj,
      quantity: Math.max(cartItemObj.quantity - 1, 1)
    });
  }
  function addToCart() {
    setCartItemObj({
      ...cartItemObj,
      unitPrice: calcCartItemPrice(cartItemObj.item.price, cartItemObj.options)
    });
    const cartItem = findItemInCart(cartItemObj, cart);
    if (cartItem) {
      setCartItemQuantity(
        cart,
        setCart,
        cartItem.quantity + cartItemObj.quantity,
        cartItem.id
      );
    } else {
      setCart([...cart, cartItemObj]);
    }
    setViewModal(true);
  }
  function closeModal() {
    const slideAnimation = [{ transform: 'translateX(384px)' }];

    const slideOptions = {
      duration: 200,
      iterations: 1
    };
    let animation = document
      .querySelector('#itemAdded')
      .animate(slideAnimation, slideOptions);
    animation.finished.then(() => setViewModal(false));
  }

  return (
    <div className="m-auto w-fit mt-10">
      {viewModal ? (
        <ItemAddedModal cartItem={cartItemObj} closeModal={closeModal} />
      ) : undefined}
      <div className="text-4xl">{item.name}</div>
      <div className="flex">
        <img
          className="m-4 max-w-[240px] hover:scale-110 transition-transform"
          src={item.image}
          alt={item.name}
        />
        <div className="flex flex-col justify-around flex-1 max-w-sm text-xl m-4">
          <div className="mb-3">{item.description}</div>
          <div className="space-y-4 text-lg">
            <div>
              Unit Price: <span className="font-light">${item.price}</span>
            </div>
            <ItemOption
              options={item.options}
              cartItemObj={cartItemObj}
              setCartItemObj={setCartItemObj}
            />
            <div>
              <div>
                Quantity:{' '}
                <span className="font-light">{cartItemObj.quantity}</span>
              </div>
              <div>
                <button
                  className="border-2 bg-slate-200 w-6 hover:bg-slate-300"
                  onClick={decreaseQuantity}>
                  -
                </button>
                <input
                  className="border-2 w-20 text-center font-light"
                  type="number"
                  value={cartItemObj.quantity}
                  onChange={(e) =>
                    setCartItemObj({
                      ...cartItemObj,
                      quantity: Math.max(1, Number(e.target.value))
                    })
                  }></input>
                <button
                  className="border-2 bg-slate-200 w-6 hover:bg-slate-300"
                  onClick={increaseQuantity}>
                  +
                </button>
              </div>
            </div>
          </div>
          <button
            className="block px-3 py-2 mt-3 bg-lime-200 hover:bg-lime-300"
            onClick={addToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
ItemPage.propTypes = {
  setSection: PropTypes.func,
  cart: PropTypes.array,
  setCart: PropTypes.func
};
