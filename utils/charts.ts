/**
 * Format a number to a compact currency string
 *
 * @param value The number to format
 * @returns The formatted string
 */
export const formatCompactCurrency = (value: number): string =>
  Intl.NumberFormat("en-US", {
    notation: "compact",
    style: "currency",
    currency: "USD",
  }).format(value);
