// Placeholder ABI for the Scribe Profile contract. Replace with real ABI when available.
export const SCRIBE_PROFILE_ABI: any[] = [
  {
    type: 'function',
    name: 'setProfile',
    inputs: [
      { name: 'scribeId', type: 'uint256' },
      { name: 'scribeOwner', type: 'address' },
      { name: 'handle', type: 'string' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getProfile',
    inputs: [{ name: 'scribeId', type: 'uint256' }],
    outputs: [
      { name: '', type: 'address' },
      { name: '', type: 'string' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    name: 'ProfileSet',
    inputs: [
      { name: 'scribeId', type: 'uint256', indexed: true },
      { name: 'owner', type: 'address', indexed: true },
      { name: 'handle', type: 'string', indexed: false },
    ],
    anonymous: false,
  },
];
