import babolatPureAero from '../assets/racquets/babolat-pure-aero.jpg';
import babolatPureDrive from '../assets/racquets/babolat-pure-drive.jpg';
import babolatPureStrike from '../assets/racquets/babolat-pure-strike-vs.jpg';
import headSpeedMP from '../assets/racquets/head-speed-mp.jpg';
import headGravityTour from '../assets/racquets/head-gravity-tour.jpg';
import headRadicalPro from '../assets/racquets/head-radical-pro.jpg';
import yonexEzone from '../assets/racquets/yonex-ezone-98.jpg';
import yonexVcore95 from '../assets/racquets/yonex-vcore-95.jpg';
import yonexVcorePro97310 from '../assets/racquets/yonex-vcore-pro-97-310.jpg';
import mensTopAdidas from '../assets/mens clothing/adidas-mens-tops.jpg';
import mensTopNike from '../assets/mens clothing/nike-mens-tops.jpg';
import mensTopYonex from '../assets/mens clothing/yonex-mens-tops.jpg';
import mensBottomNike from '../assets/mens clothing/nike-mens-bottoms.jpg';
import mensBottomAsics from '../assets/mens clothing/asics-mens-bottoms.jpg';
import mensBottomAdidas from '../assets/mens clothing/adidas-mens-bottoms.jpg';
import mensJacketsNike from '../assets/mens clothing/nike-mens-jackets.jpg';
import mensJacketsAdidas from '../assets/mens clothing/adidas-mens-jackets.jpg';
import womensTopsAdidas from '../assets/womens clothing/adidas-womens-tops.jpg';
import womensTopsNike from '../assets/womens clothing/nike-womens-tops.jpg';
import womensTopsYonex from '../assets/womens clothing/yonex-womens-tops.jpg';
import womensBottomsAdidas from '../assets/womens clothing/adidas-womens-bottoms.jpg';
import womensBottomsNike from '../assets/womens clothing/nike-womens-bottoms.jpg';
import womensBottomsYonex from '../assets/womens clothing/yonex-womens-bottoms.jpg';
import womensDressesNike from '../assets/womens clothing/nike-womens-dress.jpg';
import womensDressesAdidas from '../assets/womens clothing/adidas-womens-dress.jpg';

import { itemID } from './itemID';

const idIter = itemID.values();

export const categoryRouteMapping = new Map([
  ['Tennis Racquets', 'racquets'],
  [`Men's Clothing`, 'mensClothing'],
  [`Women's Clothing`, 'womensClothing'],
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
    options: [
      {
        'Grip Size': [
          '4 1/8" (#1)',
          '4 1/4" (#2)',
          '4 3/8" (#3)',
          '4 1/2" (#4)',
          '4 5/8" (#5)'
        ]
      },
      {
        Strings: [
          'Unstrung',
          'Synthetic Gut - $10',
          'Polyester - $15',
          'Multifilament - $20',
          'Natural Gut - $40'
        ]
      }
    ],
    id: idIter.next().value
  },
  {
    name: 'Babolat Pure Drive',
    category: 'Tennis Racquets',
    brand: 'Babolat',
    price: 99.99,
    description: 'Est tempor ullamco proident aliqua aliqua Lorem occaecat.',
    image: babolatPureDrive,
    options: [
      {
        'Grip Size': [
          '4 1/8" (#1)',
          '4 1/4" (#2)',
          '4 3/8" (#3)',
          '4 1/2" (#4)',
          '4 5/8" (#5)'
        ]
      },
      {
        Strings: [
          'Unstrung',
          'Synthetic Gut - $10',
          'Polyester - $15',
          'Multifilament - $20',
          'Natural Gut - $40'
        ]
      }
    ],
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
    options: [
      {
        'Grip Size': [
          '4 1/8" (#1)',
          '4 1/4" (#2)',
          '4 3/8" (#3)',
          '4 1/2" (#4)',
          '4 5/8" (#5)'
        ]
      },
      {
        Strings: [
          'Unstrung',
          'Synthetic Gut - $10',
          'Polyester - $15',
          'Multifilament - $20',
          'Natural Gut - $40'
        ]
      }
    ],
    id: idIter.next().value
  },
  {
    name: 'Head Speed MP',
    category: 'Tennis Racquets',
    brand: 'Head',
    price: 99.99,
    description: 'Veniam ipsum consectetur laborum quis anim dolor ex cillum.',
    image: headSpeedMP,
    options: [
      {
        'Grip Size': [
          '4 1/8" (#1)',
          '4 1/4" (#2)',
          '4 3/8" (#3)',
          '4 1/2" (#4)',
          '4 5/8" (#5)'
        ]
      },
      {
        Strings: [
          'Unstrung',
          'Synthetic Gut - $10',
          'Polyester - $15',
          'Multifilament - $20',
          'Natural Gut - $40'
        ]
      }
    ],
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
    options: [
      {
        'Grip Size': [
          '4 1/8" (#1)',
          '4 1/4" (#2)',
          '4 3/8" (#3)',
          '4 1/2" (#4)',
          '4 5/8" (#5)'
        ]
      },
      {
        Strings: [
          'Unstrung',
          'Synthetic Gut - $10',
          'Polyester - $15',
          'Multifilament - $20',
          'Natural Gut - $40'
        ]
      }
    ],
    id: idIter.next().value
  },
  {
    name: 'Head Radical Pro',
    category: 'Tennis Racquets',
    brand: 'Head',
    price: 99.99,
    description: 'Sit voluptate aute ullamco magna commodo nulla labore velit.',
    image: headRadicalPro,
    options: [
      {
        'Grip Size': [
          '4 1/8" (#1)',
          '4 1/4" (#2)',
          '4 3/8" (#3)',
          '4 1/2" (#4)',
          '4 5/8" (#5)'
        ]
      },
      {
        Strings: [
          'Unstrung',
          'Synthetic Gut - $10',
          'Polyester - $15',
          'Multifilament - $20',
          'Natural Gut - $40'
        ]
      }
    ],
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
    options: [
      {
        'Grip Size': [
          '4 1/8" (#1)',
          '4 1/4" (#2)',
          '4 3/8" (#3)',
          '4 1/2" (#4)',
          '4 5/8" (#5)'
        ]
      },
      {
        Strings: [
          'Unstrung',
          'Synthetic Gut - $10',
          'Polyester - $15',
          'Multifilament - $20',
          'Natural Gut - $40'
        ]
      }
    ],
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
    options: [
      {
        'Grip Size': [
          '4 1/8" (#1)',
          '4 1/4" (#2)',
          '4 3/8" (#3)',
          '4 1/2" (#4)',
          '4 5/8" (#5)'
        ]
      },
      {
        Strings: [
          'Unstrung',
          'Synthetic Gut - $10',
          'Polyester - $15',
          'Multifilament - $20',
          'Natural Gut - $40'
        ]
      }
    ],
    id: idIter.next().value
  },
  {
    name: 'Yonex VCORE PRO 97 310',
    category: 'Tennis Racquets',
    brand: 'Yonex',
    price: 99.99,
    description: 'Nulla nostrud laborum eiusmod incididunt.',
    image: yonexVcorePro97310,
    options: [
      {
        'Grip Size': [
          '4 1/8" (#1)',
          '4 1/4" (#2)',
          '4 3/8" (#3)',
          '4 1/2" (#4)',
          '4 5/8" (#5)'
        ]
      },
      {
        Strings: [
          'Unstrung',
          'Synthetic Gut - $10',
          'Polyester - $15',
          'Multifilament - $20',
          'Natural Gut - $40'
        ]
      }
    ],
    id: idIter.next().value
  },
  {
    name: `adidas Men's Core Club 3-Stripe Crew`,
    category: `Men's Clothing`,
    type: 'Tops',
    brand: 'Adidas',
    price: 29.99,
    description:
      'Esse qui pariatur pariatur do est sint culpa do magna reprehenderit.',
    image: mensTopAdidas,
    options: [
      {
        Size: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        Color: ['White', 'Black']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `Nike Men's Core Advantage Henley`,
    category: `Men's Clothing`,
    type: 'Tops',
    brand: 'Nike',
    price: 29.99,
    description:
      'Anim cillum ex reprehenderit mollit ea dolore eu sunt pariatur minim consequat.',
    image: mensTopNike,
    options: [
      {
        Size: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        Color: ['Navy', 'Black', 'White']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `Yonex Men's Slam Polo`,
    category: `Men's Clothing`,
    type: 'Tops',
    brand: 'Yonex',
    price: 29.99,
    description: 'Ut officia cillum sit aliquip qui elit anim tempor.',
    image: mensTopYonex,
    options: [
      {
        Size: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        Color: ['Blue', 'Red', 'White']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `Nike Men's Core Advantage 9" Short`,
    category: `Men's Clothing`,
    type: 'Bottoms',
    brand: 'Nike',
    price: 29.99,
    description:
      'Est sint proident adipisicing id sit in sint fugiat occaecat officia deserunt et.',
    image: mensBottomNike,
    options: [
      {
        Size: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
      },
      {
        Color: ['Black', 'Navy', 'White']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `Asics Men's Fall New Strong Tennis Pant`,
    category: `Men's Clothing`,
    type: 'Bottoms',
    brand: 'Asics',
    price: 29.99,
    description: 'Ut amet ex nulla irure incididunt est sunt anim.',
    image: mensBottomAsics,
    options: [
      {
        Size: ['XL', 'XXL']
      },
      {
        Color: ['Blue', 'White']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `adidas Men's Core Club 3-Stripe Short`,
    category: `Men's Clothing`,
    type: 'Bottoms',
    brand: 'Adidas',
    price: 29.99,
    description: 'Magna enim mollit sit veniam enim nostrud.',
    image: mensBottomAdidas,
    options: [
      {
        Size: ['XS', 'S', 'L', 'XL']
      },
      {
        Color: ['White', 'Black']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `Nike Men's Core Epic Jacket`,
    category: `Men's Clothing`,
    type: 'Jackets',
    brand: 'Nike',
    price: 59.99,
    description: 'Ut amet eiusmod ipsum laboris tempor.',
    image: mensJacketsNike,
    options: [
      {
        Size: ['S', 'M', 'L', 'XL', 'XXL']
      },
      {
        Color: ['Black', 'Grey', 'Navy']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `adidas Men's Fall Woven Jacket`,
    category: `Men's Clothing`,
    type: 'Jackets',
    brand: 'Adidas',
    price: 59.99,
    description:
      'Consectetur sit laborum eu velit tempor cupidatat nostrud labore irure sunt.',
    image: mensJacketsAdidas,
    options: [
      {
        Size: ['S', 'M', 'L', 'XL', 'XXL']
      },
      {
        Color: ['Black', 'Grey', 'Navy']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `adidas Women's Core Club Tennis Tank`,
    category: `Women's Clothing`,
    type: 'Tops',
    brand: 'Adidas',
    price: 59.99,
    description:
      'Consectetur sit laborum eu velit tempor cupidatat nostrud labore irure sunt.',
    image: womensTopsAdidas,
    options: [
      {
        Size: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        Color: ['Black', 'White']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `Nike Women's Summer Advantage Top`,
    category: `Women's Clothing`,
    type: 'Tops',
    brand: 'Nike',
    price: 59.99,
    description:
      'Nisi enim sint sit nisi velit eu qui ut irure id esse ex aliqua aliqua.',
    image: womensTopsNike,
    options: [
      {
        Size: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        Color: ['Black', 'Purple', 'White']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `Yonex Women's Melbourne Sleeveless Polo`,
    category: `Women's Clothing`,
    type: 'Tops',
    brand: 'Yonex',
    price: 59.99,
    description:
      'Mollit amet consectetur ullamco magna occaecat sit veniam nisi in dolore officia.',
    image: womensTopsYonex,
    options: [
      {
        Size: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        Color: ['Pink', 'Black', 'White']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `adidas Women's Core Club Pleated Skirt`,
    category: `Women's Clothing`,
    type: 'Bottoms',
    brand: 'adidas',
    price: 59.99,
    description:
      'Mollit amet consectetur ullamco magna occaecat sit veniam nisi in dolore officia.',
    image: womensBottomsAdidas,
    options: [
      {
        Size: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        Color: ['Black', 'White']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `Nike Women's Core Club 14" Skirt`,
    category: `Women's Clothing`,
    type: 'Bottoms',
    brand: 'Nike',
    price: 59.99,
    description:
      'Dolore occaecat irure magna mollit in aliquip dolor sit dolor adipisicing.',
    image: womensBottomsNike,
    options: [
      {
        Size: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        Color: ['Black', 'Navy', 'White']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `Yonex Women's Slam Short`,
    category: `Women's Clothing`,
    type: 'Bottoms',
    brand: 'Yonex',
    price: 59.99,
    description:
      'Sunt velit et aliqua minim cillum proident elit esse nulla quis.',
    image: womensBottomsYonex,
    options: [
      {
        Size: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        Color: ['White', 'Black']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `Nike Women's Summer Victory Dress`,
    category: `Women's Clothing`,
    type: 'Dresses',
    brand: 'Nike',
    price: 59.99,
    description: 'Eiusmod in consequat magna non dolor do nostrud non.',
    image: womensDressesNike,
    options: [
      {
        Size: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        Color: ['Black', 'Blue', 'White', 'Yellow']
      }
    ],
    id: idIter.next().value
  },
  {
    name: `adidas Women's Summer Premium Dress`,
    category: `Women's Clothing`,
    type: 'Dresses',
    brand: 'Adidas',
    price: 59.99,
    description: 'Eiusmod in consequat magna non dolor do nostrud non.',
    image: womensDressesAdidas,
    options: [
      {
        Size: ['XS', 'S', 'M', 'L', 'XL']
      },
      {
        Color: ['Blue', 'White', 'Yellow']
      }
    ],
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
    options: [
      {
        'Grip Size': [
          '4 1/8" (#1)',
          '4 1/4" (#2)',
          '4 3/8" (#3)',
          '4 1/2" (#4)',
          '4 5/8" (#5)'
        ]
      },
      {
        Strings: [
          'Unstrung',
          'Synthetic Gut - $10',
          'Polyester - $15',
          'Multifilament - $20',
          'Natural Gut - $40'
        ]
      }
    ],
    id: idIter.next().value
  }
];
