import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { categoryRouteMapping, getItemByID } from '../../../data/data';
import ItemOption from './ItemOption';
import uniqid from 'uniqid';
import ItemAddedModal from './ItemAddedModal';
import ItemQuantity from './ItemQuantity';
import AddButton from './AddButton';

export default function ItemPage({ setSection }) {
  const params = useParams();
  const item = getItemByID(params.id);
  const [cartItemObj, setCartItemObj] = useState({
    item: item,
    quantity: 1,
    options: item.options.map((option) => ({
      [Object.keys(option)[0]]: Object.values(option)[0][0]
    })),
    unitPrice: item.price,
    id: uniqid()
  });
  const [viewModal, setViewModal] = useState(false);

  // section set upon component load in case user goes back from different section
  useEffect(() => {
    setSection(categoryRouteMapping.get(item.category));
  }, []);

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
    <div className="max-w-2xl py-12 px-6 mx-auto">
      {viewModal && (
        <ItemAddedModal cartItem={cartItemObj} closeModal={closeModal} />
      )}
      <div className="text-4xl text-center md:text-left mb-6">{item.name}</div>
      <div className="flex flex-col md:flex-row md:space-x-8">
        <img
          className="m-auto max-w-[240px] hover:scale-105 transition-transform"
          src={item.image}
          alt={item.name}
        />
        <div className="flex flex-col justify-around flex-1 text-xl m-4">
          <div className="mb-4">{item.description}</div>
          <div className="space-y-4 text-lg">
            <div>
              Unit Price: <span className="font-light">${item.price}</span>
            </div>
            <ItemOption
              options={item.options}
              cartItemObj={cartItemObj}
              setCartItemObj={setCartItemObj}
            />
            <ItemQuantity
              cartItemObj={cartItemObj}
              setCartItemObj={setCartItemObj}
            />
          </div>
          <AddButton
            cartItemObj={cartItemObj}
            setCartItemObj={setCartItemObj}
            setViewModal={setViewModal}
          />
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
