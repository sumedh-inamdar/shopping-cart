import babolatPureAero from '../assets/racquets/babolat-pure-aero.jpg';
import babolatPureDrive from '../assets/racquets/babolat-pure-drive.jpg';
import babolatPureStrike from '../assets/racquets/babolat-pure-strike-vs.jpg';
import headSpeedMP from '../assets/racquets/head-speed-mp.jpg';
import headGravityTour from '../assets/racquets/head-gravity-tour.jpg';
import headRadicalPro from '../assets/racquets/head-radical-pro.jpg';
import yonexEzone from '../assets/racquets/yonex-ezone-98.jpg';
import yonexVcore95 from '../assets/racquets/yonex-vcore-95.jpg';
import yonexVcorePro97310 from '../assets/racquets/yonex-vcore-pro-97-310.jpg';
import { itemID } from './itemID';

const idIter = itemID.values();

export const categoryRouteMapping = new Map([
  ['Tennis Racquets', 'racquets'],
  ['Clothing', 'clothing'],
  ['Shoes', 'shoes'],
  ['Strings', 'strings']
]);
export function getItemByID(itemID) {
  return storeItems.find((item) => item.id === itemID);
}
export const storeItems = [
  {
    name: 'Babolat Pure Aero',
    category: 'Tennis Racquets',
    brand: 'Babolat',
    price: 99.99,
    description:
      'Pariatur veniam aliqua duis esse consequat magna est aliquip ex eiusmod.',
    image: babolatPureAero,
    options: {
      'Grip Size': [
        '4 1/8" (#1)',
        '4 1/4" (#2)',
        '4 1/8" (#3)',
        '4 1/2" (#4)',
        '4 5/8" (#5)'
      ],
      Strings: [
        'Unstrung',
        'Synthetic Gut - $10',
        'Polyester - $15',
        'Multifilament - $20',
        'Natural Gut - $40'
      ]
    },
    id: idIter.next().value
  },
  {
    name: 'Babolat Pure Drive',
    category: 'Tennis Racquets',
    brand: 'Babolat',
    price: 99.99,
    description: 'Est tempor ullamco proident aliqua aliqua Lorem occaecat.',
    image: babolatPureDrive,
    id: idIter.next().value
  },
  {
    name: 'Babolat Pure Strike VS',
    category: 'Tennis Racquets',
    brand: 'Babolat',
    price: 99.99,
    description:
      'Sit dolore duis laborum laboris incididunt adipisicing magna deserunt incididunt excepteur.',
    image: babolatPureStrike,
    id: idIter.next().value
  },
  {
    name: 'Head Speed MP',
    category: 'Tennis Racquets',
    brand: 'Head',
    price: 99.99,
    description: 'Veniam ipsum consectetur laborum quis anim dolor ex cillum.',
    image: headSpeedMP,
    id: idIter.next().value
  },
  {
    name: 'Head Gravity Tour',
    category: 'Tennis Racquets',
    brand: 'Head',
    price: 99.99,
    description:
      'Consequat et ipsum dolor commodo ullamco dolore occaecat ipsum est est.',
    image: headGravityTour,
    id: idIter.next().value
  },
  {
    name: 'Head Radical Pro',
    category: 'Tennis Racquets',
    brand: 'Head',
    price: 99.99,
    description: 'Sit voluptate aute ullamco magna commodo nulla labore velit.',
    image: headRadicalPro,
    id: idIter.next().value
  },
  {
    name: 'Yonex EZONE 98',
    category: 'Tennis Racquets',
    brand: 'Yonex',
    price: 99.99,
    description:
      'Ea ex deserunt excepteur commodo pariatur aliquip laboris ex ad.',
    image: yonexEzone,
    id: idIter.next().value
  },
  {
    name: 'Yonex VCORE 95',
    category: 'Tennis Racquets',
    brand: 'Yonex',
    price: 99.99,
    description:
      'Elit do ut voluptate sunt minim deserunt voluptate aliquip est non proident consequat.',
    image: yonexVcore95,
    id: idIter.next().value
  },
  {
    name: 'Yonex VCORE PRO 97 310',
    category: 'Tennis Racquets',
    brand: 'Yonex',
    price: 99.99,
    description: 'Nulla nostrud laborum eiusmod incididunt.',
    image: yonexVcorePro97310,
    id: idIter.next().value
  },
  {
    name: 'Babolat Pure Strike VS',
    category: 'Clothing',
    brand: 'Babolat',
    price: 99.99,
    description:
      'Sit dolore duis laborum laboris incididunt adipisicing magna deserunt incididunt excepteur.',
    image: babolatPureStrike,
    id: idIter.next().value
  },
  {
    name: 'Babolat Pure Strike VS',
    category: 'Shoes',
    brand: 'Babolat',
    price: 99.99,
    description:
      'Sit dolore duis laborum laboris incididunt adipisicing magna deserunt incididunt excepteur.',
    image: babolatPureStrike,
    id: idIter.next().value
  },
  {
    name: 'Babolat Pure Strike VS',
    category: 'Strings',
    brand: 'Babolat',
    price: 99.99,
    description:
      'Sit dolore duis laborum laboris incididunt adipisicing magna deserunt incididunt excepteur.',
    image: babolatPureStrike,
    id: idIter.next().value
  }
];
