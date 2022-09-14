/**
 * Obscures the address to only show the first four and last four characters of the address.
 *
 * @param address The address to obscure.
 * @returns The obscured address.
 */
export const obscureAddress = (address: string): string =>
  address.substring(0, 6) + "..." + address.substring(address.length - 4);
