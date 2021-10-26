export const countProductsInCart = giftsList => {
  return giftsList.reduce((total, gifts) => gifts.amount + total, 0);
};
