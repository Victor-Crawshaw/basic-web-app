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
  return "";
}
