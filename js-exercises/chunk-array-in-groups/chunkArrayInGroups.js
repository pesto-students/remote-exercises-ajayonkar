function chunkArrayInGroups(array, chunkSize) {
  let chunkArrayInGroups = [];
  for(let i=0; i<array.length; i+=chunkSize) {
    chunkArrayInGroups.push(array.slice(i, i+chunkSize));
  }
  return chunkArrayInGroups;
}

export {
  chunkArrayInGroups,
};
