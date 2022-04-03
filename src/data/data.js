import babolatPureAero from '../assets/racquets/babolat-pure-aero.jpg';
import babolatPureDrive from '../assets/racquets/babolat-pure-drive.jpg';
import babolatPureStrike from '../assets/racquets/babolat-pure-strike-vs.jpg';
import uniqid from 'uniqid';

export const categoryRouteMapping = new Map([
  ['Tennis Racquets', 'racquets'],
  ['Clothing', 'clothing'],
  ['Shoes', 'shoes'],
  ['Strings', 'strings']
]);

export const storeItems = [
  {
    name: 'Babolat Pure Aero',
    category: 'Tennis Racquets',
    brand: 'Babolat',
    price: 99.99,
    description:
      'Pariatur veniam aliqua duis esse consequat magna est aliquip ex eiusmod.',
    image: babolatPureAero,
    id: uniqid()
  },
  {
    name: 'Babolat Pure Drive',
    category: 'Tennis Racquets',
    brand: 'Babolat',
    price: 99.99,
    description: 'Est tempor ullamco proident aliqua aliqua Lorem occaecat.',
    image: babolatPureDrive,
    id: uniqid()
  },
  {
    name: 'Babolat Pure Strike VS',
    category: 'Tennis Racquets',
    brand: 'Babolat',
    price: 99.99,
    description:
      'Sit dolore duis laborum laboris incididunt adipisicing magna deserunt incididunt excepteur.',
    image: babolatPureStrike,
    id: uniqid()
  },
  {
    name: 'Babolat Pure Strike VS',
    category: 'Clothing',
    brand: 'Babolat',
    price: 99.99,
    description:
      'Sit dolore duis laborum laboris incididunt adipisicing magna deserunt incididunt excepteur.',
    image: babolatPureStrike,
    id: uniqid()
  },
  {
    name: 'Babolat Pure Strike VS',
    category: 'Shoes',
    brand: 'Babolat',
    price: 99.99,
    description:
      'Sit dolore duis laborum laboris incididunt adipisicing magna deserunt incididunt excepteur.',
    image: babolatPureStrike,
    id: uniqid()
  },
  {
    name: 'Babolat Pure Strike VS',
    category: 'Strings',
    brand: 'Babolat',
    price: 99.99,
    description:
      'Sit dolore duis laborum laboris incididunt adipisicing magna deserunt incididunt excepteur.',
    image: babolatPureStrike,
    id: uniqid()
  }
];
