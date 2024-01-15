/**
 * Takes in a `limit` value up to which the generated JS code can determine if a given number is odd
 * 
 * @param limit value up to which the generated JS code supports. This value has to be greater than or equal to 0
 * @returns JS code that determines if a given number is odd
 */
export function generateIsOddCode(limit: number): string {
  if(limit < 0) {
    throw new Error("'limit' value cannot be negative");
  }

  let jsCodeToReturn = `
export function isOdd(number) {
  if(number === 0) return false;`;
  for (let i = 1; i < limit + 1; ++i) {
    if(i % 2 === 1) {
      jsCodeToReturn += `
  else if(number === ${i}) return true;`;
    }
    else {
      jsCodeToReturn += `
  else if(number === ${i}) return false;`;
    }
  }
  return jsCodeToReturn += `
}`;
}
