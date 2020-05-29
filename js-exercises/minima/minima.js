function minima(numbrsYouWant, arrayOfNumbers) {
    const sortedNumbers = arrayOfNumbers.sort((number1, number2) => number1 - number2);
    return sortedNumbers.slice(0, numbrsYouWant);
}

export { minima };
