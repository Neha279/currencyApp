let priceId = 0
export const showPriceList = text => ({
  type: 'GET_PRICE_LIST',
  id: priceId++,
  text
})