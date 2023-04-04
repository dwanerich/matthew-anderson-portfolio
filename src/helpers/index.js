import image1 from '../img/des.jpeg';

export const deriveImageArrayFromCategory = (categoryAssets) => {
  const imageArray = [];

  for (let image in categoryAssets) {
    imageArray.push(categoryAssets[image]);
  }

  return imageArray;
};

// random page images
export const images = [
  'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1457459440405-NWWOL6WPWH8LUIRU6VES/Alessandra+3.jpg?format=750w',
  'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1477363325421-MWQ96FXGQJIIFRI9BKIF/art_56128e46dd379.jpg?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1470270245559-25TBAT8PM8XD2SZUYL8O/Screen+Shot+2016-08-03+at+10.09.28+AM.png?format=750w',
  'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1496337729749-XOTIR5SY719Z9P2OOG68/Screen+Shot+2017-05-31+at+11.28.43+AM.png?format=1000w',
  'https://images.squarespace-cdn.com/content/v1/556ba425e4b016f4bc25c493/1496337905417-ZCG52DIVJYW2LA84KDMZ/Screen+Shot+2017-05-31+at+11.29.15+AM.png?format=1000w',
];

export const serviceData = [
  {
    direction: 'basic',
    headline: 'Fashion Stylist',
    info: "From statement pieces to classic looks, I'll work with you to create a wardrobe that's both on-trend and uniquely you.",
    image: image1,
  },
  {
    direction: 'reverse',
    headline: 'Personal Shopper',
    info: "From the latest trends to timeless classics, I'll help you find pieces that flatter your figure, accentuate your best features, and make you feel confident and beautiful.",
    image: image1,
  },
  {
    direction: 'basic',
    headline: 'Closet Analyst',
    info: "I'll work with you to assess your current wardrobe, identify what's working, and eliminate what's not.",
    image: image1,
  },
];
