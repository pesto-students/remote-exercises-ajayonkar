
function alternatingCharacters(arrayOfStrings) {
  return arrayOfStrings.map((string) => {
    const removedCharArray = string
      .split('')
      .filter((character, index, array) => isNextCharEqual(character, array[index + 1]));

    return removedCharArray.length;
  });
}
const isNextCharEqual = (currentChar, nextChar) => currentChar === nextChar;
export { alternatingCharacters };
