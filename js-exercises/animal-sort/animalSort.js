const animalSort = animals => {
    const compareNames = (animalName1, animalName2) => {
        if (animalName1 > animalName2) return 1;
        return -1;
      };
      return [...animals].sort(
        (animalA, animalB) =>
          animalA.numberOfLegs - animalB.numberOfLegs ||
          compareNames(animalA.name, animalB.name)
      );

};

export { animalSort };
