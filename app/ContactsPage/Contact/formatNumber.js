const formatNumber = number => {
  let formattedNumber = `(${number.slice(-10,-7)}) ${number.slice(-7,-4)} - ${number.slice(-4)}`;

  if (number.length > 11 && !(number.length === 12 && number[1] === '1'))
    formattedNumber = `${number.slice(0,-10)} ${formattedNumber}`;

  return formattedNumber;
};

export default formatNumber;
