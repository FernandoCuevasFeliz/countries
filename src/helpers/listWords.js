const countryCurrencies = (arr) => {
  let str = '';
  for (let i = 0; i < arr?.length; i++) {
    if (i === arr?.length - 1) {
      str += arr[i];
    } else {
      str += arr[i] + ', ';
    }
  }

  return str;
};

const countryLanguages = (arr) => {
  let str = '';
  for (let i = 0; i < arr?.length; i++) {
    if (i === arr?.length - 1) {
      str += arr[i]?.name;
    } else {
      str += arr[i]?.name + ', ';
    }
  }

  return str;
};

export { countryCurrencies, countryLanguages };
