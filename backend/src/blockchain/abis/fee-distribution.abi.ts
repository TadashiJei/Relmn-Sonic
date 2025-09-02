// Placeholder ABI for the Fee Distribution contract. Replace with real ABI when available.
export const FEE_DISTRIBUTION_ABI: any[] = [
  {
    type: 'function',
    name: 'setSplit',
    inputs: [
      { name: 'scribbleId', type: 'uint256' },
      { name: 'scribeBps', type: 'uint16' },
      { name: 'protocolBps', type: 'uint16' },
    ],
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    name: 'getSplit',
    inputs: [{ name: 'scribbleId', type: 'uint256' }],
    outputs: [
      { name: '', type: 'uint256' },
      { name: '', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'event',
    name: 'SplitSet',
    inputs: [
      { name: 'scribbleId', type: 'uint256', indexed: true },
      { name: 'scribeBps', type: 'uint16', indexed: false },
      { name: 'protocolBps', type: 'uint16', indexed: false },
    ],
    anonymous: false,
  },
];
