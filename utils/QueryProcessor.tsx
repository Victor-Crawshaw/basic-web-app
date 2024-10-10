export default function QueryProcessor(query: string): string {
  const normalizedQuery = query.toLowerCase();
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrewid")) {
    return (
      "Your andrewid is vcrawsha."
    );
  }

  if (query.toLowerCase().includes("name")) {
    return (
      "vicben"
    );
  }

  const mathMatch = normalizedQuery.match(/(\d+)\s*plus\s*(\d+)/);
  if (mathMatch) {
    const num1 = parseInt(mathMatch[1], 10);
    const num2 = parseInt(mathMatch[2], 10);
    const result = num1 + num2;
    return result.toString();
  }

  const largestMatch = normalizedQuery.match(/which of the following numbers is the largest: (\d+), (\d+), (\d+)/);
  if (largestMatch) {
    const num1 = parseInt(largestMatch[1], 10);
    const num2 = parseInt(largestMatch[2], 10);
    const num3 = parseInt(largestMatch[3], 10);
    const largest = Math.max(num1, num2, num3);
    return largest.toString();
  }

  const squareCubeMatch = normalizedQuery.match(/which of the following numbers is both a square and a cube: ([\d,\s]+)/);
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1]
      .split(',')
      .map(num => parseInt(num.trim(), 10));

    const perfectSixthPowers = numbers.filter(num => {
      const root = Math.cbrt(num);
      return Number.isInteger(root) && Number.isInteger(Math.sqrt(num));
    });

      return `${perfectSixthPowers.join(' ')}`;
  
  }

  const multiplicationMatch = normalizedQuery.match(/(\d+)\s*multiplied\s*by\s*(\d+)/);
  if (multiplicationMatch) {
    const num1 = parseInt(multiplicationMatch[1], 10);
    const num2 = parseInt(multiplicationMatch[2], 10);
    const result = num1 * num2;
    return result.toString();
  }

  const primeMatch = normalizedQuery.match(/which of the following numbers are primes: ([\d,\s]+)/);
  if (primeMatch) {
    const numbers = primeMatch[1]
      .split(',')
      .map(num => parseInt(num.trim(), 10));

    const primes = numbers.filter(isPrime);


      return `${primes.join(' ')}`;

  }
  return "";
}
function isPrime(num: number): boolean {
  if (num <= 1) return false; // 0 and 1 are not prime
  if (num <= 3) return true; // 2 and 3 are prime
  if (num % 2 === 0 || num % 3 === 0) return false; // eliminate multiples of 2 and 3

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}
