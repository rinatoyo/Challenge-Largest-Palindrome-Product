/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits) {
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  // do your work here
  let arr = [];
  let pow = Math.pow(10, digits);

  for (let i = 10; i < pow; i++) {
    for (let j = 10; j < pow; j++) {
      let product = i * j;
      let check = parseInt(
        product
          .toString()
          .split("")
          .reverse()
          .join("")
      );
      if (product === check) {
        arr.push(product);
        factor_0 = i;
        factor_1 = j;
      }
    }
  }
  let getMax = Math.max(...arr);
  palindromeNumber = getMax;

  return {
    factor_0: factor_0,
    factor_1: factor_1,
    palindromeNumber: palindromeNumber
  };
};
