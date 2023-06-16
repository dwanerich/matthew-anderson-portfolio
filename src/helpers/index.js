import image2 from '../img/Chop_Cheese.jpg';
import image1 from '../img/Champagne_Chinese_Food.jpg';
import image3 from '../img/Chop_Cheese.jpg';


export const deriveImageArrayFromCategory = (categoryAssets) => {
  const imageArray = [];

  for (let image in categoryAssets) {
    imageArray.push(categoryAssets[image]);
  }

  return imageArray;
};

export const serviceData = [
  {
    direction: 'basic',
    headline: 'MUSIC',
    info: "",
    image: image1,
    options: [
      {
        optionName: 'Management',
        url: 'management',
      },
      {
        optionName: 'Marketing',
        url: 'marketing',
      },
      {
        optionName: 'Songwriting',
        url: 'songwriting',
      },
    ],
  },
  {
    direction: 'reverse',
    headline: 'JOE PHANTOM',
    info: "CHOP CHEESE",
    image: image2,
    options: [],
  },
  {
    direction: 'basic',
    headline: 'JOE PHANTOM',
    info: "CHAMPAGE & CHINESE FOOD",
    image: image3,
    options: [],
  },
];
