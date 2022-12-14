function numFriday13th(year) {
  let counter = 0;
  for (i = 1; i <= 12; i++) {
    let day = new Date(i + "/13/" + year);
    if (day.getDay() == 5) {
      counter++;
    }
  }
  return counter;
}

const friday13th2022 = numFriday13th(2022);
console.log(friday13th2022);
