/**
 * @dev Modify the typing of the address book to include new fields
 */
type AddressBookEntry = {
  name: string;
};

/**
 * @description Constant entries for addresses
 */
export const addressBook: Record<string, AddressBookEntry> = {
  "0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83": {
    name: "WFTM",
  },
  "0x4cdf39285d7ca8eb3f090fda0c069ba5f4145b37": { name: "TSHARE" },
  "0x5cc61a78f164885776aa610fb0fe1257df78e59b": { name: "SPIRIT" },
  "0x841fad6eae12c286d1fd18d1d525dffa75c7effe": { name: "BOO" },
  "0x888ef71766ca594ded1f0fa3ae64ed2941740a20": { name: "SOLID" },
  "0xae45a827625116d6c0c40b5d7359ecf68f8e9afd": { name: "COMB" },
  "0xd31fcd1f7ba190dbc75354046f6024a9b86014d7": { name: "SOLIDEX" },
  "0xe0654c8e6fd4d733349ac7e09f6f23da256bf475": { name: "SCREAM" },
  "0xf24bcf4d1e507740041c9cfd2dddb29585adce1e": { name: "BEETS" },
};

/**
 * Get the entry of a token from the address book.
 *
 * @param address The address of the token.
 * @returns The entry of the token.
 */
export const retrieveAddressEntry = (
  address: string
): AddressBookEntry | undefined =>
  Object.entries(addressBook).find(
    ([key]) => key.toLowerCase() === address.toLowerCase()
  )?.[1];
