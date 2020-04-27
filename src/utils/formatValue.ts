const formatValue = (value: number): string => {
  return Intl.NumberFormat([], {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};

export default formatValue;
