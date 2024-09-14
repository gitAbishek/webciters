export function getIsSale(price: number, suggestedPrice: number | null) {
  if (!suggestedPrice) return false;

  return price < suggestedPrice;
}

export function getSalePercentage(
  price: number,
  suggestedPrice: number | null
) {
  const suggestedPriceOrPrice = suggestedPrice ?? price;
  const increase = price - suggestedPriceOrPrice;
  return increase / suggestedPriceOrPrice;
}
