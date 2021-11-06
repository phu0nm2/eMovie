const NUMBERS_OF_SEATS_PER_LINE = 16;

export const splitSeatArray = (seatArr) => {
  // console.log(seatArr);

  let filteredArr = [];

  for (let i = 0; i < seatArr.length; i += NUMBERS_OF_SEATS_PER_LINE) {
    filteredArr.push(seatArr.slice(i, i + NUMBERS_OF_SEATS_PER_LINE));
  }

  return filteredArr;
};
