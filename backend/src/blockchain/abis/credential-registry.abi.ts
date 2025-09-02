// Placeholder ABI for the Credential Registry contract. Replace with real ABI when available.
export const CREDENTIAL_REGISTRY_ABI: any[] = [
  {
    type: 'function',
    name: 'setStatus',
    inputs: [
      { name: 'scribeId', type: 'uint256' },
      { name: 'credType', type: 'string' },
      { name: 'status', type: 'uint8' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getStatus',
    inputs: [
      { name: 'scribeId', type: 'uint256' },
      { name: 'credType', type: 'string' },
    ],
    outputs: [{ name: '', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    name: 'StatusSet',
    inputs: [
      { name: 'scribeId', type: 'uint256', indexed: true },
      { name: 'credType', type: 'string', indexed: false },
      { name: 'status', type: 'uint8', indexed: false },
    ],
    anonymous: false,
  },
];
