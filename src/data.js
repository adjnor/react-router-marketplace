const initialItems = [
  {
    description: 'Nice boats. 50% off. wow.',
    price: 10000,
    image: '/boat.png',
    id: 'asewq',
    inventory: 10,
    sellerId: 'ewio',
    reviews: ['450', '10987'],
  },
  {
    id: 'wqwasq',
    description: 'Lawn chairs',
    price: 50,
    image: '/lawnchair.jpg',
    inventory: 5,
    sellerId: 'xcvb',
    reviews: [],
  },
  {
    id: 'sdfghj',
    description: 'Shoe',
    price: 30,
    image: '/shoe.jpeg',
    inventory: 3,
    sellerId: 'xcvb',
    reviews: ['999'],
  },
  {
    id: 'cvbn',
    description: 'Hat',
    price: 10,
    image: '/hat.jpeg',
    inventory: 90,
    sellerId: 'xcvb',
    reviews: ['3456'],
  },
  {
    id: 'poikm',
    description: 'Coat',
    price: 700,
    image: '/coat.jpeg',
    inventory: 0,
    sellerId: 'zzzzz',
    reviews: ['777'],
  },
];

const initialSellers = [
  {
    id: 'ewio',
    name: 'Jack Frost',
    rating: '5 stars',
  },
  {
    id: 'xcvb',
    name: 'Hank Green',
    rating: '2 stars',
  },
  {
    id: 'zzzzz',
    name: 'Bob Dylan',
    rating: '4 stars',
  },
];

const initialReviews = [
  {
    id: '450',
    content: 'Great',
    reviewerId: 'dfghj',
  },
  {
    id: '10987',
    content: 'Bad',
    reviewerId: 'zqg',
  },
  {
    id: '999',
    content: 'AMAZING',
    reviewerId: 'dfghj',
  },
  {
    id: '3456',
    content: 'SO BAD',
    reviewerId: 'zqg',
  },
  {
    id: '777',
    content: 'YES',
    reviewerId: 'zqg',
  },
];

const initialReviewers = [
  {
    id: 'dfghj',
    name: 'Jack',
  },
  {
    id: 'zqg',
    name: 'Nima',
  },
];

export { initialItems, initialSellers, initialReviews, initialReviewers };
