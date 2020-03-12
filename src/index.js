module.exports = function towelSort(matrix) {
  if (matrix === 0 || matrix === undefined) {
      return [];
  } else {

      matrix.forEach((element, i) => {
          if (i % 2 != 0) {
              element.reverse();
          }
      });
      return matrix.flat();
  }
}
