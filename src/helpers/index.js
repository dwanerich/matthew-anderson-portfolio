import image1 from '../img/take-two-logo.gif';
import image2 from '../img/beautiful.png';
import image3 from '../img/myhood.png';


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
    headline: 'services',
    info: "",
    image: image1,
    options: [
      {
        optionName: 'Management',
        url: 'advertising',
      },
      {
        optionName: 'Marketing',
        url: 'editorial',
      },
      {
        optionName: 'Songwriting',
        url: 'celebrity',
      },
    ],
  },
  {
    direction: 'basic',
    headline: 'closet analyst',
    info: "VS THE KING - THATS MY HOOD",
    image: image3,
    options: [],
  },
  {
    direction: 'reverse',
    headline: 'CEO',
    info: "JAMES KNIGHT - BEAUTIFUL",
    image: image2,
    options: [],
  },
];
