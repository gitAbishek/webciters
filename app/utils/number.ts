const percentageFormatter = Intl.NumberFormat("nl", {
  style: "percent",
});

export function formatAsPercentage(number: number) {
  return percentageFormatter.format(number);
}

const currencyFormatter = Intl.NumberFormat("nl", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export function formatAsCurrency(number: number) {
  return currencyFormatter.format(number);
}
