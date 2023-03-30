export const deriveImageArrayFromCategory = (categoryAssets) => {
  const imageArray = [];

  for (let image in categoryAssets) {
    imageArray.push(categoryAssets[image]);
  }

  return imageArray;
};
