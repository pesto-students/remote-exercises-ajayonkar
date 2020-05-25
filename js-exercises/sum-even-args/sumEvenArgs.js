const sumEvenArgs = (...args) => {
  let arrayOfEvenNo = args.filter((value) => value % 2 == 0);
  if (!arrayOfEvenNo.length) return 0;
  let totalofEvenNo = arrayOfEvenNo.reduce((total, amount) => total + amount);
  return totalofEvenNo
};

export { sumEvenArgs };
